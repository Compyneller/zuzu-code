import React from "react";
import Container from "./ui/container";
import Button from "./ui/button";

const data = {
  heading: "Web Designer",
  text: "Your Top 5 local professional matches are below. You can contact any of the professionals to get more information using the contact button.",
};
const Hero = () => {
  return (
    <div className="w-full mb-[17.27px] flex items-center justify-center text-center ">
      <Container className="relative">
        <Button className="py-[3px] px-[29px] hidden md:block  bg-disable-btn hover:bg-black text-white absolute top-0 left-0">
          Back
        </Button>
        <div className="mb-[25.49px] w-[322.4921875px] md:w-full mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold text-black ">
            {data.heading}
          </h1>
          <h5 className="text-secondary-text block md:hidden text-sm font-medium">
            {data.text}
          </h5>
        </div>
        <div className="flex items-center w-full justify-center text-white gap-[11px]">
          <Button className="bg-primary-btn py-[4.5px] px-[7px] ">
            Your matches
          </Button>
          <Button className="bg-black py-[4.5px] px-[7px] r">Replies</Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
