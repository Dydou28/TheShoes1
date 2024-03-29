import "./Accueil.css";

// import React, { useState } from "react";
import { Link } from "react-router-dom";

import { VscLayers } from "react-icons/vsc";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import background from "@assets/fond-ecran.png";

const Accueil = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };"react-icons/ai"

  return (
    <main className="cover">
      <section id="home" style={{ backgroundImage: `url(${background})` }}>
        <section className="header">
          <section id="pcnavbar">
            <ul className="navbar_links1">
              <img
                src="./src/assets/logo-jordan.png"
                alt="logo"
                className="logo"
              />
              <li>
                <Link to="/" className="navbar_link1">
                  Man
                </Link>
              </li>
              <li>
                <Link to="/woman" className="navbar_link1">
                  Woman
                </Link>
              </li>
              <li>
                <Link to="/kids" className="navbar_link1">
                  Kids
                </Link>
              </li>
              <li>
                <Link to="/customise" className="navbar_link1">
                  Customise
                </Link>
              </li>
              <li>
                <Link to="/sales" className="navbar_link1">
                  Sales
                </Link>
              </li>
              <li>
                <Link to="/snkrs" className="navbar_link1">
                  SNKRS
                </Link>
              </li>
              <VscLayers className="logo1" />
            </ul>
            <section className="shoes">
              <div className="flexbox">
                <img
                  src="./src/assets/nike.png"
                  alt="nike"
                  className="img-shoes"
                />
              </div>
              <div className="ul-footer">
                <p>Twitter</p>
                <p>Facebook</p>
                <p>Instagram</p>
              </div>
            </section>

            <section className="shoes-cases">
              <AiOutlineLeft className="fleche" />
              <div className="case">
                <img
                  src="./src/assets/nike-red.png"
                  alt="red"
                  className="red
                  "
                />
                <span className="vertical-line" />

                <div className="case-bis">
                  <h5 className="title-red"> NIKE AIR 031-Off Red </h5>
                  <h4 className="price-red">$110.00</h4>
                </div>
              </div>
              <div className="case">
                <img
                  src="./src/assets/nike-white.png"
                  alt="white"
                  className="white"
                />
                <span className="vertical-line" />
                <div className="case-bis">
                  <h5 className="title-white">NIKE AIR 032-Off White </h5>
                  <h4 className="price-white">$110.00</h4>
                </div>
              </div>
              <AiOutlineRight className="fleche" />
            </section>
          </section>
        </section>
      </section>

      {/* <section id="telnavbar">
        <div className="header-color">
          <div className="burger-menu">
            <div className="burger-icon">
              <VscLayers className="logo1" />
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div className="menu-content">
              <ul className="navbar_links slideInDown">
                <li>
                  <Link to="/" className="navbar_link">
                    Man
                  </Link>
                </li>
                <li>
                  <Link to="/woman" className="navbar_link">
                    Woman
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/kids" className="navbar_link">
                    Kids{" "}
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/customise" className="navbar_link">
                    Customise{" "}
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/sales" className="navbar_link">
                    Sales{" "}
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/snkrs" className="navbar_link">
                    SNKRS{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="shoes">
          <div className="flexbox">
            <img src="./src/assets/nike.png" alt="nike" className="img-shoes" />
          </div>
          <div className="ul-footer">
            <p>Twitter</p>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </section>
      </section> */}
    </main>
  );
};

export default Accueil;
