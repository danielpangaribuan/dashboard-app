import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { close } from "react-icons-kit/fa/close";
import { reorder } from "react-icons-kit/fa/reorder";
import { Icon } from "react-icons-kit";

function SidebarMobile({ isOpen, closeSidebarLeft }) {
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
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  useEffect(() => {
    setUrlActive(
      !location.pathname.split("/")[1].length
        ? "dashboard"
        : location.pathname.split("/")[1]
    );
    closeSidebarLeft();
  }, [location.pathname]);
  return (
    <div
      className={`bg-[#FCFCFF] fixed top-0 pt-20 pb-8 left-0 z-40 w-full md:w-1/2 md:drop-shadow-xl h-screen xl:hidden ease-in-out duration-300 overflow-auto ${
        isOpen ? "block" : "block -translate-x-full md:-translate-x-full"
      }`}
    >
      <div className="px-8 py-8 bg-gradient-to-b from-primary-100/10 via-[#FCFCFC] to-primary-100/5">
        <div className={`flex flex-col ${isOpenProfile ? "gap-y-8" : ""}`}>
          <div className="flex gap-x-2 items-center justify-between">
            <div className="flex gap-x-2 items-center">
              <div className="border-2 border-primary-60 rounded-full overflow-hidden bg-amber-500 w-fit h-fit">
                <img
                  src="./assets/img/profile.svg"
                  className="w-10 border-2 border-white rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-xl">Budi Budiman</div>
                <div className="font-medium text-sm text-neutral-500 -mt-1">
                  Owner at PT Suka Maju
                </div>
              </div>
            </div>
            <button
              className="cursor-pointer"
              onClick={() => setIsOpenProfile(isOpenProfile ? false : true)}
            >
              <img
                src="./assets/icons/chevron-down-icon.svg"
                className={`w-3 ease-in-out duration-300 ${
                  isOpenProfile ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          <div
            className={`${
              !isOpenProfile
                ? "h-0 py-0 overflow-hidden opacity-0"
                : "h-44 pt-2 pb-6"
            } flex w-full flex-col gap-y-6 justify-between items-center shadow shadow-xl shadow-primary-60/20 bg-white px-4 rounded-xl ease-linear duration-300 opacity-1`}
          >
            <div className="flex w-full justify-center text-center relative items-center">
              <div className="text-neutral-500 font-semibold">
                Total Balance
              </div>
              <div className="absolute right-0">
                <button>
                  <img src="./assets/icons/more-icon.svg" className="h-3" />
                </button>
              </div>
            </div>
            <div className="text-2xl text-center font-semibold">
              Rp. 1.580.000.000
            </div>
            <button className="bg-primary-100 w-full text-white rounded-lg py-2">
              Top Up
            </button>
          </div>
        </div>
      </div>
      {/* <div className="bg-slate-300 mx-auto w-[90%] my-6 h-0.5"></div> */}
      {/* <div className="flex items-center px-4 h-20 gap-x-2">
        <button className="px-2" onClick={() => closeSidebarLeft()}>
          <Icon icon={reorder} className="text-primary-100" />
        </button>
        <div className="text-primary-100 text-2xl font-bold">SalesDash</div>
      </div> */}
      <div className="flex flex-col gap-y-6 mt-6">
        {menu.map((v, i) => (
          <Link
            to={`/${v.key === "dashboard" ? "" : v.key}`}
            key={v.key}
            className="pl-12"
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
      <div className="bg-slate-300 mx-auto w-[90%] my-6 h-0.5"></div>
      <div className="px-12">
        <div className="flex cursor-pointer font-medium text-[#9A9A9B] relative hover:ease-in hover:duration-300 before:ease-in before:duration-300 hover:before:absolute hover:before:top-0 hover:before:right-0 hover:before:w-1 hover:before:rounded-l-2xl hover:before:h-full hover:before:bg-primary-100/40">
          <img src="./assets/icons/logout-icon.svg" className="w-4 mr-3" />
          Logout
        </div>
      </div>
    </div>
  );
}

export default SidebarMobile;
