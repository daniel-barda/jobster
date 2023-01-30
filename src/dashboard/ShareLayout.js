import React from "react";
import { Outlet } from "react-router-dom";
import { BigSidebar, SmallSidebar, Navbar } from "../components";
import Wrapper from "../assets/wrappers/SharedLayout";

export const ShareLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <BigSidebar />
        <SmallSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
