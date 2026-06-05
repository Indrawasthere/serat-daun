import React, { createContext, useContext, useState, useEffect } from "react";

import type { ReactNode } from "react";

// Translation interface
interface Translations {
  [key: string]: {
    id: string;
    en: string;
  };
}

// All translations
export const translations: Translations = {
  // Navbar
  nav_home: { id: "Home", en: "Home" },
  nav_products: { id: "Produk", en: "Products" },
  nav_blog: { id: "Blog", en: "Blog" },
  nav_contact: { id: "Hubungi Kami", en: "Contact Us" },

  // Hero Section
  hero_welcome: {
    id: "Selamat Datang di Serat Daun",
    en: "Welcome to Serat Daun",
  },
  hero_subtitle: {
    id: "Koleksi produk berkualitas pilihan terbaik untuk Anda",
    en: "Premium quality plant collection for your green sanctuary",
  },
  hero_cta: { id: "Lihat Produk", en: "Browse Plants" },

  // Products Section
  products_featured: { id: "Produk Unggulan", en: "Featured Plants" },
  products_featured_desc: {
    id: "Temukan produk terbaik kami dengan kualitas premium",
    en: "Discover our finest selection of premium quality plants",
  },
  products_categories: { id: "Jelajahi Kategori", en: "Explore Categories" },
  products_categories_desc: {
    id: "Temukan berbagai pilihan produk berdasarkan kategori",
    en: "Find various products based on categories",
  },

  // Testimonials
  testimonials_title: {
    id: "Apa Kata Pelanggan Kami",
    en: "What Our Customers Say",
  },

  // Footer
  footer_description: {
    id: "Produk berkualitas pilihan terbaik untuk Anda",
    en: "Premium quality products selected just for you",
  },
  footer_menu: { id: "Menu", en: "Menu" },
  footer_contact: { id: "Hubungi Kami", en: "Contact Us" },
  footer_follow: { id: "Ikuti Kami", en: "Follow Us" },
  footer_rights: { id: "All rights reserved", en: "All rights reserved" },
  footer_privacy: { id: "Privacy Policy", en: "Privacy Policy" },
  footer_terms: { id: "Terms of Service", en: "Terms of Service" },

  // Product Page
  product_whatsapp: { id: "Pesan via WhatsApp", en: "Order via WhatsApp" },
  product_paypal: { id: "Bayar via PayPal", en: "Pay with PayPal" },
  product_international: {
    id: "Untuk Pembeli Internasional",
    en: "For International Buyers",
  },
  product_local: { id: "Untuk Pembeli Indonesia", en: "For Indonesian Buyers" },
  product_description: { id: "Deskripsi", en: "Description" },
  product_details: { id: "Detail", en: "Details" },
  product_shipping: { id: "Pengiriman", en: "Shipping" },
  product_warranty: { id: "Garansi", en: "Warranty" },
  product_features: { id: "Fitur Produk", en: "Product Features" },
  product_size: { id: "Ukuran", en: "Size" },
  product_stock: { id: "Stok Tersedia", en: "In Stock" },
  product_out_of_stock: { id: "Stok Habis", en: "Out of Stock" },
  product_reviews: { id: "Ulasan", en: "Reviews" },
  product_add_to_cart: { id: "Tambah ke Keranjang", en: "Add to Cart" },

  // Common
  price: { id: "Harga", en: "Price" },
  quantity: { id: "Jumlah", en: "Quantity" },
  total: { id: "Total", en: "Total" },
  checkout: { id: "Checkout", en: "Checkout" },
  buy_now: { id: "Beli Sekarang", en: "Buy Now" },
};

// Language context type
interface LanguageContextType {
  language: "id" | "en";
  setLanguage: (lang: "id" | "en") => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<"id" | "en">("id");

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("serat-daun-language");
    if (savedLang === "en" || savedLang === "id") {
      setLanguageState(savedLang);
    } else {
      // Default to Indonesian
      setLanguageState("id");
    }
  }, []);

  // Save language preference when it changes
  const setLanguage = (lang: "id" | "en") => {
    setLanguageState(lang);
    localStorage.setItem("serat-daun-language", lang);
  };

  // Translation function
  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation key \"${key}\" not found`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
