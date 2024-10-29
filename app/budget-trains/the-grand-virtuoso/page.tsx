import React from 'react';
import { SparklesPreview } from '@/components/TrainCardHeader';
import trainImage from "@/assets/the-grand-virtuoso.jpg";
import { NavbarDemo } from "@/components/ui/Nav";
import { DynamicButton } from "@/components/ui/DynamicButton";

const TheGrandVituoso = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start overflow-auto bg-background px-4 sm:px-6 lg:px-8">
            <NavbarDemo />
            <SparklesPreview
                header="The Grand Vituoso"
                image={trainImage.src}
                title="The Grand Vituoso"
                description="Step aboard The Grand Virtuoso, where the passion for music and art meets the elegance of luxury travel. This train is a haven for culture enthusiasts, featuring interiors that celebrate artistic expression with vibrant colors, artistic motifs, and elegant furnishings. Each suite is thoughtfully designed to provide an inspiring atmosphere, combining comfort with artistic flair. The train's lounge car features live performances by talented musicians, creating a dynamic environment that fosters creativity and enjoyment."
            />
            <div className="mb-4 sm:mb-6 md:mb-10 lg:mb-16">
                <DynamicButton text="Back to Budget Trains" link="/budget-trains" />
            </div>
        </div>
    );
};

export default TheGrandVituoso;