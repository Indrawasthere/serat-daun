import { useLanguage } from "../contexts/LanguageContext";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "id" ? "en" : "id");
  };

  return (
    <nav className="navbar navbar-expand-lg blur border-radius-sm top-0 z-index-3 shadow position-sticky py-3 start-0 end-0 navbar-animate">
      <div className="container px-1">
        <a className="navbar-brand font-weight-bolder ms-lg-0" href="/landing">
          <span
            className="text-gradient brand-text"
            style={{
              background:
                "linear-gradient(135deg, #059669 0%, #34d399 50%, #10b981 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "1.5rem",
              fontWeight: "700",
            }}
          >
            🌿 Serat Daun
          </span>
        </a>

        <button
          className="navbar-toggler shadow-none ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon mt-2">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 nav-link-hover"
                aria-current="page"
                href="/landing"
              >
                {t("nav_home")}
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 nav-link-hover"
                aria-current="page"
                href="/landing#products"
              >
                {t("nav_products")}
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 nav-link-hover"
                aria-current="page"
                href="#"
              >
                {t("nav_blog")}
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-success font-weight-bold d-flex align-items-center me-2 whatsapp-link"
                aria-current="page"
                href="https://wa.me/6282312335006"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp me-2"></i>
                {t("nav_contact")}
              </a>
            </li>

            <li className="nav-item">
              <button
                onClick={toggleLanguage}
                className="btn btn-sm btn-outline-success ms-2 language-toggle"
                style={{
                  borderRadius: "20px",
                  padding: "6px 16px",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  border: "2px solid #059669",
                  transition: "all 0.3s ease",
                }}
                aria-label="Toggle Language"
              >
                <i className="fas fa-globe me-1"></i>
                {language === "id" ? "ENG" : "IDN"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
