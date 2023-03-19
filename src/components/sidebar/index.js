import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ isSidebarLeftOpen }) {
  const location = useLocation();
  const [urlActive, setUrlActive] = useState();
  const menu = [
    {
      key: "dashboard",
      name: "Dashboard",
      children: null,
      icon: "dashboard-icon",
    },
    {
      key: "balance",
      name: "Balance",
      children: null,
      icon: "balance-icon",
    },
    {
      key: "transaction",
      name: "Transaction",
      children: null,
      icon: "transaction-icon",
    },
    {
      key: "product",
      name: "Product",
      children: null,
      icon: "product-icon",
    },
    {
      key: "channel",
      name: "Channel",
      icon: "channel-icon",
      children: [
        { key: "agent", name: "Agent" },
        { key: "balance", name: "Balance" },
        { key: "transaction", name: "Transaction" },
      ],
    },
  ];
  useEffect(() => {
    setUrlActive(
      !location.pathname.split("/")[1].length
        ? "dashboard"
        : location.pathname.split("/")[1]
    );
  }, [location.pathname]);
  return (
    <div
      className={`fixed xl:block hidden top-0 left-0 z-40 w-60 h-screen bg-[#FCFCFF] ease-in-out duration-300 `}
    >
      <div className="w-full">
        <div className="text-primary-100 text-2xl font-bold text-center py-8 mb-4">
          SalesDash
        </div>
        <div className="flex flex-col gap-y-6">
          {menu.map((v, i) => (
            <Link
              to={`/${v.key === "dashboard" ? "" : v.key}`}
              key={v.key}
              className="pl-8"
            >
              <div
                className={`flex font-medium cursor-pointer ${
                  urlActive === v.key
                    ? "text-primary-100 relative before:absolute before:top-0 before:right-0 before:w-1 before:rounded-l-2xl before:h-full before:bg-primary-100"
                    : "text-[#9A9A9B] relative hover:ease-in hover:duration-300 before:ease-in before:duration-300 hover:before:absolute hover:before:top-0 hover:before:right-0 hover:before:w-1 hover:before:rounded-l-2xl hover:before:h-full hover:before:bg-primary-100/40"
                }`}
              >
                <img
                  src={
                    urlActive === v.key
                      ? `./assets/icons/${v.icon}-active.svg`
                      : `./assets/icons/${v.icon}.svg`
                  }
                  className="w-4 mr-3"
                />
                {v.name}
              </div>
              {v.children && (
                <div className="flex flex-col gap-y-4 mt-5">
                  {v.children.map((val, idx) => (
                    <Link
                      to={`/${v.key}/${val.key}`}
                      key={v.key + "-" + val.key}
                      className={`pr-4 pl-7 font-medium ${
                        location.pathname.split("/")[2] === val.key
                          ? "text-primary-100"
                          : "text-[#9A9A9B] hover:text-primary-100/60"
                      }`}
                    >
                      {val.name}
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
        <div className="bg-slate-300 mx-auto w-[80%] my-6 h-0.5"></div>
        <div className="px-8">
          <div className="flex cursor-pointer font-medium text-[#9A9A9B] relative hover:ease-in hover:duration-300 before:ease-in before:duration-300 hover:before:absolute hover:before:top-0 hover:before:right-0 hover:before:w-1 hover:before:rounded-l-2xl hover:before:h-full hover:before:bg-primary-100/40">
            <img src="./assets/icons/logout-icon.svg" className="w-4 mr-3" />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
