import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import SidebarMobile from "./components/sidebarMoile";
import SidebarRight from "./components/sidebarRight";
import SidebarRightMobile from "./components/sidebarRightMobile";
import Home from "./pages/home";

function App() {
  const [isOpenSidebarLeft, setIsOpenSidebarLeft] = useState(false);
  const [isOpenSidebarRIght, setIsOpenSidebarRight] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <div className="">
          <Sidebar isSidebarLeftOpen={isOpenSidebarLeft} />
          <SidebarMobile
            isOpen={isOpenSidebarLeft}
            closeSidebarLeft={() => setIsOpenSidebarLeft(false)}
          />
          <Header
            isSidebarLeftOpen={isOpenSidebarLeft}
            handleSidebarLeft={() =>
              setIsOpenSidebarLeft(isOpenSidebarLeft ? false : true)
            }
            handleSidebarRight={() => setIsOpenSidebarRight(true)}
          />
          <Routes>
            <Route
              path="/"
              element={<Home isSidebarLeftOpen={isOpenSidebarLeft} />}
            ></Route>
          </Routes>
          <SidebarRight />
          <SidebarRightMobile />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
