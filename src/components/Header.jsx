import { LOGO_URL } from "../utils/constant";

const Header = () => {
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
