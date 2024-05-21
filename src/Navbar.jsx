import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <header id="nav-menu" aria-label="navigation bar">
      <div className="container">
        <div className="nav-start">
          <button
            className={`menu-btn ${menuOpen ? "open" : ""}`}
            aria-label="hamburger"
            aria-haspopup="true"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <div className="menu-btn_burger" aria-hidden="true"></div>
          </button>
          <nav className={`menu ${menuOpen ? "show" : ""}`}>
            <ul className="menu-bar">
              <li>
                <button
                  className="nav-link dropdown-btn"
                  data-dropdown="dropdown1"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen === 1}
                  aria-label="browse"
                  onClick={() => toggleDropdown(1)}
                >
                  Browse
                  <i className="bx bx-chevron-down" aria-hidden="true"></i>
                </button>
                <DropdownMenu
                  id="dropdown1"
                  active={dropdownOpen === 1}
                  items={[
                    {
                      title: "Best of the day",
                      description: "Shorts featured today by curators",
                      icon: "https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/botd.svg",
                      link: "#best-of-the-day",
                    },
                    {
                      title: "Featured Streams",
                      description: "Leading creatives livestreams",
                      icon: "https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/fs.svg",
                      link: "#featured-streams",
                    },
                    {
                      title: "Subscriptions",
                      description: "Gain exclusive access",
                      icon: "https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/sp.svg",
                      link: "#subscriptions",
                    },
                    {
                      title: "Creative Feed",
                      description: "See trending creations",
                      icon: "https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/cf.svg",
                      link: "#creative-feed",
                    },
                  ]}
                  apps={[
                    { title: "Adobe XD", icon: "https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/xd.svg", link: "#adobe-xd" },
                    { title: "After Effect", icon: "https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/ae.svg", link: "#after-effect" },
                    { title: "Sketch", icon: "https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/sketch.svg", link: "#sketch" },
                    { title: "Indesign", icon: "https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/indesign.svg", link: "#indesign" },
                    { title: "Figma", icon: "https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/figma.svg", link: "#figma" },
                  ]}
                />
              </li>
              <li>
                <button
                  className="nav-link dropdown-btn"
                  data-dropdown="dropdown2"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen === 2}
                  aria-label="discover"
                  onClick={() => toggleDropdown(2)}
                >
                  Discover
                  <i className="bx bx-chevron-down" aria-hidden="true"></i>
                </button>
                <DropdownMenu
                  id="dropdown2"
                  active={dropdownOpen === 2}
                  items={[
                    {
                      title: "Branding",
                      link: "#branding",
                    },
                    {
                      title: "Illustration",
                      link: "#illustrations",
                    },
                  ]}
                  apps={[
                    {
                      title: "MacOS & Windows", link: "#mac-windows" 
                    },
                    { 
                      title: "Linux",
                      link: "#linux" 
                    },
                  ]}
                />
              </li>
              <li><a className="nav-link" href="/">Jobs</a></li>
              <li><a className="nav-link" href="/">Livestream</a></li>
              <li><a className="nav-link" href="/">About</a></li>
            </ul>
          </nav>
        </div>
        <div className="nav-end">
          <div className="right-container">
            <form className="search" role="search">
              <input type="search" name="search" placeholder="Search" />
              <i className="bx bx-search" aria-hidden="true"></i>
            </form>
            <a href="#profile">
              <img
                src="https://github.com/Evavic44/responsive-navbar-with-dropdown/blob/main/assets/images/user.jpg?raw=true"
                width="30"
                height="30"
                alt="user image"
              />
            </a>
            <button className="btn btn-primary">Create</button>
          </div>
          <a className="logo" href="/">
            <img
              src="https://github.com/Evavic44/responsive-navbar-with-dropdown/blob/main/assets/images/logo.png?raw=true"
              width="35"
              height="35"
              alt="Inc Logo"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
