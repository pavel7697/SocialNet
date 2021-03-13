import React from "react";
import h from "./Header.module.css";

const Header = () => {
  return (
    <header className={h.header}>
      <img
        alt="logo"
        src="https://c7.hotpng.com/preview/599/694/468/dog-logo-clip-art-dog-thumbnail.jpg"
      />
    </header>
  );
};

export default Header;
