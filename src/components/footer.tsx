import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <>
      <footer
        className="footer pt-5 mt-5"
        style={{
          background: "linear-gradient(180deg, #f8fdf9 0%, #ecfdf5 100%)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5
                className="font-weight-bold mb-3"
                style={{ color: "#059669" }}
              >
                🌿 Serat Daun
              </h5>
              <p className="text-sm text-muted">{t("footer_description")}</p>
            </div>
            <div className="col-md-2 mb-4">
              <h6 className="font-weight-bold mb-3">{t("footer_menu")}</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="/landing" className="text-sm text-muted footer-link">
                    {t("nav_home")}
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/landing#products"
                    className="text-sm text-muted footer-link"
                  >
                    {t("nav_products")}
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-sm text-muted footer-link">
                    {t("nav_blog")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-4">
              <h6 className="font-weight-bold mb-3">{t("footer_contact")}</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a
                    href="https://wa.me/6282312335006"
                    target="_blank"
                    className="text-sm text-muted footer-link"
                  >
                    <i className="fab fa-whatsapp me-2 text-success"></i>
                    WhatsApp
                  </a>
                </li>
                <li className="mb-2">
                  <span className="text-sm text-muted">
                    <i className="fas fa-phone me-2"></i>082312335006
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-4">
              <h6 className="font-weight-bold mb-3">{t("footer_follow")}</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-sm text-muted footer-link"
                    target="_blank"
                  >
                    <i className="fab fa-instagram me-2"></i>Instagram
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-sm text-muted footer-link"
                    target="_blank"
                  >
                    <i className="fab fa-facebook me-2"></i>Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <div className="copyright text-center text-sm text-muted text-md-start">
                Copyright © {new Date().getFullYear()} Serat Daun.{" "}
                {t("footer_rights")}.
              </div>
            </div>
            <div className="col-md-6">
              <ul className="nav nav-footer justify-content-center justify-content-md-end">
                <li className="nav-item">
                  <a href="#" className="nav-link text-sm text-muted">
                    {t("footer_privacy")}
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-sm text-muted pe-0">
                    {t("footer_terms")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
