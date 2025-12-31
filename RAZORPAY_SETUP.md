# Razorpay Payment Integration Setup Guide

This guide will help you set up Razorpay payment integration for your Coursiya application.

## Prerequisites

1. A Razorpay account - Sign up at [https://razorpay.com](https://razorpay.com)
2. Node.js installed on your system
3. Your Razorpay API keys (Key ID and Key Secret)

## Step 1: Get Your Razorpay API Keys

1. Log in to your [Razorpay Dashboard](https://dashboard.razorpay.com)
2. Go to **Settings** → **API Keys**
3. If you don't have keys yet, click **Generate Test Key** (for testing) or **Generate Live Key** (for production)
4. Copy your **Key ID** and **Key Secret**

## Step 2: Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the `backend` directory:
```bash
# Windows (PowerShell)
New-Item -Path .env -ItemType File

# Mac/Linux
touch .env
```

4. Add your Razorpay credentials to `.env`:
```env
PORT=5000
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_key_secret_here
```

5. Start the backend server:
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:5000` by default.

## Step 3: Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Create or update your `.env` file in the `frontend` directory:
```env
REACT_APP_BACKEND_URL=http://localhost:5000
REACT_APP_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
```

**Note:** Use the same Key ID in both frontend and backend.

3. Install dependencies (if not already done):
```bash
npm install
```

4. Start the frontend development server:
```bash
npm start
```

## Step 4: Testing the Integration

1. Make sure both backend and frontend servers are running
2. Open your application in the browser (usually `http://localhost:3000`)
3. Navigate to the registration section
4. Fill in the registration form
5. Click "Register & Pay ₹99"
6. You'll be redirected to Razorpay's payment gateway
7. Use Razorpay test cards for testing:
   - **Card Number:** 4111 1111 1111 1111
   - **CVV:** Any 3 digits (e.g., 123)
   - **Expiry:** Any future date (e.g., 12/25)
   - **Name:** Any name

## API Endpoints

### POST `/api/create-order`
Creates a Razorpay order.

**Request:**
```json
{
  "amount": 9900,
  "currency": "INR",
  "registration_data": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890"
  }
}
```

**Response:**
```json
{
  "order_id": "order_xxxxx",
  "amount": 9900,
  "currency": "INR",
  "receipt": "receipt_xxxxx"
}
```

### POST `/api/verify-payment`
Verifies the payment after successful transaction.

**Request:**
```json
{
  "razorpay_order_id": "order_xxxxx",
  "razorpay_payment_id": "pay_xxxxx",
  "razorpay_signature": "signature_xxxxx",
  "registration_data": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890"
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "Payment verified successfully",
  "payment_id": "pay_xxxxx",
  "order_id": "order_xxxxx",
  "amount": 9900
}
```

## Production Deployment

### Backend

1. Set environment variables on your hosting platform:
   - `PORT` (optional, defaults to 5000)
   - `RAZORPAY_KEY_ID` (use your **Live Key ID**)
   - `RAZORPAY_KEY_SECRET` (use your **Live Key Secret**)

2. Update the frontend `.env` file:
```env
REACT_APP_BACKEND_URL=https://your-backend-domain.com
REACT_APP_RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxxx
```

### Important Notes

- **Never commit your `.env` files** to version control
- Use **Test Keys** for development and testing
- Use **Live Keys** only in production
- The backend server must be accessible from your frontend domain
- Ensure CORS is properly configured (already done in the backend)

## Troubleshooting

### Payment not working?

1. **Check environment variables:**
   - Verify `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` are set correctly
   - Make sure you're using the same Key ID in both frontend and backend

2. **Check backend server:**
   - Ensure the backend is running on the correct port
   - Check backend logs for any errors
   - Verify the backend URL in frontend `.env` matches the actual backend URL

3. **Check browser console:**
   - Open browser DevTools (F12)
   - Check the Console tab for any JavaScript errors
   - Check the Network tab for failed API requests

4. **Razorpay Dashboard:**
   - Check your Razorpay dashboard for payment logs
   - Verify your account is active and has sufficient balance (for live mode)

### Common Errors

- **"Payment system is loading"**: Razorpay script hasn't loaded yet. Wait a moment and try again.
- **"Failed to create order"**: Check backend logs and verify Razorpay credentials.
- **"Payment verification failed"**: Signature mismatch. Check that the same Key Secret is used in backend.

## Next Steps

1. **Database Integration:** Implement database storage for registration data in the `verify-payment` endpoint
2. **Email Notifications:** Send confirmation emails after successful payment
3. **Payment History:** Create an admin panel to view payment history
4. **Refund Handling:** Implement refund functionality if needed

## Support

For Razorpay-specific issues, refer to:
- [Razorpay Documentation](https://razorpay.com/docs/)
- [Razorpay Support](https://razorpay.com/support/)

