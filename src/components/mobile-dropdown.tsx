import React from "react";
import Dropdown from "./ui/drop-down";
const rating = ["One", "Two", "Three", "Four", "Five"];
const locations = ["One", "Two", "Three", "Four", "Five"];
const MobileDropDown = () => {
  return (
    <div className="grid grid-cols-8 w-full gap-[5px]">
      <div className="col-span-2">
        <Dropdown
          variant="black"
          className="w-full py-[2px] px-[10px] bg-white border border-border"
          label="All Rating"
          options={rating}
        />
      </div>
      <div className="col-span-3">
        <Dropdown
          variant="black"
          className="w-full py-[2px] px-[10px] bg-white border border-border"
          label="All Location"
          options={locations}
        />
      </div>
      <div className="col-span-3">
        <Dropdown
          variant="black"
          className="w-full py-[2px] px-[10px] bg-white border border-border"
          label="All Response times"
          options={rating}
        />
      </div>
    </div>
  );
};

export default MobileDropDown;
