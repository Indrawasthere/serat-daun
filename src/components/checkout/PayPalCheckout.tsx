import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

interface PayPalCheckoutProps {
  productTitle: string;
  productPrice: number;
  productId: string;
}

// PayPal sandbox client ID (for testing)
const PAYPAL_CLIENT_ID =
  "AQPNp-RtfMVY2sL5mBghGJ8Z-HQKFL0-pDUH3Y8vCFGnMi5w9yXvnSJnQsR-ghRvGHKz6gEVJvK1NvJD";

const PayPalCheckout: React.FC<PayPalCheckoutProps> = ({
  productTitle,
  productPrice,
  productId,
}) => {
  const [success, setSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");

  const priceInUSD = (productPrice / 16000).toFixed(2); // Rough conversion IDR to USD

  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          description: productTitle,
          amount: {
            currency_code: "USD",
            value: priceInUSD,
          },
        },
      ],
      application_context: {
        shipping_preference: "NO_SHIPPING",
      },
    });
  };

  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then((details: any) => {
      setSuccess(true);
      setOrderId(data.orderID);

      // Here you would typically send order data to your backend
      console.log("Payment successful!", details);

      // Show success message
      alert(
        `Payment successful! Your order ID is: ${data.orderID}

We will contact you via WhatsApp for shipping details.`,
      );
    });
  };

  const onError = (err: any) => {
    setError("Payment failed. Please try again or contact us via WhatsApp.");
    console.error("PayPal error:", err);
  };

  return (
    <div className="paypal-checkout-container">
      {!success ? (
        <>
          <div
            className="mb-3 p-3 border rounded"
            style={{ backgroundColor: "#f0fdf4" }}
          >
            <div className="d-flex align-items-center mb-2">
              <i className="fas fa-globe text-success me-2"></i>
              <h6 className="mb-0" style={{ color: "#059669" }}>
                International Payment
              </h6>
            </div>
            <p className="text-sm mb-2" style={{ fontSize: "0.875rem" }}>
              <strong>Amount:</strong> ${priceInUSD} USD (approx.)
            </p>
            <p
              className="text-sm mb-0 text-muted"
              style={{ fontSize: "0.75rem" }}
            >
              * Sandbox mode for testing. Use PayPal sandbox account.
            </p>
          </div>

          <PayPalScriptProvider
            options={{
              clientId: PAYPAL_CLIENT_ID,
              currency: "USD",
              intent: "capture",
            }}
          >
            <PayPalButtons
              createOrder={createOrder}
              onApprove={onApprove}
              onError={onError}
              style={{
                layout: "vertical",
                color: "gold",
                shape: "rect",
                label: "pay",
              }}
            />
          </PayPalScriptProvider>

          {error && (
            <div className="alert alert-danger mt-3" role="alert">
              {error}
            </div>
          )}
        </>
      ) : (
        <div className="alert alert-success" role="alert">
          <i className="fas fa-check-circle me-2"></i>
          Payment successful! Order ID: {orderId}
          <p className="mt-2 mb-0">
            We will contact you shortly via WhatsApp for shipping details.
          </p>
        </div>
      )}
    </div>
  );
};

export default PayPalCheckout;
