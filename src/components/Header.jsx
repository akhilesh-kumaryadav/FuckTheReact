import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [reactBtn, setReactBtn] = useState("Login");

  const user = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("useEffect hit");
  }, [reactBtn]);

  return (
    <div className="m-2 flex justify-between bg-red-200 shadow-lg rounded-2xl">
      <div>
        <img className="w-25 p-4" src={LOGO_URL} />
      </div>
      <div className="flex">
        <ul className="flex items-center px-4 mx-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/Cart">Cart</Link>
          </li>
          <li className="px-4">
            <Link to="/contact-us">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/about-us">About Us!</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
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
          <li className="px-4">
            <a>
              <img
                id="profile-img"
                className="w-30"
                src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo.png"
              />
            </a>
          </li>
          <li>{user.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
