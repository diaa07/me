import "./NavBar.css";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
    if (!isMenuOpen) setIsHidden(false);
  };

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (isMenuOpen) {
        setIsHidden(false);
        lastY = currentY;
        return;
      }

      if (currentY > lastY && currentY > 100) {
        setIsHidden(true);
      } else if (currentY < lastY) {
        setIsHidden(false);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <>
      <nav className={isHidden ? "nav-hidden" : ""}>
        <div className="nav-left-section">
          <div className="logo">
            Diaa Aldin <span className="logo-span">Dev</span>
          </div>
        </div>

        <div className="nav-right-section">
          <div className="desktop-right-section">
            <ul className="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="mobile-right-section">
            <div className="lucuide-button" onClick={toggleMenuOpen}>
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </div>

            {isMenuOpen && (
              <div className="nav-menu">
                <ul>
                  <li onClick={toggleMenuOpen}>
                    <a href="#home">Home</a>
                  </li>
                  <li onClick={toggleMenuOpen}>
                    <a href="#about">About</a>
                  </li>
                  <li onClick={toggleMenuOpen}>
                    <a href="#projects">Projects</a>
                  </li>
                  <li onClick={toggleMenuOpen}>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
