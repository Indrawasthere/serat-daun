import { useState } from "react";
import ProductRating from "../reviews/reviewRating";
import ProductGallery from "./productGallery";
import ProductSizes from "./productSizes";

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
                  <h3 className="sr-only">Reviews</h3>
                  <div className="d-flex mb-3">
                    <ProductRating rating={rating} />
                    <span className="ms-3">{reviews} ulasan</span>
                  </div>
                </>
              )}

              {sizes && Object.keys(sizes).length > 0 && (
                <div className="mb-4">
                  <ProductSizes sizes={sizes} onSizeChange={setSelectedSize} />
                </div>
              )}

              <div className="d-flex flex-column flex-md-row gap-3">
                <button
                  className="btn btn-dark btn-lg flex-grow-1"
                  type="button"
                  onClick={() => alert("Fitur keranjang akan segera hadir!")}
                >
                  <i className="fas fa-shopping-cart me-2"></i>
                  Tambah ke Keranjang
                </button>
                <button
                  className="btn btn-success btn-lg flex-grow-1"
                  type="button"
                  onClick={handleWhatsAppCheckout}
                  data-testid="whatsapp-checkout-button"
                >
                  <i className="fab fa-whatsapp me-2"></i>
                  Pesan via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-lg-6">
            <h4>Deskripsi Produk</h4>
            <p>
              {full_description ||
                "Produk berkualitas tinggi dengan material terbaik."}
            </p>
            {highlights && highlights.length > 0 && (
              <>
                <h6 className="mt-4">Keunggulan</h6>
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
                <h6 className="mt-4">Informasi Lebih Lanjut</h6>
                <p>{details}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
