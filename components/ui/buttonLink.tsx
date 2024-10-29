"use client";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";

interface Button {
  name: string;
  description: string;
  component: React.ReactNode;
  code?: string;
}

interface TailwindcssButtonsProps {
  buttons: Button[];
}

export function TailwindcssButtons({ buttons }: TailwindcssButtonsProps) {
  const copy = (button: Button) => {
    if (button.code) {
      copyToClipboard(button.code);
      return;
    }
    const buttonString = reactElementToJSXString(button.component);

    if (buttonString) {
      const textToCopy = buttonString;
      copyToClipboard(textToCopy);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
        toast.success("Copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
        toast.error("Error copying to clipboard");
      });
  };

  return (
    <div className="w-full my-6">
      <Toaster position="top-center" />
      <div className="flex flex-wrap gap-4 space-y-16 sm:space-y-0 sm:space-x-56">
  {buttons.map((button, idx) => (
    <ButtonsCard key={idx} onClick={() => copy(button)}>
      {button.component}
    </ButtonsCard>
  ))}
</div>
    </div>
  );
}