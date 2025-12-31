const express = require('express');
const cors = require('cors');
const Razorpay = require('razorpay');
const crypto = require('crypto');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Create Razorpay order
app.post('/api/create-order', async (req, res) => {
  try {
    const { amount, currency = 'INR', registration_data } = req.body;

    if (!amount) {
      return res.status(400).json({ 
        error: 'Amount is required',
        message: 'Please provide the payment amount'
      });
    }

    // Create order with Razorpay
    const order = await razorpay.orders.create({
      amount: amount, // Amount in paise (e.g., 9900 = ₹99)
      currency: currency,
      receipt: `receipt_${Date.now()}_${Math.random().toString(36).substring(7)}`,
      notes: {
        registration_data: JSON.stringify(registration_data || {})
      }
    });

    res.status(200).json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt
    });
  } catch (error) {
    console.error('Razorpay order creation error:', error);
    res.status(500).json({ 
      error: 'Failed to create order',
      message: error.message || 'An error occurred while creating the order'
    });
  }
});

// Verify Razorpay payment
app.post('/api/verify-payment', async (req, res) => {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      registration_data 
    } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ 
        success: false,
        error: 'Missing payment verification data',
        message: 'All payment verification fields are required'
      });
    }

    // Create signature
    const text = `${razorpay_order_id}|${razorpay_payment_id}`;
    const generated_signature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(text)
      .digest('hex');

    // Verify signature
    if (generated_signature !== razorpay_signature) {
      return res.status(400).json({ 
        success: false,
        error: 'Invalid signature',
        message: 'Payment verification failed. Signature mismatch.'
      });
    }

    // Fetch payment details from Razorpay
    const payment = await razorpay.payments.fetch(razorpay_payment_id);

    // Verify payment status
    if (payment.status !== 'captured' && payment.status !== 'authorized') {
      return res.status(400).json({ 
        success: false,
        error: 'Payment not successful',
        message: `Payment status: ${payment.status}`
      });
    }

    // Here you can save the registration data to your database
    // For now, we'll just return success
    console.log('Payment verified successfully:', {
      order_id: razorpay_order_id,
      payment_id: razorpay_payment_id,
      amount: payment.amount,
      registration_data: registration_data
    });

    // TODO: Save registration_data to database
    // Example:
    // await saveRegistration({
    //   ...registration_data,
    //   order_id: razorpay_order_id,
    //   payment_id: razorpay_payment_id,
    //   amount: payment.amount,
    //   status: 'completed'
    // });

    res.status(200).json({
      success: true,
      message: 'Payment verified successfully',
      payment_id: razorpay_payment_id,
      order_id: razorpay_order_id,
      amount: payment.amount
    });
  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(500).json({ 
      success: false,
      error: 'Payment verification failed',
      message: error.message || 'An error occurred while verifying the payment'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`Razorpay Key ID: ${process.env.RAZORPAY_KEY_ID ? 'Set' : 'Not set'}`);
});

