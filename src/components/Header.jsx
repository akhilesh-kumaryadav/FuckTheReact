import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [reactBtn, setReactBtn] = useState("Login");
  console.log("header component renders");

  useEffect(() => {
    console.log("useEffect hit");
  }, [reactBtn]);

  return (
    <div id="header" className="header">
      <div id="logo-container" className="logo-container">
        <img id="logo" className="logo" src={LOGO_URL} />
      </div>
      <div id="nav-item-container" className="nav-item-container">
        <div id="nav-items" className="nav-items">
          <ul>
            <li>Home</li>
            <li>Cart</li>
            <li>Contact</li>
            <li>About Us!</li>
            <li>
              <button
                onClick={() => {
                  reactBtn === "Login"
                    ? setReactBtn("Logout")
                    : setReactBtn("Login");
                }}
              >
                {reactBtn}
              </button>
            </li>
          </ul>
        </div>
        <div id="profile" className="profile">
          <a>
            <img
              id="profile-img"
              className="profile-img"
              src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
