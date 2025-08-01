"use client";
import React from "react";
import Container from "./ui/container";
import DesktopCard from "./ui/destop-card";
import useScreenSize from "@/hook/useScreenSize";
import Cards from "./ui/cards";
const cardData = [
  {
    id: 1,
    img: "/images/image.png",
    compName: "Bees pvt. ltd",
    distance: "3.6 miles away",
    tags: ["Full Website Design", "Banner Design", "New Pages"],
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    id: 2,
    img: "/images/image(2).png",
    compName: "Bees pvt. ltd",
    distance: "3.6 miles away",
    tags: ["Full Website Design", "Banner Design", "New Pages"],
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    id: 3,
    img: "/images/image(1).png",
    compName: "Bees pvt. ltd",
    distance: "3.6 miles away",
    tags: ["Full Website Design", "Banner Design", "New Pages"],

    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
];
const CardContainer = () => {
  const isMobile = useScreenSize();

  const CardComponent = isMobile ? Cards : DesktopCard;

  return (
    <Container>
      <div className="grid grid-cols-1 gap-[11.39px]">
        {cardData.map((item) => (
          <CardComponent data={item} key={item.id} />
        ))}
      </div>
    </Container>
  );
};

export default CardContainer;
