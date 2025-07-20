import React from "react";
import Header from "../Components/Header/Header"; 
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
