import React from 'react';
import { SparklesPreview } from '@/components/TrainCardHeader';
import trainImage from "@/assets/the-sapphire-monarch.jpg";
import { NavbarDemo } from "@/components/ui/Nav";
import { DynamicButton } from "@/components/ui/DynamicButton";

const TheSaphireMonarch = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start overflow-auto bg-background px-4 sm:px-6 lg:px-8">
            <NavbarDemo />
            <SparklesPreview
                header="The Saphire Monarch"
                image={trainImage.src}
                title="The Saphire Monarch"
                description="Welcome aboard The Sapphire Monarch, a luxurious train designed to evoke the
                grandeur and majesty of a royal journey. From the moment you step into this elegant carriage,
                you are surrounded by deep sapphire tones and gold accents, reflecting the richness of royal
                heritage. Each suite is a sanctuary of comfort, adorned with plush furnishings, fine linens,
                and exquisite details that make you feel like royalty. Large windows provide stunning views
                of the ever-changing landscapes, allowing you to immerse yourself in the beauty of nature
                as you travel."
            />
            <div className="mb-4 sm:mb-6 md:mb-10 lg:mb-16">
                <DynamicButton text="Back to Budget Trains" link="/budget-trains" />
            </div>
        </div>
    );
};

export default TheSaphireMonarch;