const Razorpay = require('razorpay');
const crypto = require('crypto');

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

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

    // Initialize Razorpay
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

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
    console.log('Payment verified successfully:', {
      order_id: razorpay_order_id,
      payment_id: razorpay_payment_id,
      amount: payment.amount,
      registration_data: registration_data
    });

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
}

