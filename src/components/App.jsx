import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div id="app" className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
