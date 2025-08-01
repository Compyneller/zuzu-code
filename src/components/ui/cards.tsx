import { ArrowRight, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Button from "./button";
import Checkbox from "./checkbox";

export type cardData = {
  id: number;
  img: string;
  compName: string;
  distance: string;
  tags: string[];
  text: string;
};

const Cards = ({ data }: { data: cardData }) => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="w-full shadow-sm py-4 px-2.5">
      <div className="w-full mb-[19px] flex items-center gap-[15.6px]">
        <div className="relative w-[129.61px] h-[92.92px] object-cover">
          <Image src={data.img} alt="card-image" fill />
        </div>
        <div>
          <div className="flex items-center gap-[5px]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="7.10599" cy="7.81986" r="6.91068" fill="#1CDD0A" />
              <path
                d="M11.9189 4.96484L6.39551 10.6445L6.39746 10.6465L5.41797 11.6543L5.41602 11.6523L5.41504 11.6543L4.40723 10.6738L4.4082 10.6719L2.28516 8.6084L3.26465 7.60059L5.3877 9.66406L10.9102 3.98438L11.9189 4.96484Z"
                fill="white"
              />
            </svg>

            <p className="text-[16px] font-semibold">{data.compName}</p>
          </div>
          <div className="flex gap-[5px] items-center">
            <svg
              width="8"
              height="10"
              viewBox="0 0 8 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ms-1">
              <path
                d="M4.10541 4.87589C3.79202 4.87589 3.49147 4.7514 3.26988 4.52981C3.04828 4.30821 2.92379 4.00766 2.92379 3.69427C2.92379 3.38089 3.04828 3.08034 3.26988 2.85874C3.49147 2.63715 3.79202 2.51266 4.10541 2.51266C4.41879 2.51266 4.71934 2.63715 4.94094 2.85874C5.16253 3.08034 5.28703 3.38089 5.28703 3.69427C5.28703 3.84945 5.25646 4.0031 5.19708 4.14646C5.1377 4.28982 5.05066 4.42008 4.94094 4.52981C4.83121 4.63953 4.70095 4.72657 4.55759 4.78595C4.41423 4.84533 4.26058 4.87589 4.10541 4.87589ZM4.10541 0.385742C3.22793 0.385742 2.38639 0.734319 1.76592 1.35479C1.14545 1.97526 0.796875 2.8168 0.796875 3.69427C0.796875 6.17567 4.10541 9.83869 4.10541 9.83869C4.10541 9.83869 7.41394 6.17567 7.41394 3.69427C7.41394 2.8168 7.06536 1.97526 6.44489 1.35479C5.82442 0.734319 4.98288 0.385742 4.10541 0.385742Z"
                fill="black"
              />
            </svg>

            <p className="text-xs ms-1 font-semibold">{data.distance}</p>
          </div>
        </div>
      </div>
      <div className="w-full mb-[19px] flex items-center justify-between">
        <button className="py-[5px] px-[10px] rounded-full border border-outline-btn text-outline-btn text-[10px] font-semibold">
          {data.tags[0]}
        </button>
        <div className="flex items-center">
          <Star fill="#FFD633" className="text-white" />
          <Star fill="#FFD633" className="text-white" />
          <Star fill="#FFD633" className="text-white" />
          <Star fill="#FFD633" className="text-white" />
          <Star fill="#FFD633" className="text-white" />
          <p className="text-xs font-semibold">126</p>
        </div>
      </div>
      <div className="mb-[19px]">
        <p className="text-sm font-medium text-secondary-text">{data.text}</p>
      </div>
      <div className="flex items-center justify-between">
        <a
          href=""
          className="text-primary-btn flex text-xs font-semibold items-center gap-1.5">
          View Profile <ArrowRight />
        </a>
        <button className="bg-secondary-btn text-white flex items-center gap-1.5 py-[5px] px-[10px] rounded-full text-[10px] font-semibold">
          <Sparkles />
          Quick to respond
        </button>
      </div>
      <div className="w-[225.83px] mt-[29px] mx-auto bg-secondary-bg py-[17px] px-[22px]">
        <div className="flex items-center gap-[11px]">
          <Checkbox
            id={`${data.id}`}
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />

          <Button className="py-[6.5px] px-[11.5px] text-white bg-primary-btn ">
            Request Reply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
