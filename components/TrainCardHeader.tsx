"use client";
import React from "react";
import {SparklesCore} from "@/components/ui/sparkles";
import Image from "next/image";

interface SparklesPreviewProps {
    header: string;
    image: string;
    title: string;
    description: string;
}

export function SparklesPreview({header, image, title, description}: SparklesPreviewProps) {
    return (
        <div
            className="min-h-screen w-full bg-background flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="md:text-7xl text-3xl lg:text-8xl font-bold text-center text-white relative z-20">
                {header}
            </h1>
            <div className="w-full h-full relative">
                {/* Gradients */}
                <div
                    className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm"/>
                <div
                    className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4"/>
                <div
                    className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm"/>
                <div
                    className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"/>

                {/* Core component */}
                <SparklesCore
                    background="background"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div
                    className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
            <div
                className="relative w-screen h-full mt-16 flex flex-col lg:flex-row justify-evenly items-center lg:items-start">
                <div className="hover:scale-125 transition ease-in-out duration-700">
                    <Image src={image} alt={header} width={400} height={400} className="rounded-md"/>
                </div>
                <div className="mt-8 text-center lg:text-left">
                    <h1 className="text-3xl font-bold text-white">
                        {title}
                    </h1>
                    <p className="text-white mt-4 max-w-xl">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}