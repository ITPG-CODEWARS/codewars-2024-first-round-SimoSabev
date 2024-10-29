"use client"
import React from "react";
import {HeroParallax} from "@/components/ui/hero-parallax";
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
import {NavbarDemo} from "@/components/ui/Nav";
import {GlobeDemo} from "@/components/ui/Globe_section";
import FeaturesSectionDemo from "@/components/blocks/features-section-demo-3";
import {ExpandableCardDemo} from "@/components/ui/newest-trains";


const products = [
    {
        title: "The Royal Equinox",
        link: "#",
        thumbnail: train1.src,
    },
    {
        title: "Golden Horizon Express",
        link: "#",
        thumbnail: train2.src,
    },
    {
        title: "The Imperial Seraph",
        link: "#",
        thumbnail: train3.src,
    },
    {
        title: "Celestial Voyage",
        link: "#",
        thumbnail: train4.src,
    },
    {
        title: "The Gilded Odyssey",
        link: "#",
        thumbnail: train5.src,
    },
    {
        title: "Majestic Skies Express",
        link: "#",
        thumbnail: train6.src,
    },
    {
        title: "The Velvet Chariot",
        link: "#",
        thumbnail: train7.src,
    },
    {
        title: "The Platinum Paragon",
        link: "#",
        thumbnail: train8.src,
    },
    {
        title: "Sovereign Trails",
        link: "#",
        thumbnail: train9.src,
    },
    {
        title: "The Crowned Voyager",
        link: "#",
        thumbnail: train10.src,
    },
    {
        title: "Opulent Rails",
        link: "#",
        thumbnail: train11.src,
    },
    {
        title: "The Sapphire Monarch",
        link: "#",
        thumbnail: train12.src,
    },
    {
        title: "The Grand Virtuoso",
        link: "#",
        thumbnail: train13.src,
    },
    {
        title: "Silk Route Supreme",
        link: "#",
        thumbnail: train14.src,
    },
    {
        title: "The Exquisite Empress",
        link: "#",
        thumbnail: train15.src,
    },
];

export default function Home() {
    return (
        <main>
            <NavbarDemo/>
            <HeroParallax products={products}/>
            <GlobeDemo/>
            <ExpandableCardDemo/>
            <FeaturesSectionDemo/>
        </main>
    );
}

