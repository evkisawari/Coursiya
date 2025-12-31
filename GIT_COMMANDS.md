# Git Commands to Commit and Push Changes

## If you already have a git repository connected:

```bash
# Navigate to your project
cd C:\Users\dparw\Desktop\Coursiya

# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Add Razorpay payment integration with Vercel serverless functions"

# Push to remote
git push
```

## If you need to initialize git first:

```bash
# Navigate to your project
cd C:\Users\dparw\Desktop\Coursiya

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Add Razorpay payment integration with Vercel serverless functions"

# Add remote (replace with your actual repository URL)
git remote add origin https://github.com/your-username/your-repo.git

# Push to remote
git push -u origin main
```

## Files that will be committed:

- `frontend/api/create-order.js` - Razorpay order creation endpoint
- `frontend/api/verify-payment.js` - Payment verification endpoint
- `frontend/vercel.json` - Vercel configuration
- `frontend/src/components/RegistrationSection.jsx` - Updated with better error handling
- Documentation files (optional to commit)

## After pushing:

1. Vercel will automatically detect the push
2. It will start a new deployment
3. Make sure you've added the environment variables in Vercel before deployment completes
4. Test the payment form after deployment

