// app/luxury-trains/the-royal-equinox/page.tsx
import React from 'react';
import {SparklesPreview} from '@/components/TrainCardHeader';
import trainImage from "@/assets/the-royal-equinox.jpg"
import { NavbarDemo } from "@/components/ui/Nav";

const RoyalEquinox = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start overflow-auto bg-background">
            <NavbarDemo/>
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
        </div>
    );
};

export default RoyalEquinox;