import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuOptions = [
    { route: "/", name: "Home" },
    { route: "/orders", name: "Orders" },
    { route: "/holdings", name: "Holdings" },
    { route: "/positions", name: "Positions" },
    { route: "/funds", name: "Funds" },
    { route: "/apps", name: "Apps" }
  ];

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          {
            menuOptions.map((menu, index) => {
              return (
                <li key={index}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={menu.route}
                    onClick={() => handleMenuClick(index)}
                  >
                    <p className={selectedMenu === index ? "menu" : "menu selected"}>
                      {menu.name}
                    </p>
                  </Link>
                </li>
              )
            })
          }
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
        {/* {isProfileDropdownOpen &&} */}
      </div>
    </div>
  );
};

export default Menu;
