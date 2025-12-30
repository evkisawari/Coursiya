import Razorpay from "razorpay";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpay.orders.create({
      amount: 9900, // ₹99 = 9900 paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });

    return res.status(200).json(order);
  } catch (error) {
    console.error("Razorpay error:", error);
    return res.status(500).json({ error: "Failed to create order" });
  }
}
