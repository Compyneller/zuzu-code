import Image from "next/image";
import React from "react";
import Container from "./ui/container";
import { Search } from "lucide-react";
import Dropdown from "./ui/drop-down";

const services = ["Service 1", "Service 2", "Service 3", "Service 4"];
const profile = ["Account", "Setting", "Logout"];
const Navbar = () => {
  return (
    <div className="w-full mb-[25.49px] py-[12.22px] md:py-6 border-b border-border flex items-center justify-between">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[15px]">
            <div className="relative h-[19.84px] w-[90.1px] md:h-[37px] md:w-[168px]">
              <Image src="/images/Frame 1321318060.svg" alt="Logo" fill />
            </div>
            <Dropdown
              className="border-0 w-[103px] block md:hidden"
              variant="blue"
              options={services}
              label="Our Services"
            />
          </div>
          <div className="hidden  md:flex items-center gap-[10px]">
            <div className=" border-t-0 border-x-0 border-[2.8px] border-primary-btn text-[16px] font-medium">
              My requests
            </div>
            <div className="flex gap-2.5">
              <Image
                src="/images/Group 1000004375.svg"
                height={28}
                width={28}
                alt="avatar"
              />
              <Dropdown
                options={profile}
                label="Chander"
                variant="blue"
                className="hidden w-[100px] md:block "
              />
            </div>
          </div>
          <div className="flex md:hidden items-center gap-[13px]">
            <Search size={13.68} />
            <p className="text-[16px] font-medium">Login</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
