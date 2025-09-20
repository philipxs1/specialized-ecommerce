import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const { amount } = req.body as { amount: number };

    if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "AUD",
      automatic_payment_methods: { enabled: true },
    });

    return res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (err: any) {
    console.error("❌ Stripe error:", err.message);
    return res.status(500).json({ error: err.message });
  }
}
