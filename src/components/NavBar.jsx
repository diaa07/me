import "./NavBar.css";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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
          <div className="mobile-right-section">
            <div className="lucuide-button" onClick={toggleMenuOpen}>
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </div>
            {isMenuOpen ? (
              <div className="nav-menu">
                <ul>
                  <li onClick={toggleMenuOpen}>Home</li>
                  <li onClick={toggleMenuOpen}>About</li>
                  <li onClick={toggleMenuOpen}>Projects</li>
                  <li onClick={toggleMenuOpen}>Contact</li>
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
