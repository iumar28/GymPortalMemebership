// CONNECTING TO STRIPE

import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51MvzO8SDkxvjWhYPQMhMAy6Da8ah80pc98CeGuvNl9ZvR4532UkBUZ9xJ2KoGNJnhplymM7SovkfntA6tUFKtcjT00DqnsRDnM");
  }
  return stripePromise;
};

export default getStripe;