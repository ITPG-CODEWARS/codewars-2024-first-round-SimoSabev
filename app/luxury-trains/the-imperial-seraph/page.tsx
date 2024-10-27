// app/luxury-trains/the-imperial-seraph/page.tsx
import React from 'react';
import {SparklesPreview} from '@/components/TrainCardHeader';
import trainImage from "@/assets/the-imperial-seraph.jpg"
import {NavbarDemo} from "@/components/ui/Nav";

const ImperialSeraph = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start overflow-auto bg-background">
            <NavbarDemo/>
            <SparklesPreview
                header="The Imperial Seraph"
                image={trainImage.src}
                title="The Royal Equinox"
                description="Ascend to new heights of elegance aboard The Imperial Seraph, a train designed for those
                who seek a transcendent experience. The train's interiors reflect a heavenly aesthetic, featuring soft,
                flowing designs that evoke the grace of celestial beings. Each suite is a personal sanctuary, complete
                with sumptuous bedding, elegant furnishings, and private en-suite bathrooms. The soothing color
                palette and delicate decor create an atmosphere that feels both luxurious and serene, inviting guests
                to unwind and enjoy the journey."
            />
        </div>
    );
};

export default ImperialSeraph;