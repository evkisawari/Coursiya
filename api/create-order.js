const Razorpay = require('razorpay');

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
    // Initialize Razorpay
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

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
}

