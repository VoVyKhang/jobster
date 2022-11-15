import React from "react";
import { NavLink } from "react-router-dom";

import links from "../utils/links";

function Navlink({ toggleSidebar }) {
  return (
    <div className="nav-links">
      {links.map((link) => (
        <NavLink
          to={link.path}
          key={link.id}
          onClick={toggleSidebar}
          className={({ isActive }) => {
            return isActive ? "nav-link active" : "nav-link";
          }}
        >
          <span className="icon">{link.icon}</span>
          {link.text}
        </NavLink>
      ))}
    </div>
  );
}

export default Navlink;
