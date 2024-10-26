import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div id="header" className="header">
      <div id="logo-container" className="logo-container">
        <img
          id="logo"
          className="logo"
          src="https://st3.depositphotos.com/31136478/37711/v/450/depositphotos_377113776-stock-illustration-delivery-fast-food-logo-vector.jpg"
        />
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

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        alt="restautrant-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dd519572ed1bed19de47e94186e743ea"
      />
      <h3>Akhilesh Foods</h3>
      <h5>Russians</h5>
      <h5>4.9 Stars</h5>
      <h5>30 min</h5>
      <h5>Order value of 2 person - 599/- </h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="ads">Restaurant ads and site offers</div>
      <div className="search-bar">Search Bar</div>
      <div className="restaurant-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const Footer = () => {
  return <p>Footer</p>;
};

const App = () => {
  return (
    <div id="app" className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<App />);
