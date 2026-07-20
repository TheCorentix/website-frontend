import { Link } from 'react-router-dom';
import logoMark from '../assets/logo-mark.png';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logoMark} alt="" width="30" height="30" />
            <span className="footer-logo-name">Corentix<span className="footer-logo-labs">&nbsp;Labs</span></span>
          </div>
          <p>Core Operational &amp; Revenue Engineering — Navigated by Technology, Intelligence, and eXperience.</p>
        </div>

        <div className="footer-cols">
          <div>
            <h4>Studio</h4>
            <Link to="/#services">Services</Link>
            <Link to="/#projects">Projects</Link>
            <Link to="/#process">Process</Link>
            <Link to="/core-engine">Core Engine</Link>
            <Link to="/#about">About Us</Link>
          </div>
          <div>
            <h4>Connect</h4>
            <a href="mailto:corentixlabs@gmail.com">corentixlabs@gmail.com</a>
            <Link to="/#contact">Start a project</Link>
          </div>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© {year} Corentix Labs. All rights reserved.</span>
        <span>Hyderabad, India · Remote OK</span>
      </div>
    </footer>
  );
}
