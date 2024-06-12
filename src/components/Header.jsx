const Header = () => {
  return (
    <>
      <div className="p-3 m-0 border-0 bd-example m-0 border-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <h2 className="navbar-brand">AsHisH ShiRsaT</h2>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end text-bg-dark"
              tabindex="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  Shopper.
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link">
                      <span className="nav-text">Home</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <span className="nav-text">About</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <span className="nav-text">Services</span>
                    </a>
                  </li>                 
                  <li className="nav-item">
                    <a className="nav-link">
                      <span className="nav-text">Project</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <span className="nav-text">Resume</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <span className="nav-text">Experience</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <span className="nav-text">Contact</span>
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Header;
