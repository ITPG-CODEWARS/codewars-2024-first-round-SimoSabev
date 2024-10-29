// components/ui/DynamicButton.tsx
"use client";
import React from "react";
import Link from "next/link";

interface DynamicButtonProps {
  text: string;
  link: string;
}

export const DynamicButton: React.FC<DynamicButtonProps> = ({ text, link }) => {
  return (
    <Link href={link}>
      <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
          {text}
        </div>
      </button>
    </Link>
  );
};