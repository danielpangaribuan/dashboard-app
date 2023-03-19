import React from "react";
import Chart from "../../components/chart";
import moment from "moment/moment";

function Home({ isSidebarLeftOpen }) {
  const topProducts = [
    {
      name: "Maxim",
      count: "150.000",
      transaction: 120,
      image: "./assets/img/taximaxim-logo.png",
    },
    {
      name: "Telkomsel",
      count: "25.000",
      transaction: 98,
      image: "./assets/img/telkomsel-logo.png",
    },
    {
      name: "Three",
      count: "50.000",
      transaction: 74,
      image: "./assets/img/three-logo.png",
    },

    {
      name: "OVO",
      count: "100.000",
      transaction: 68,
      image: "./assets/img/ovo-logo.png",
    },
    {
      name: "PLN Postpaid",
      count: null,
      transaction: 50,
      image: "./assets/img/pln-logo.png",
    },
  ];
  const topAgents = [
    {
      name: "PT Suka Maju Jakarta",
      profit: "Rp. 3.700.000",
      sales: "Rp. 7.230.000",
      transaction: 43,
      image: "unsplash_F2eHfMwIOxA.png",
    },
    {
      name: "Susi Susanti",
      profit: "Rp 3.550.000",
      sales: "Rp 5.230.000",
      transaction: 37,
      image: "unsplash_mEZ3PoFGs_k.png",
    },
    {
      name: "Toko Pulsa III Depok",
      profit: "Rp 2.860.000",
      sales: "Rp 4.500.000",
      transaction: 38,
      image: "unsplash_n1B6ftPB5Eg.png",
    },
    {
      name: "PT Suka Maju Bogor",
      profit: "Rp 2.400.000",
      sales: "Rp 4.800.000",
      transaction: 40,
      image: "unsplash_iH5qFLZS390.png",
    },
    {
      name: "Anton Antoman",
      profit: "Rp 2.350.000",
      sales: "Rp 2.100.000",
      transaction: 20,
      image: "unsplash_5n3JP9WAJTs.png",
    },
  ];
  return (
    <div className="flex xl:pt-0 pt-20">
      <div
        className={`w-full px-4 sm:py-4 py-2 xl:ml-60 xl:mr-72 ease-in-out duration-300 ${
          isSidebarLeftOpen ? "md:blur-sm fixed" : ""
        }`}
      >
        <div className="flex justify-between">
          <div>
            <div className="text-3xl font-semibold">Dashboard</div>
            <div className="font-medium text-neutral-500">
              Today's date: {moment().format("ddd, DD MMM YYYY")}
            </div>
          </div>
          {/* <div>
                  <button className="cursor-pointer border-2 border-primary-100 rounded-full overflow-hidden bg-amber-500">
                    <img
                      src="./assets/img/profile.svg"
                      className="w-12 border-2 border-white rounded-full"
                    />
                  </button>
                </div> */}
        </div>

        <div className="grid md:grid-cols-3 md:grid-rows-none grid-cols-none grid-rows-3 mt-8 gap-y-4 gap-x-4 mb-4">
          <div className="flex flex-col justify-between gap-y-3 drop-shadow-card bg-white rounded-lg px-4 py-3">
            <div>
              <span className="text-neutral-500 font-medium">Profit</span>
              <div className="text-2xl font-semibold">Rp 11.500.000</div>
            </div>
            <div className="text-right text-sm text-red-600 font-medium">
              0.3% compared to 7 days ago
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-3 drop-shadow-card bg-white rounded-lg px-4 py-3">
            <div>
              <span className="text-neutral-500 font-medium">Sales</span>
              <div className="text-2xl font-semibold">Rp 11.500.000</div>
            </div>
            <div className="text-right text-sm text-emerald-400 font-medium">
              0.5% compared to 7 days ago
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-3 drop-shadow-card bg-white rounded-lg px-4 py-3">
            <div>
              <span className="text-neutral-500 font-medium">Transaction</span>
              <div className="font-semibold">
                <span className="text-2xl">1090</span>{" "}
                <span className="">transactions</span>
              </div>
            </div>
            <div className="text-right text-sm text-yellow-400 font-medium">
              same as 7 days ago
            </div>
          </div>
        </div>

        <div className="grid xl:grid-cols-3 xl:gap-x-4 lg:grid-cols-1 grid-cols-1 gap-y-4">
          <div className="xl:col-span-2 col-span-none md:flex md:flex-col gap-y-4">
            <div className="flex flex-col basis-full justify-between gap-y-3 drop-shadow-card bg-white rounded-lg px-4 py-3">
              <div className="text-neutral-500 font-medium">Sales Chart</div>
              <div className="h-full">
                <Chart />
              </div>
            </div>
            <div className="flex flex-col justify-between gap-y-5 drop-shadow-card bg-white rounded-lg px-4 py-3 md:mt-0 mt-4">
              <div className="md:text-base text-lg font-medium text-neutral-500">
                Top 5 Products
              </div>
              <div className="overflow-hidden touch-pan-x">
                <div className="lg:grid lg:grid-cols-5 flex justify-between gap-x-2 overflow-auto touch-pan-x">
                  {topProducts.map((v, i) => (
                    <div
                      key={`products-${v.name}`}
                      className="flex flex-col md:min-w-none md:basis-1/5 min-w-[8.5rem] sm:px-4 py-4 gap-y-4 justify-between items-center border-[3px] border-primary-60 rounded-lg"
                    >
                      <div className="flex flex-col justify-center items-center">
                        <img
                          src={v.image}
                          className="md:h-8 md:h-12 h-12 mb-1"
                        />
                        <div className="font-semibold text-primary-100 text-center md:text-xl text-xl">
                          {v.name}
                        </div>
                        {v.count && (
                          <div className="font-medium text-neutral-400 text-base md:text-base">
                            {v.count}
                          </div>
                        )}
                      </div>
                      <div className="font-medium text-center leading-3">
                        <span className="text-lg md:text-xl">
                          {v.transaction}
                        </span>{" "}
                        <span className="text-xs md:text-base">
                          transactions
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:col-span-1 col-span-2 justify-between gap-y-3 drop-shadow-card bg-white rounded-lg px-4 py-3">
            <div className="font-semibold text-neutral-500 md:text-base text-lg">
              Top 5 agents
            </div>
            <div className="grid xl:grid-rows-5 xl:grid-cols-none lg:grid-rows-2 lg:grid-cols-3 md:grid-rows-3 md:grid-cols-2 sm:grid-rows-1 sm:grid-cols-none items-center gap-y-10">
              {topAgents.map((v, i) => (
                <div
                  key={`topAgents-${i}`}
                  className="flex sm:flex-row flex-col gap-y-2 items-center gap-x-4"
                >
                  <div className="border-2 border-primary-60 overflow-hidden rounded-full h-fit">
                    <img
                      src={`./assets/img/${v.image}`}
                      className="rounded-full border-2 border-white xl:w-20 w-20"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-primary-100 xl:text-xl text-xl">
                      {v.name}
                    </div>
                    <div className="grid grid-cols-2 xl:text-base text-base">
                      <div className="font-medium text-neutral-500">Profit</div>
                      <div className="font-medium">{v.profit}</div>
                    </div>
                    <div className="grid grid-cols-2 xl:text-base text-base">
                      <div className="font-medium text-neutral-500">Sales</div>
                      <div className="font-medium">{v.sales}</div>
                    </div>
                    <div className="grid grid-cols-2 xl:text-base text-base">
                      <div className="font-medium text-neutral-500">
                        Transaction
                      </div>
                      <div className="font-medium">
                        {v.transaction} transaction
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
