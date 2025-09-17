import express from "express";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;
  console.log("📦 Incoming request:", req.body);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    console.log("✅ Created PaymentIntent:", paymentIntent.id);
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error("❌ Stripe error:", err.type, err.message);
    res.status(500).send({ error: err.message });
  }
});

app.listen(3001, () =>
  console.log("✅ Server running at http://localhost:3001"),
);
