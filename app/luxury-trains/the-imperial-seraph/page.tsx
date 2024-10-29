import React from 'react';
import { SparklesPreview } from '@/components/TrainCardHeader';
import trainImage from "@/assets/the-imperial-seraph.jpg";
import { NavbarDemo } from "@/components/ui/Nav";
import { DynamicButton } from "@/components/ui/DynamicButton";

const ImperialSeraph = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start overflow-auto bg-background px-4 sm:px-6 lg:px-8">
            <NavbarDemo />
            <SparklesPreview
                header="The Imperial Seraph"
                image={trainImage.src}
                title="The Imperial Seraph"
                description="Ascend to new heights of elegance aboard The Imperial Seraph, a train designed for those
                who seek a transcendent experience. The train's interiors reflect a heavenly aesthetic, featuring soft,
                flowing designs that evoke the grace of celestial beings. Each suite is a personal sanctuary, complete
                with sumptuous bedding, elegant furnishings, and private en-suite bathrooms. The soothing color
                palette and delicate decor create an atmosphere that feels both luxurious and serene, inviting guests
                to unwind and enjoy the journey."
            />
            <div className="mb-4 sm:mb-6 md:mb-10 lg:mb-16">
                <DynamicButton text="Back to Luxury Trains" link="/luxury-trains" />
            </div>
        </div>
    );
};

export default ImperialSeraph;