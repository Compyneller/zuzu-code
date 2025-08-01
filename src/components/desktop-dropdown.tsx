import React from "react";
import Dropdown from "./ui/drop-down";

const rating = ["One", "Two", "Three", "Four", "Five"];
const locations = ["One", "Two", "Three", "Four", "Five"];
const DesktopDropdown = () => {
  return (
    <div className=" flex items-center justify-between w-full">
      <div className="w-full flex flex-wrap gap-[5px]  md:gap-[11px] items-center">
        <Dropdown
          variant="black"
          className="w-[86.09px] md:w-[188px] py-[2px] px-[10px] bg-white border border-border"
          label="All Rating"
          options={locations}
        />
        <Dropdown
          variant="black"
          className="w-[114.09px] md:w-[188px] py-[2px] px-[10px] bg-white border border-border"
          label="All Location"
          options={locations}
        />
        <Dropdown
          variant="black"
          className="w-[130.09px] md:w-[188px] py-[2px] px-[10px] bg-white border border-border"
          label="All Response times"
          options={rating}
        />

        <p className="hidden md:block text-xl font-semibold">5 match</p>
      </div>
      <div className="  hidden md:flex ">
        <Dropdown
          variant="black"
          prefixLabel="Sort by:"
          className="w-[86.17px] md:w-[188px] py-[2px] px-[10px]  border border-border  bg-white"
          label="best match"
          options={rating}
        />
      </div>
    </div>
  );
};

export default DesktopDropdown;
