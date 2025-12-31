# Troubleshooting "Failed to initiate payment" Error

## Quick Checklist

### 1. Check Backend Server is Running

**Start the backend server:**
```bash
cd backend
npm install  # If you haven't already
npm start    # or npm run dev for development
```

You should see:
```
Server is running on port 5000
Health check: http://localhost:5000/health
```

**Test the backend:**
- Open browser: `http://localhost:5000/health`
- Should return: `{"status":"ok","message":"Server is running"}`

### 2. Check Environment Variables

**Frontend `.env` file** (in `frontend` directory):
```env
REACT_APP_BACKEND_URL=http://localhost:5000
REACT_APP_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
```

**Backend `.env` file** (in `backend` directory):
```env
PORT=5000
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_key_secret_here
```

**Important:**
- After changing `.env` files, **restart both servers**
- Use the **same Key ID** in both frontend and backend
- Make sure there are **no spaces** around the `=` sign

### 3. Check Browser Console

1. Open browser DevTools (F12)
2. Go to **Console** tab
3. Click "Register & Pay" button
4. Look for error messages - they will now be more specific

### 4. Check Network Tab

1. Open browser DevTools (F12)
2. Go to **Network** tab
3. Click "Register & Pay" button
4. Look for the request to `/api/create-order`
5. Check:
   - **Status Code**: Should be 200 (success) or you'll see the error
   - **Request URL**: Should match your backend URL
   - **Response**: Click on the request to see the response

### 5. Common Error Messages & Solutions

#### "Backend URL is not configured"
- **Solution**: Add `REACT_APP_BACKEND_URL` to your frontend `.env` file
- **Restart** the frontend server after adding

#### "Razorpay Key ID is not configured"
- **Solution**: Add `REACT_APP_RAZORPAY_KEY_ID` to your frontend `.env` file
- **Restart** the frontend server after adding

#### "Unable to connect to server"
- **Solution**: Make sure backend server is running on the correct port
- Check if `REACT_APP_BACKEND_URL` matches the backend server URL

#### "Failed to create order" (from backend)
- **Solution**: Check backend `.env` file has correct Razorpay credentials
- Verify Razorpay Key ID and Key Secret are correct
- Check backend console for detailed error messages

#### CORS Error
- **Solution**: Backend already has CORS enabled, but if you see CORS errors:
  - Make sure backend is running
  - Check that `REACT_APP_BACKEND_URL` is correct
  - Backend should allow requests from your frontend URL

## Step-by-Step Debugging

### Step 1: Verify Backend is Running
```bash
# In backend directory
npm start
```

### Step 2: Test Backend Endpoint
Open in browser or use curl:
```bash
curl http://localhost:5000/health
```

Should return: `{"status":"ok","message":"Server is running"}`

### Step 3: Test Create Order Endpoint
```bash
curl -X POST http://localhost:5000/api/create-order \
  -H "Content-Type: application/json" \
  -d '{"amount":9900,"currency":"INR"}'
```

Should return order details with `order_id`.

### Step 4: Check Frontend Environment
1. Open browser console
2. Type: `process.env.REACT_APP_BACKEND_URL`
3. Should show your backend URL (not undefined)

### Step 5: Check Network Request
1. Open DevTools → Network tab
2. Click "Register & Pay"
3. Find the `create-order` request
4. Check:
   - **URL**: Should be `http://localhost:5000/api/create-order` (or your backend URL)
   - **Status**: Should be 200
   - **Response**: Should have `order_id`

## Still Not Working?

1. **Check backend logs** - Look at the terminal where backend is running
2. **Check browser console** - Look for JavaScript errors
3. **Check Network tab** - See the actual HTTP request/response
4. **Verify Razorpay credentials** - Make sure they're correct in Razorpay dashboard

## Getting Razorpay Credentials

1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/app/keys)
2. Click **Generate Test Key** (for testing)
3. Copy **Key ID** and **Key Secret**
4. Add them to both frontend and backend `.env` files

