"use client"
import React, { useState } from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import train1 from "@/assets/train1.jpg";
import train2 from "@/assets/train2.jpg";
import train3 from "@/assets/train3.jpg";
import train4 from "@/assets/train4.jpg";
import train5 from "@/assets/train5.jpg";
import train6 from "@/assets/train6.jpg";
import train7 from "@/assets/train7.jpg";
import train8 from "@/assets/train8.jpg";
import train9 from "@/assets/train9.jpg";
import train10 from "@/assets/train10.jpg";
import train11 from "@/assets/train11.jpg";
import train12 from "@/assets/train12.jpg";
import train13 from "@/assets/train13.jpg";
import train14 from "@/assets/train14.jpg";
import train15 from "@/assets/train15.jpg";
import { NavbarDemo } from "@/components/ui/Nav";

const products = [
  {
    title: "Product 1",
    link: "/product-1",
    thumbnail: train1.src,
  },
  {
    title: "Product 2",
    link: "/product-2",
    thumbnail: train2.src,
  },
  {
    title: "Product 3",
    link: "/product-3",
    thumbnail: train3.src,
  },
  {
    title: "Product 4",
    link: "/product-4",
    thumbnail: train4.src,
  },
  {
    title: "Product 5",
    link: "/product-5",
    thumbnail: train5.src,
  },
  {
    title: "Product 1",
    link: "/product-1",
    thumbnail: train6.src,
  },
  {
    title: "Product 2",
    link: "/product-2",
    thumbnail: train7.src,
  },
  {
    title: "Product 3",
    link: "/product-3",
    thumbnail: train8.src,
  },
  {
    title: "Product 4",
    link: "/product-4",
    thumbnail: train9.src,
  },
  {
    title: "Product 5",
    link: "/product-5",
    thumbnail: train10.src,
  },
  {
    title: "Product 1",
    link: "/product-1",
    thumbnail: train11.src,
  },
  {
    title: "Product 2",
    link: "/product-2",
    thumbnail: train12.src,
  },
  {
    title: "Product 3",
    link: "/product-3",
    thumbnail: train13.src,
  },
  {
    title: "Product 4",
    link: "/product-4",
    thumbnail: train14.src,
  },
  {
    title: "Product 5",
    link: "/product-5",
    thumbnail: train15.src,
  },
];

export default function Home() {
  return (
    <main>
        <NavbarDemo />
      <HeroParallax products={products} />
    </main>
  );
}