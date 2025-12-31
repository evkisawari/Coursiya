# ✅ Vercel Environment Variables Checklist

## Required Environment Variables for Razorpay

Go to: **Vercel Dashboard** → **Your Project** → **Settings** → **Environment Variables**

### Add These 3 Variables:

#### 1. **REACT_APP_RAZORPAY_KEY_ID**
   - **Key:** `REACT_APP_RAZORPAY_KEY_ID`
   - **Value:** `rzp_live_ReLpq6NsY8ZBqc`
   - **Environments:** ✅ Production, ✅ Preview, ✅ Development
   - **Note:** Used by frontend React app for Razorpay checkout

#### 2. **RAZORPAY_KEY_ID**
   - **Key:** `RAZORPAY_KEY_ID`
   - **Value:** `rzp_live_ReLpq6NsY8ZBqc`
   - **Environments:** ✅ Production, ✅ Preview, ✅ Development
   - **Note:** Used by serverless functions (`/api/create-order.js` and `/api/verify-payment.js`)

#### 3. **RAZORPAY_KEY_SECRET**
   - **Key:** `RAZORPAY_KEY_SECRET`
   - **Value:** `BR2AZUJ6Qo56RQdwnHdOpBLG`
   - **Environments:** ✅ Production, ✅ Preview, ✅ Development
   - **Note:** Used by serverless functions for payment verification (KEEP SECRET!)

### Optional (for webhooks):

#### 4. **RAZORPAY_WEBHOOK_SECRET** (Optional)
   - **Key:** `RAZORPAY_WEBHOOK_SECRET`
   - **Value:** `auraic-0DB0-2025`
   - **Environments:** ✅ Production, ✅ Preview, ✅ Development
   - **Note:** For Razorpay webhook verification

---

## 📋 Step-by-Step Instructions:

1. **Go to Vercel Dashboard:**
   - Visit [vercel.com](https://vercel.com)
   - Select your **Coursiya** project

2. **Navigate to Environment Variables:**
   - Click **Settings** (gear icon)
   - Click **Environment Variables** in the left sidebar

3. **Add Each Variable:**
   - Click **"Add New"** button
   - Enter the **Key** name
   - Enter the **Value**
   - **IMPORTANT:** Check all three boxes:
     - ☑️ Production
     - ☑️ Preview  
     - ☑️ Development
   - Click **Save**

4. **Repeat for all 3-4 variables**

5. **Redeploy:**
   - After adding all variables, go to **Deployments** tab
   - Click the **"..."** menu on the latest deployment
   - Click **"Redeploy"**
   - Or push a new commit to trigger auto-deploy

---

## 🔍 How to Verify:

### Check if variables are set:
1. Go to **Settings** → **Environment Variables**
2. You should see all 3-4 variables listed
3. Make sure they're enabled for all environments

### Test the API:
After redeploying, test the endpoint:
```bash
curl -X POST https://your-domain.vercel.app/api/create-order \
  -H "Content-Type: application/json" \
  -d '{"amount":9900,"currency":"INR"}'
```

Should return order details (not an error).

---

## ⚠️ Common Mistakes:

1. **Not selecting all environments** - Make sure Production, Preview, and Development are all checked
2. **Typos in variable names** - Double-check: `RAZORPAY_KEY_ID` (not `RAZORPAY_KEY` or `RAZORPAY_KEYID`)
3. **Not redeploying** - Environment variables only apply to new deployments
4. **Wrong values** - Make sure you copied the exact values (no extra spaces)

---

## 🎯 Quick Copy-Paste Values:

```
REACT_APP_RAZORPAY_KEY_ID = rzp_live_ReLpq6NsY8ZBqc
RAZORPAY_KEY_ID = rzp_live_ReLpq6NsY8ZBqc
RAZORPAY_KEY_SECRET = BR2AZUJ6Qo56RQdwnHdOpBLG
RAZORPAY_WEBHOOK_SECRET = auraic-0DB0-2025
```

---

## ✅ After Adding Variables:

1. **Redeploy your project** (important!)
2. **Wait for deployment to complete**
3. **Test the payment form**
4. The error should be gone! 🎉

