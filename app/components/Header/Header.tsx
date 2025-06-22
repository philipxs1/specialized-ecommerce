import React from "react";
import SuperHeader from "../SuperHeader/SuperHeader";
import Nav from "../Nav/Nav";
import GloablNav from "../GlobalNav/GloablNav";

const Header = () => {
  return (
    <header>
      <SuperHeader />
      <div className="px-6 py-6">
        <Nav />
        <GloablNav />
      </div>
    </header>
  );
};

export default Header;
