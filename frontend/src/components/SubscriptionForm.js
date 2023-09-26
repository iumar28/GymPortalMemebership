import React, { useState } from "react";
import { CardElement, useStripe, useElements,Elements } from "@stripe/react-stripe-js";
import { Button, Form } from "react-bootstrap";

const SubscriptionForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [plan, setPlan] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a payment method in Stripe
const { paymentMethod } = await stripe.createPaymentMethod({
    type: "card",
    card: elements.getElement(CardElement),
  });
  
  // Create a customer and save the payment method in Stripe
  const { customer_id } = await fetch("/create-customer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      name: name,
      payment_method: paymentMethod.id,
    }),
  }).then((res) => res.json());
  
  // Create a subscription in Stripe
  const { subscription_id } = await fetch("/create-subscription", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer_id: customer_id,
      plan: plan,
    }),
  }).then((res) => res.json());
  
  // Redirect user to success page
  window.location.href = "/success";
};

return (
    <Elements>
<Form onSubmit={handleSubmit}>
<Form.Group controlId="formEmail">
<Form.Label>Email</Form.Label>
<Form.Control
type="email"
placeholder="Enter email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
</Form.Group>
<Form.Group controlId="formName">
    <Form.Label>Name</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </Form.Group>

  <Form.Group controlId="formPlan">
    <Form.Label>Choose a Plan</Form.Label>
    <Form.Control
      as="select"
      value={plan}
      onChange={(e) => setPlan(e.target.value)}
    >
      <option value="basic">Basic Plan</option>
      <option value="silver">Silver Plan</option>
      <option value="gold">Gold Plan</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="formCard">
    <Form.Label>Card Details</Form.Label>
    <CardElement options={{}} />
  </Form.Group>

  <Button variant="primary" type="submit" disabled={!stripe}>
    Pay Now
  </Button>
</Form>
</Elements>
);
};

export default SubscriptionForm;