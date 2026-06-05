export default function Footer() {
  return (
    <>
      <footer className="footer pt-5 mt-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5 className="font-weight-bold mb-3">Serat Daun</h5>
              <p className="text-sm text-muted">
                Produk berkualitas pilihan terbaik untuk Anda
              </p>
            </div>
            <div className="col-md-2 mb-4">
              <h6 className="font-weight-bold mb-3">Menu</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="/landing" className="text-sm text-muted">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/landing#products" className="text-sm text-muted">
                    Products
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-sm text-muted">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-4">
              <h6 className="font-weight-bold mb-3">Hubungi Kami</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a
                    href="https://wa.me/6282312335006"
                    target="_blank"
                    className="text-sm text-muted"
                  >
                    <i className="fab fa-whatsapp me-2"></i>WhatsApp
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
              <h6 className="font-weight-bold mb-3">Ikuti Kami</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-sm text-muted" target="_blank">
                    <i className="fab fa-instagram me-2"></i>Instagram
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-sm text-muted" target="_blank">
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
                Copyright © {new Date().getFullYear()} Serat Daun. All rights
                reserved.
              </div>
            </div>
            <div className="col-md-6">
              <ul className="nav nav-footer justify-content-center justify-content-md-end">
                <li className="nav-item">
                  <a href="#" className="nav-link text-sm text-muted">
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-sm text-muted pe-0">
                    Terms of Service
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
