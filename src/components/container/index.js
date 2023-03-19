import React from "react";
import Header from "../header";
import Sidebar from "../sidebar";
import SidebarRight from "../sidebarRight";

function Container() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full sm:mx-64 px-8 py-4">
        <Header />
      </div>
      <SidebarRight />
    </div>
  );
}

export default Container;
