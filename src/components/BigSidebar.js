import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useSelector } from "react-redux";
import { Logo } from "./Logo";
import { Navlinks } from "./Navlinks";
export const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <Navlinks />
        </div>
      </div>
    </Wrapper>
  );
};
