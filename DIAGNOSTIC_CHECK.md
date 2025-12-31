# Diagnostic Steps to Fix Payment Issue

## Step 1: Check Browser Console

1. Open your website
2. Press **F12** to open DevTools
3. Go to **Console** tab
4. Click "Register & Pay" button
5. Look for error messages - they will show:
   - The API URL being called
   - The exact error
   - Network request details

## Step 2: Check Network Tab

1. In DevTools, go to **Network** tab
2. Click "Register & Pay" button
3. Look for the request to `/api/create-order`
4. Click on it to see:
   - **Status Code** (404 = not found, 500 = server error, etc.)
   - **Response** (what the server returned)
   - **Request URL** (the full URL being called)

## Step 3: Verify Environment Variables in Vercel

Go to Vercel Dashboard → Your Project → Settings → Environment Variables

Make sure these are set:
- ✅ `REACT_APP_RAZORPAY_KEY_ID` = `rzp_live_ReLpq6NsY8ZBqc`
- ✅ `RAZORPAY_KEY_ID` = `rzp_live_ReLpq6NsY8ZBqc`
- ✅ `RAZORPAY_KEY_SECRET` = `BR2AZUJ6Qo56RQdwnHdOpBLG`

**Important:** After adding variables, you MUST redeploy!

## Step 4: Check Vercel Function Logs

1. Go to Vercel Dashboard → Your Project
2. Click on **Deployments** tab
3. Click on the latest deployment
4. Click on **Functions** tab
5. Look for `/api/create-order`
6. Check the logs for errors

## Step 5: Test API Endpoint Directly

Try calling the API directly in your browser console:

```javascript
fetch('/api/create-order', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ amount: 9900, currency: 'INR' })
})
.then(r => r.json())
.then(console.log)
.catch(console.error)
```

## Common Issues & Solutions:

### Issue 1: 404 Not Found
**Problem:** API functions not deployed
**Solution:** 
- Make sure `frontend/api/create-order.js` exists
- Make sure it's committed to git
- Redeploy on Vercel

### Issue 2: 500 Server Error
**Problem:** Environment variables not set or wrong
**Solution:**
- Check Vercel environment variables
- Make sure `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` are set
- Redeploy after adding variables

### Issue 3: Network Error / CORS
**Problem:** API not accessible
**Solution:**
- Check if API functions are in correct location
- Verify Vercel project settings
- Check if build is successful

### Issue 4: "Razorpay Key ID is not configured"
**Problem:** Frontend env variable missing
**Solution:**
- Add `REACT_APP_RAZORPAY_KEY_ID` in Vercel
- Redeploy

## Quick Fix Checklist:

- [ ] Environment variables added in Vercel
- [ ] Redeployed after adding variables
- [ ] API files exist in `frontend/api/` folder
- [ ] Files are committed to git
- [ ] Checked browser console for errors
- [ ] Checked Vercel function logs
- [ ] Tested API endpoint directly

