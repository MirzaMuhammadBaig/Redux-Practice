import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Bussiness from "./Blogs/Bussiness";
import Computer from "./Blogs/Computer";
import Entertainment from "./Blogs/Entertainment";
import Fashion from "./Blogs/Fashion";
import Food from "./Blogs/Food";
import Health from "./Blogs/Health";
import Islam from "./Blogs/Islam";
import Photography from "./Blogs/Photography";
import Politics from "./Blogs/Politics";
import Sport from "./Blogs/Sport";
import Tourism from "./Blogs/Tourism";
import OthersBlogs from "./Blogs/OthersBlog";

function Blogs() {
  return (
    <div>
      <div>
        <Link to="//Blogs/Islam" className="navbar-brand">
          Islam
        </Link>
        <Link to="//Blogs/Politics" className="navbar-brand">
          Politics
        </Link>
        <Link to="//Blogs/Bussiness" className="navbar-brand">
          Bussiness
        </Link>
        <Link to="//Blogs/Health" className="navbar-brand">
          Health
        </Link>
        <Link to="//Blogs/Sport" className="navbar-brand">
          Sport
        </Link>
        <Link to="//Blogs/Computer" className="navbar-brand">
          Computer
        </Link>
        <Link to="//Blogs/Entertainment" className="navbar-brand">
          Entertainment
        </Link>
        <Link to="//Blogs/Tourism" className="navbar-brand">
          Tourism
        </Link>
        <Link to="//Blogs/Fashion" className="navbar-brand">
          Fashion
        </Link>
        <Link to="//Blogs/Photography" className="navbar-brand">
          Photography
        </Link>
        <Link to="//Blogs/Food" className="navbar-brand">
          Food
        </Link>
        <Link to="//Blogs/others" className="navbar-brand">
          Others
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Bussiness />} />
        <Route path="/About" element={<Computer />} />
        <Route path="/Contact" element={<Entertainment />} />
        <Route path="/Blogs" element={<Fashion />} />
        <Route path="/Services" element={<Food />} />
        <Route path="/Services" element={<Food />} />
        <Route path="/Services" element={<Food />} />
        <Route path="/Services" element={<Food />} />
        <Route path="/Services" element={<Food />} />
      </Routes>
    </div>
  );
}

export default Blogs;
