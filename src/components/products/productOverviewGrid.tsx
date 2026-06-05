import { useState } from "react";
import ProductRating from "../reviews/reviewRating";
import ProductGallery from "./productGallery";
import ProductSizes from "./productSizes";
import PayPalCheckout from "../checkout/PayPalCheckout";
import { useLanguage } from "../../contexts/LanguageContext";

interface Props {
  title: string;
  colors: string[];
  images: {
    src: string;
    alt: string;
  }[];
  full_description: string;
  price: number;
  highlights: string[];
  details: string;
  rating: number;
  reviews: number;
  sizes: any;
  productId?: string;
  whatsappNumber?: string;
}

export default function ProductOverview({
  title,
  colors,
  images,
  full_description,
  price,
  highlights,
  details,
  rating,
  reviews,
  sizes,
  productId,
  whatsappNumber = "6282312335006",
}: Props) {
  const [selectedSize, setSelectedSize] = useState("");
  const [showPayPal, setShowPayPal] = useState(false);
  const { t } = useLanguage();

  const handleWhatsAppCheckout = () => {
    const sizeText = selectedSize ? ` - Ukuran: ${selectedSize}` : "";
    const message = `Halo, saya tertarik dengan produk:

*${title}*${sizeText}
Harga: Rp ${price.toLocaleString("id-ID")}

Apakah produk ini masih tersedia?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div className="card card-product card-plain">
        <div className="row">
          {images && images.length > 0 && <ProductGallery images={images} />}
          <div className="col-12 col-lg-6 ps-lg-5">
            {title && title.length > 0 && <h2 className="mt-4">{title}</h2>}
            {full_description && full_description.length > 0 && (
              <p className="mb-5">{full_description}</p>
            )}

            <form onSubmit={(e) => e.preventDefault()}>
              {price && (
                <div className="d-flex">
                  <h3 className="font-weight-normal">
                    Rp {price.toLocaleString("id-ID")}
                  </h3>
                </div>
              )}

              {rating && rating > 0 && (
                <>
                  <h3 className="sr-only">{t("product_reviews")}</h3>
                  <div className="d-flex mb-3">
                    <ProductRating rating={rating} />
                    <span className="ms-3">
                      {reviews} {t("product_reviews").toLowerCase()}
                    </span>
                  </div>
                </>
              )}

              {sizes && Object.keys(sizes).length > 0 && (
                <div className="mb-4">
                  <ProductSizes sizes={sizes} onSizeChange={setSelectedSize} />
                </div>
              )}

              {/* Payment Options Section */}
              <div className="payment-options-container mb-4">
                <h5 className="mb-3" style={{ color: "#059669" }}>
                  {t("checkout")} Options
                </h5>

                {/* WhatsApp for Indonesian Customers */}
                <div
                  className="payment-option mb-3 p-3 border rounded"
                  style={{ backgroundColor: "#f0fdf4" }}
                >
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center">
                      <i
                        className="fab fa-whatsapp text-success me-2"
                        style={{ fontSize: "1.5rem" }}
                      ></i>
                      <div>
                        <h6 className="mb-0">{t("product_local")}</h6>
                        <small className="text-muted">
                          Payment via WhatsApp
                        </small>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-success w-100"
                    type="button"
                    onClick={handleWhatsAppCheckout}
                    data-testid="whatsapp-checkout-button"
                  >
                    <i className="fab fa-whatsapp me-2"></i>
                    {t("product_whatsapp")}
                  </button>
                </div>

                {/* PayPal for International Customers */}
                <div
                  className="payment-option mb-3 p-3 border rounded"
                  style={{ backgroundColor: "#eff6ff" }}
                >
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center">
                      <i
                        className="fab fa-paypal text-primary me-2"
                        style={{ fontSize: "1.5rem" }}
                      ></i>
                      <div>
                        <h6 className="mb-0">{t("product_international")}</h6>
                        <small className="text-muted">
                          Secure international payment
                        </small>
                      </div>
                    </div>
                    <button
                      className="btn btn-sm btn-outline-primary"
                      type="button"
                      onClick={() => setShowPayPal(!showPayPal)}
                    >
                      {showPayPal ? "Hide" : "Show"}
                    </button>
                  </div>

                  {showPayPal && (
                    <div className="mt-3">
                      <PayPalCheckout
                        productTitle={title}
                        productPrice={price}
                        productId={productId || ""}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Add to Cart (Placeholder) */}
              <div className="mt-3">
                <button
                  className="btn btn-outline-dark btn-lg w-100"
                  type="button"
                  onClick={() =>
                    alert(
                      "Fitur keranjang akan segera hadir! / Shopping cart coming soon!",
                    )
                  }
                >
                  <i className="fas fa-shopping-cart me-2"></i>
                  {t("product_add_to_cart")}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-lg-6">
            <h4>{t("product_description")}</h4>
            <p>
              {full_description ||
                "Produk berkualitas tinggi dengan material terbaik."}
            </p>
            {highlights && highlights.length > 0 && (
              <>
                <h6 className="mt-4">{t("product_features")}</h6>
                <ul className="text-sm">
                  {highlights.map((highlight, idx) => (
                    <li key={idx} className="mb-2">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {details && details.length > 0 && (
              <>
                <h6 className="mt-4">{t("product_details")}</h6>
                <p>{details}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
