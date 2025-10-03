import "./NavBar.css";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  return (
    <>
      <nav>
        <div className="nav-left-section">
          <div className="logo">
            Diaa Aldin <span className="logo-span">Dev</span>
          </div>
        </div>
        <div className="nav-right-section">
          <div className="desktop-right-section">
            <ul className="nav-links">
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
