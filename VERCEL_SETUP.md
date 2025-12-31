# Vercel Deployment Setup for Razorpay

## ✅ What's Been Set Up

I've created Vercel serverless functions for your Razorpay payment integration:
- `/api/create-order.js` - Creates Razorpay orders
- `/api/verify-payment.js` - Verifies payments

## 🔑 Environment Variables to Add in Vercel

Go to your Vercel project → **Settings** → **Environment Variables** and add:

### Required Variables:

1. **REACT_APP_RAZORPAY_KEY_ID**
   - **Value:** `rzp_live_ReLpq6NsY8ZBqc`
   - **Environments:** Production, Preview, Development
   - **Note:** Razorpay Live Key ID for payment checkout

2. **RAZORPAY_KEY_ID**
   - **Value:** `rzp_live_ReLpq6NsY8ZBqc`
   - **Environments:** Production, Preview, Development
   - **Note:** Razorpay Key ID for serverless functions (same as above)

3. **RAZORPAY_KEY_SECRET**
   - **Value:** `BR2AZUJ6Qo56RQdwnHdOpBLG`
   - **Environments:** Production, Preview, Development
   - **Note:** Razorpay Key Secret for payment verification (keep secret!)

4. **RAZORPAY_WEBHOOK_SECRET** (Optional - for webhooks)
   - **Value:** `auraic-0DB0-2025`
   - **Environments:** Production, Preview, Development
   - **Note:** Razorpay webhook secret for verifying webhook events

### Optional Variable:

5. **REACT_APP_BACKEND_URL** (Optional)
   - **Value:** Leave empty or set to your Vercel domain (e.g., `https://coursiya.vercel.app`)
   - **Note:** If empty, the app will use the current domain automatically

## 📝 Steps to Deploy

1. **Add Environment Variables in Vercel:**
   - Go to your Vercel project dashboard
   - Click **Settings** → **Environment Variables**
   - Add all the variables listed above
   - Make sure to select all environments (Production, Preview, Development)

2. **Commit and Push:**
   ```bash
   git add .
   git commit -m "Add Razorpay serverless functions for Vercel"
   git push
   ```

3. **Vercel will auto-deploy:**
   - Vercel will detect the changes and deploy automatically
   - The API functions will be available at:
     - `https://your-domain.vercel.app/api/create-order`
     - `https://your-domain.vercel.app/api/verify-payment`

4. **Test the Deployment:**
   - Visit your deployed site
   - Try the registration form
   - The payment should work now!

## 🔍 How It Works

- **Frontend** (React app) is deployed on Vercel
- **API Functions** are serverless functions in `/api` folder
- Both are on the **same domain**, so no CORS issues
- The frontend automatically uses the current domain for API calls

## ✅ Verification

After deployment, test these endpoints:

1. **Health Check:**
   ```bash
   curl https://your-domain.vercel.app/api/create-order
   ```
   Should return: `{"message":"Method not allowed"}` (because it needs POST)

2. **Test Create Order:**
   ```bash
   curl -X POST https://your-domain.vercel.app/api/create-order \
     -H "Content-Type: application/json" \
     -d '{"amount":9900,"currency":"INR"}'
   ```
   Should return order details with `order_id`

## 🐛 Troubleshooting

### "Unable to connect to server"
- Make sure environment variables are set in Vercel
- Redeploy after adding environment variables
- Check Vercel function logs in the dashboard

### "Failed to create order"
- Verify `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` are correct
- Check Vercel function logs for detailed errors
- Make sure you're using Live keys (not test keys) if in production

### API Functions Not Found
- Make sure files are in `/api` folder (not `/frontend/api`)
- Check `vercel.json` configuration
- Verify the files are committed to git

## 📚 Files Created

- `frontend/api/create-order.js` - Serverless function for creating orders
- `frontend/api/verify-payment.js` - Serverless function for verifying payments
- `frontend/vercel.json` - Vercel configuration
- Updated `frontend/src/components/RegistrationSection.jsx` - Uses same domain for API

## 🎉 You're All Set!

Once you add the environment variables and deploy, your Razorpay integration will work on Vercel!

