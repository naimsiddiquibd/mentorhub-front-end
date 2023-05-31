import React from "react";
import { BiSearch } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

const Banner = () => {
  return (
    <div className="bg-cover z-0">
      <div className="flex justify-center items-center ">
        <div>
          <h2 className="text-center lg:text-4xl md:text-2xl text-xl font-bold text-[#650006] mt-20">
            Search Mentor, Make an Appointment
          </h2>
          <h2 className="lg:text-xl md:text-lg text-md text-[#9F0E31] font-semibold text-center ">
            Discover the best Mentors, industry the city nearest to you.
          </h2>
        </div>
      </div>

      <div className="flex justify-center items-start gap-2 my-6">
        <div className="w-[15%]">
          <form className="text-slate-500">
            <label class="relative block">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <GoLocation></GoLocation>
              </span>
              <input
                class="w-full bg-white placeholder:font-italitc border border-[#9F0E31] rounded-lg py-2 pl-10 pr-4 placeholder:text-xs focus:outline-none"
                placeholder="Based on your Location"
                type="text"
              />
            </label>
          </form>
        </div>
        <div className="w-[40%]">
          <form className="text-slate-500">
            <label class="relative block">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <BiSearch></BiSearch>
              </span>
              <input
                class="w-full bg-white placeholder:font-italitc border border-[#C31F48] rounded-lg py-2 placeholder:text-xs pl-10 pr-4 focus:outline-none"
                placeholder="Search Mentors"
                type="text"
              />
            </label>
          </form>
        </div>

        <div className="w-[4%] py-2 border-[2px] px-3 rounded-lg  border-[#9F0E31]">
          <BiSearch className="text-[#9F0E31] text-xl text-center cursor-pointer"></BiSearch>
        </div>
      </div>
    </div>
  );
};
export default Banner;
