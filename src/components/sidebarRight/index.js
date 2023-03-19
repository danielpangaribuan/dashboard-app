import React from "react";
function SidebarRight() {
  return (
    <div className="fixed xl:block hidden top-0 right-0 z-40 w-72 h-screen bg-[#F3F4FF] px-4 py-8">
      <div className="flex justify-center items-center flex-col gap-y-8">
        <div className="flex gap-x-2 items-center">
          <div className="border-2 border-primary-60 rounded-full overflow-hidden bg-amber-500 h-fit">
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
          <button className="ml-2">
            <img src="./assets/icons/chevron-down-icon.svg" className="w-3" />
          </button>
        </div>
        <div className="flex w-full flex-col gap-y-6 justify-between items-center shadow shadow-xl shadow-primary-60/20 bg-white px-4 pt-2 pb-6 rounded-xl">
          <div className="flex w-full justify-center text-center relative items-center">
            <div className="text-neutral-500 font-semibold">Total Balance</div>
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
  );
}

export default SidebarRight;
