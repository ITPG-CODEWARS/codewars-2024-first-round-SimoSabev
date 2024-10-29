import React from 'react';
import { SparklesPreview } from '@/components/TrainCardHeader';
import trainImage from "@/assets/the-royal-equinox.jpg";
import { NavbarDemo } from "@/components/ui/Nav";
import { DynamicButton } from "@/components/ui/DynamicButton";

const RoyalEquinox = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start overflow-auto bg-background px-4 sm:px-6 lg:px-8">
            <NavbarDemo />
            <SparklesPreview
                header="The Royal Equinox"
                image={trainImage.src}
                title="The Royal Equinox"
                description="Immerse yourself in an unparalleled journey aboard The Royal Equinox,
                 where the elegance of royal travel meets modern sophistication. As you step aboard, you are greeted
                 by an atmosphere steeped in history and luxury, with each detail meticulously crafted to evoke a
                 sense of regal splendor. The decor features rich fabrics, gold accents, and crystal chandeliers
                 that adorn the grand dining car, while the guest suites are designed with the utmost comfort in
                 mind, featuring plush bedding, ornate furnishings, and en-suite bathrooms adorned with marble
                 finishes."
            />
            <div className="mb-4 sm:mb-6 md:mb-10 lg:mb-16">
                <DynamicButton text="Back to Luxury Trains" link="/luxury-trains" />
            </div>
        </div>
    );
};

export default RoyalEquinox;