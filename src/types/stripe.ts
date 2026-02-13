export interface TierCheckoutParams {
  tierId: number;
  tierName: string;
  priceId: string;
  customerEmail?: string;
}

export interface CheckoutSessionResponse {
  sessionId: string;
  url: string;
}

export interface StripeWebhookPayload {
  type: string;
  data: {
    object: {
      id: string;
      customer_email: string;
      payment_intent: string;
      metadata: {
        tier_id: string;
        license_id: string;
      };
    };
  };
}
