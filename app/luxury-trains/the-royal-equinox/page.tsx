// app/luxury-trains/the-royal-equinox/page.tsx
import React from 'react';
import { SparklesPreview } from '@/components/TrainCardHeader';
import trainImage from "@/assets/the-royal-equinox.jpg"

const RoyalEquinox = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start overflow-auto bg-background">
      <SparklesPreview
        header="The Royal Equinox"
        image={trainImage.src}
      />
      <div className="mt-8 text-center">
        <h1 className="text-3xl font-bold text-white">
          The Royal Equinox
        </h1>
        <p className="text-white mt-4">
          The Royal Equinox is a luxury train that offers a unique experience to its passengers.
          The train is equipped with modern amenities and luxurious accommodations, making it the perfect choice for those looking to travel in style.
          With its elegant design and impeccable service, the Royal Equinox is sure to provide an unforgettable journey.
        </p>
      </div>
    </div>
  );
};

export default RoyalEquinox;