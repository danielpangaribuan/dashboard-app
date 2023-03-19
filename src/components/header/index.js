import React from "react";
import moment from "moment/moment";
import { reorder } from "react-icons-kit/fa/reorder";
import { Icon } from "react-icons-kit";

function Header({ isSidebarLeftOpen, handleSidebarLeft, handleSidebarRight }) {
  return (
    <div
      className={`xl:hidden fixed tpp-0 z-50 left-0 right-0 h-20 flex bg-primary-100 justify-between items-center py-4 px-4 ease-in-out duration-300`}
    >
      <div className="flex gap-x-2">
        <button className="px-2" onClick={() => handleSidebarLeft()}>
          <Icon icon={reorder} className="text-white" />
        </button>
        <div className="text-white text-2xl font-bold text-center">
          SalesDash
        </div>
      </div>
      {/* <div className="px-2">
        <button
          className="cursor-pointer border-2 border-white rounded-full overflow-hidden bg-amber-500"
          onClick={() => handleSidebarRight()}
        >
          <img
            src="./assets/img/profile.svg"
            className="w-6 border-2 border-primary-100 rounded-full"
          />
        </button>
      </div> */}
    </div>
  );
}

export default Header;
