"use client";
import useScreenSize from "@/hook/useScreenSize";
import DesktopDropdown from "./desktop-dropdown";
import MobileDropDown from "./mobile-dropdown";
import Container from "./ui/container";
import Button from "./ui/button";

const Matches = () => {
  const isMobile = useScreenSize();

  const DropDownComponent = isMobile ? MobileDropDown : DesktopDropdown;
  return (
    <div className="w-full mb-[28.4px]">
      <Container>
        <div className="w-full bg-secondary-bg py-[11.39px] px-[4.71px] md:py-[19.7px] md:px-[22px]">
          <p className="text-sm block md:hidden font-medium mb-[5px]">
            5 matches
          </p>
          <DropDownComponent />
        </div>
        <div className="px-[22.96px] py-[7.9px] md:py-[25.66px] flex items-center justify-between bg-linear-90 from-[#8ED5EC] to-[#00AFE3] ">
          <h5 className="text-white text-sm md:text-[22px] ">
            <span className="text-[#FFF600] italic font-semibold">
              Recommended:
            </span>{" "}
            Request replies from your{" "}
            <span className="font-semibold">top 5 matches</span> to hear back
            faster
          </h5>
          <Button className="text-white hidden md:block bg-black py-[6.5px] px-[16.5px]">
            Request your best matches here
          </Button>
        </div>
        <div className="mx-auto bg-danger w-fit py-[6px] px-[9px] mt-[18px] rounded-sm text-white">
          <h5 className="font-bold md:font-medium text-[16px] md:text-lg text-center">
            Request Your 5 Top Matches Here
          </h5>
        </div>
      </Container>
    </div>
  );
};

export default Matches;
