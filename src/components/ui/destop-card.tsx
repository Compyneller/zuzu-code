import { ArrowRight, CircleCheckBig, Sparkles, Star } from "lucide-react";
import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { cardData } from "./cards";
import Button from "./button";

const DesktopCard = ({ data }: { data: cardData }) => {
  return (
    <div className="grid shadow-sm grid-cols-1 md:grid-cols-4">
      <div className="col-span-3  py-[30px] px-[22px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[25.54px]">
          <div className="relative col-span-1 h-[186.83px]">
            <Image
              src={data.img}
              fill
              alt="card-img"
              className="object-cover"
            />
          </div>
          <div className="col-span-2 space-y-[15px]">
            <div className="flex  items-start justify-between w-full">
              <div>
                <div className="flex mb-1 items-center gap-[5px]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle
                      cx="8.88672"
                      cy="8.89258"
                      r="8.73438"
                      fill="#1CDD0A"
                    />
                    <path
                      d="M14.9736 5.28418L7.99414 12.4639L7.99512 12.4648L6.75684 13.7383L6.75586 13.7373L6.75488 13.7393L5.47949 12.5L5.48047 12.498L2.79688 9.88867L4.03516 8.61523L6.71875 11.2246L13.6992 4.04492L14.9736 5.28418Z"
                      fill="white"
                    />
                  </svg>

                  <p className="text-[16px] font-semibold">{data.compName}</p>
                </div>
                <div className="flex ms-1 gap-[5px] items-center">
                  <svg
                    width="10"
                    height="13"
                    viewBox="0 0 10 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.88477 6.40555C4.48868 6.40555 4.10882 6.24821 3.82874 5.96813C3.54867 5.68806 3.39132 5.3082 3.39132 4.91211C3.39132 4.51602 3.54867 4.13616 3.82874 3.85609C4.10882 3.57601 4.48868 3.41867 4.88477 3.41867C5.28085 3.41867 5.66071 3.57601 5.94079 3.85609C6.22086 4.13616 6.37821 4.51602 6.37821 4.91211C6.37821 5.10823 6.33958 5.30243 6.26453 5.48363C6.18947 5.66482 6.07947 5.82945 5.94079 5.96813C5.80211 6.10681 5.63747 6.21682 5.45628 6.29187C5.27509 6.36692 5.08089 6.40555 4.88477 6.40555ZM4.88477 0.730469C3.77573 0.730469 2.71211 1.17103 1.9279 1.95524C1.14369 2.73945 0.703125 3.80307 0.703125 4.91211C0.703125 8.04834 4.88477 12.678 4.88477 12.678C4.88477 12.678 9.06641 8.04834 9.06641 4.91211C9.06641 3.80307 8.62584 2.73945 7.84163 1.95524C7.05742 1.17103 5.99381 0.730469 4.88477 0.730469Z"
                      fill="black"
                    />
                  </svg>

                  <p className="text-xs ms-1 font-semibold">{data.distance}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Star fill="#FFD633" size={33} className="text-white" />
                <Star fill="#FFD633" size={33} className="text-white" />
                <Star fill="#FFD633" size={33} className="text-white" />
                <Star fill="#FFD633" size={33} className="text-white" />
                <Star fill="#FFD633" size={33} className="text-white" />
                <p className="text-[22px] font-semibold">126</p>
              </div>
            </div>
            <div className="flex  flex-wrap gap-1.5 items-center">
              {data.tags.map((tag, index) => (
                <button
                  className="py-[5px] px-[10px] rounded-full border border-outline-btn text-outline-btn text-[10px] font-semibold"
                  key={index}>
                  {tag}
                </button>
              ))}
            </div>
            <p className="text-secondary-text text-xs font-medium">
              {data.text}
            </p>
            <div className="flex items-center justify-between">
              <a
                href=""
                className="text-primary-btn text-xs font-semibold flex items-center gap-1.5">
                View Profile <ArrowRight />
              </a>
              <button className="bg-secondary-btn text-white flex items-center gap-1.5 py-[5px] px-[10px] rounded-full text-[10px] font-semibold">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.1802 7.58829L7.89957 6.37954L6.69082 3.09892C6.62925 2.932 6.518 2.78797 6.37205 2.68624C6.2261 2.58451 6.05247 2.52997 5.87457 2.52997C5.69666 2.52997 5.52303 2.58451 5.37708 2.68624C5.23113 2.78797 5.11988 2.932 5.05832 3.09892L3.84957 6.37954L0.568942 7.58829C0.402028 7.64985 0.258 7.76111 0.15627 7.90706C0.0545405 8.05301 0 8.22664 0 8.40454C0 8.58245 0.0545405 8.75607 0.15627 8.90202C0.258 9.04797 0.402028 9.15923 0.568942 9.22079L3.84957 10.4295L5.05832 13.7102C5.11988 13.8771 5.23113 14.0211 5.37708 14.1228C5.52303 14.2246 5.69666 14.2791 5.87457 14.2791C6.05247 14.2791 6.2261 14.2246 6.37205 14.1228C6.518 14.0211 6.62925 13.8771 6.69082 13.7102L7.89957 10.4295L11.1802 9.22079C11.3471 9.15923 11.4911 9.04797 11.5929 8.90202C11.6946 8.75607 11.7491 8.58245 11.7491 8.40454C11.7491 8.22664 11.6946 8.05301 11.5929 7.90706C11.4911 7.76111 11.3471 7.64985 11.1802 7.58829ZM10.9208 8.51704L7.47832 9.78579C7.42733 9.80455 7.38102 9.83416 7.3426 9.87257C7.30418 9.91099 7.27457 9.9573 7.25582 10.0083L5.98707 13.4508C5.97854 13.4738 5.96319 13.4936 5.94308 13.5075C5.92297 13.5215 5.89906 13.529 5.87457 13.529C5.85007 13.529 5.82616 13.5215 5.80605 13.5075C5.78594 13.4936 5.77059 13.4738 5.76207 13.4508L4.49332 10.0083C4.47456 9.9573 4.44495 9.91099 4.40653 9.87257C4.36812 9.83416 4.32181 9.80455 4.27082 9.78579L0.828317 8.51704C0.805352 8.50852 0.785545 8.49317 0.771559 8.47306C0.757572 8.45295 0.750075 8.42904 0.750075 8.40454C0.750075 8.38004 0.757572 8.35614 0.771559 8.33602C0.785545 8.31591 0.805352 8.30056 0.828317 8.29204L4.27082 7.02329C4.32181 7.00454 4.36812 6.97493 4.40653 6.93651C4.44495 6.89809 4.47456 6.85178 4.49332 6.80079L5.76207 3.35829C5.77059 3.33533 5.78594 3.31552 5.80605 3.30153C5.82616 3.28755 5.85007 3.28005 5.87457 3.28005C5.89906 3.28005 5.92297 3.28755 5.94308 3.30153C5.96319 3.31552 5.97854 3.33533 5.98707 3.35829L7.25582 6.80079C7.27457 6.85178 7.30418 6.89809 7.3426 6.93651C7.38102 6.97493 7.42733 7.00454 7.47832 7.02329L10.9208 8.29204C10.9438 8.30056 10.9636 8.31591 10.9776 8.33602C10.9916 8.35614 10.9991 8.38004 10.9991 8.40454C10.9991 8.42904 10.9916 8.45295 10.9776 8.47306C10.9636 8.49317 10.9438 8.50852 10.9208 8.51704ZM7.99957 1.90454C7.99957 1.80508 8.03908 1.7097 8.1094 1.63938C8.17973 1.56905 8.27511 1.52954 8.37457 1.52954H9.49957V0.404541C9.49957 0.305085 9.53908 0.209702 9.6094 0.139376C9.67973 0.0690498 9.77511 0.029541 9.87457 0.029541C9.97402 0.029541 10.0694 0.0690498 10.1397 0.139376C10.2101 0.209702 10.2496 0.305085 10.2496 0.404541V1.52954H11.3746C11.474 1.52954 11.5694 1.56905 11.6397 1.63938C11.7101 1.7097 11.7496 1.80508 11.7496 1.90454C11.7496 2.004 11.7101 2.09938 11.6397 2.16971C11.5694 2.24003 11.474 2.27954 11.3746 2.27954H10.2496V3.40454C10.2496 3.504 10.2101 3.59938 10.1397 3.66971C10.0694 3.74003 9.97402 3.77954 9.87457 3.77954C9.77511 3.77954 9.67973 3.74003 9.6094 3.66971C9.53908 3.59938 9.49957 3.504 9.49957 3.40454V2.27954H8.37457C8.27511 2.27954 8.17973 2.24003 8.1094 2.16971C8.03908 2.09938 7.99957 2.004 7.99957 1.90454ZM14.2496 4.90454C14.2496 5.004 14.2101 5.09938 14.1397 5.16971C14.0694 5.24003 13.974 5.27954 13.8746 5.27954H13.2496V5.90454C13.2496 6.004 13.2101 6.09938 13.1397 6.16971C13.0694 6.24003 12.974 6.27954 12.8746 6.27954C12.7751 6.27954 12.6797 6.24003 12.6094 6.16971C12.5391 6.09938 12.4996 6.004 12.4996 5.90454V5.27954H11.8746C11.7751 5.27954 11.6797 5.24003 11.6094 5.16971C11.5391 5.09938 11.4996 5.004 11.4996 4.90454C11.4996 4.80508 11.5391 4.7097 11.6094 4.63938C11.6797 4.56905 11.7751 4.52954 11.8746 4.52954H12.4996V3.90454C12.4996 3.80508 12.5391 3.7097 12.6094 3.63938C12.6797 3.56905 12.7751 3.52954 12.8746 3.52954C12.974 3.52954 13.0694 3.56905 13.1397 3.63938C13.2101 3.7097 13.2496 3.80508 13.2496 3.90454V4.52954H13.8746C13.974 4.52954 14.0694 4.56905 14.1397 4.63938C14.2101 4.7097 14.2496 4.80508 14.2496 4.90454Z"
                    fill="white"
                  />
                </svg>
                Quick to respond
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="w-full bg-secondary-bg h-full flex flex-col gap-[15px] items-center justify-center">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_127)">
              <rect
                width="24"
                height="24"
                transform="translate(3 3.07324)"
                fill="#1CDD0A"
              />
              <path
                d="M9.75 15.8232L13.25 19.3232L20.25 11.8232"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1_127"
                x="0.5"
                y="0.573242"
                width="29"
                height="29"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="0.5"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_dropShadow_1_127"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_127"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_127"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <Button className="py-[6.5px] px-[29px] text-lg font-medium text-white bg-primary-btn ">
            Request Reply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DesktopCard;
