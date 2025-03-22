export default function Footer() {
  return (
    <footer className="text-light position-relative bg-dark mt-5">
      <div className="container py-5">
        <div className="row text-center d-flex justify-content-center align-items-center">
        <div
            className="name position-relative m-0 bg-transparent fs-2 text-decoration-none text-uppercase"
            data-text="Awesome"
          >
            <span className="actual-name">&nbsp;KARTHIGAN&nbsp;</span>
            <span
              aria-hidden="true"
              className="front-name position-absolute top-0 start-0 overflow-hidden"
            >
              &nbsp;KARTHIGAN&nbsp;
            </span>
          </div>
          <ul className="list-unstyled d-flex flex-column flex-lg-row gap-3 justify-content-center align-items-center mt-3">
            <li>
              <a
                href="#home"
                className="text-decoration-none text-white text-bold text-bold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-decoration-none text-white text-bold text-bold"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#eductaion"
                className="text-decoration-none text-white text-bold text-bold"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#achievements"
                className="text-decoration-none text-white text-bold text-bold"
              >
              Achievements
              </a>
            </li>
            {/* <li>
              <a
                href="#projects"
                className="text-decoration-none text-white text-bold text-bold"
              >
                Projects
              </a>
            </li> */}
          </ul>
          <ul className="list-unstyled d-flex flex-wrap gap-3 justify-content-center align-items-center py-2">
            <li>
              <a
                href="https://www.linkedin.com/in/bakeerathan-karthigan-529a56256/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none social-icon"
              >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </li>
            <li>
              <a
                href="tel:0424955982"
                className="text-decoration-none social-icon"
              >
                <i className="bi bi-telephone-fill fs-4"></i>
              </a>
            </li>
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bakeekarthigan@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none social-icon"
              >
                <i className="bi bi-envelope-fill fs-4"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-4" style={{ background: "#1e1e1e" }}>
        <div className="container text-center">
          <p className="m-0 small">
            &copy; <span className="brand fw-bold">KARTHIGAN</span>{" "}
            {new Date().getFullYear()} . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
