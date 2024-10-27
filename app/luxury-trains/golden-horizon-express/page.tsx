// app/luxury-trains/golden-horizon-express/page.tsx
import React from 'react';
import {SparklesPreview} from '@/components/TrainCardHeader';
import trainImage from "@/assets/golden-horizon-express.jpg"
import { NavbarDemo } from "@/components/ui/Nav";

const GoldenHorizonExpress = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start overflow-auto bg-background">
            <NavbarDemo />
            <SparklesPreview
                header="Golden Horizon Express"
                image={trainImage.src}
                title="Golden Horizon Express"
                description="Journey into a world of warmth and luxury aboard the Golden Horizon Express, where the
                spirit of exploration meets the artistry of travel. This train embodies a sense of hope and renewal,
                mirroring the golden hues of the sunrise with its sophisticated design and ambiance. Each carriage
                features sun-kissed colors and artfully arranged interiors, creating an inviting atmosphere that
                captivates from the moment you step aboard."
            />
        </div>
    );
};

export default GoldenHorizonExpress;