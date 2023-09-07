import React from "react";
import Footer from "./components/Footer";
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <nav>
        <div className="NameOfWeb">
          <img className="Logo" src="/logo.jpg" alt="Logo" />
          <h1>WenYT2023-新聞網</h1>
        </div>
        <div className="LinkOfWeb">
          <ul>
            <li>
              <Link to="/">首頁</Link>
            </li>
            <li>
              <Link to="/about">關於網站</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
