import React from "react";
import { useSelector } from "react-redux";

import Wrapper from "../assets/wrappers/BigSidebar";
import { Logo } from "../components";
import Navlink from "../components/NavLink";

function BigSidebar() {
  const { isSidebarOpen } = useSelector((store) => store.user);

  return (
    <Wrapper>
      <div
        className={`${
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }`}
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <Navlink />
        </div>
      </div>
    </Wrapper>
  );
}

export default BigSidebar;
