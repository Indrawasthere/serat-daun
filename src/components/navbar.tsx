const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg blur border-radius-sm top-0 z-index-3 shadow position-sticky py-3 start-0 end-0">
      <div className="container px-1">
        <a className="navbar-brand font-weight-bolder ms-lg-0" href="/landing">
          <span
            className="text-gradient"
            style={{
              background: "linear-gradient(to right, #059669, #10b981)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Serat Daun
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
                className="nav-link text-dark font-weight-bold d-flex align-items-center me-2"
                aria-current="page"
                href="/landing"
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-dark font-weight-bold d-flex align-items-center me-2"
                aria-current="page"
                href="/landing#products"
              >
                Produk
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-dark font-weight-bold d-flex align-items-center me-2"
                aria-current="page"
                href="#"
              >
                Blog
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-success font-weight-bold d-flex align-items-center me-2"
                aria-current="page"
                href="https://wa.me/6282312335006"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp me-2"></i>
                Hubungi Kami
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
