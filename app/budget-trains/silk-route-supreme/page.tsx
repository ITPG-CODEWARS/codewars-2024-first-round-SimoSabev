import React from 'react';
import {SparklesPreview} from '@/components/TrainCardHeader';
import trainImage from "@/assets/silk-route-supreme.jpg"
import {NavbarDemo} from "@/components/ui/Nav";

const SilkRouteSupreme = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start overflow-auto bg-background">
            <NavbarDemo/>
            <SparklesPreview
                header="Silk Route Supreme"
                image={trainImage.src}
                title="Silk Route Supreme"
                description="Experience the allure of the legendary Silk Route Supreme, a luxurious train that
                retraces the historic pathways of trade and culture between East and West. The train’s design
                reflects the rich heritage of the Silk Road, featuring intricate textiles, ornate decorations,
                and vibrant colors that evoke the spirit of adventure. Each suite is a luxurious retreat, with
                sumptuous bedding and exquisite decor that provide comfort and elegance throughout your
                journey."
            />
        </div>
    );
};

export default SilkRouteSupreme;