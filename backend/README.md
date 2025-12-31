# Coursiya Backend Server

Backend server for Coursiya with Razorpay payment integration.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

3. Add your Razorpay credentials to `.env`:
   - Get your Razorpay Key ID and Key Secret from [Razorpay Dashboard](https://dashboard.razorpay.com/app/keys)
   - Add them to the `.env` file

4. Start the server:
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

## API Endpoints

### POST `/api/create-order`
Creates a Razorpay order for payment.

**Request Body:**
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
Verifies a Razorpay payment after successful transaction.

**Request Body:**
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

## Environment Variables

- `PORT`: Server port (default: 5000)
- `RAZORPAY_KEY_ID`: Your Razorpay Key ID
- `RAZORPAY_KEY_SECRET`: Your Razorpay Key Secret

## Notes

- The server includes CORS middleware to allow requests from your frontend
- Payment verification uses HMAC SHA256 signature verification
- You should implement database storage for registration data in the verify-payment endpoint

