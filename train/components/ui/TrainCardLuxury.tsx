"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import train1 from "@/assets/the-royal-equinox.jpg";
import train2 from "@/assets/golden-horizon-express.jpg";
import train3 from "@/assets/the-imperial-seraph.jpg";

const cardData = [
  {
    title: "The Royal Equinox",
    description: "Hover over this card to unleash the power of CSS perspective",
    imageUrl: train1.src,
    link: "https://twitter.com/mannupaaji",
  },
  {
    title: "Golden Horizon Express",
    description: "Hover over this card to unleash the power of CSS perspective",
    imageUrl: train2.src,
    link: "https://twitter.com/mannupaaji",
  },
  {
    title: "The Imperial Seraph",
    description: "Hover over this card to unleash the power of CSS perspective",
    imageUrl: train3.src,
    link: "https://twitter.com/mannupaaji",
  },
];

export function ThreeDCardDemo() {
  return (
    <div className="card-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {cardData.map((card, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 pb-16 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {card.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {card.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={card.imageUrl}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}