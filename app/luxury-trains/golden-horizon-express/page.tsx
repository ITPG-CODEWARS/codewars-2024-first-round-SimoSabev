// app/luxury-trains/golden-horizon-express/page.tsx
import React from 'react';
import { SparklesPreview } from '@/components/TrainCardHeader';
import trainImage from "@/assets/golden-horizon-express.jpg"

const GoldenHorizonExpress = () => {
  return (
    <div>
      <SparklesPreview
        header="Golden Horizon Express"
        image={trainImage.src}
      />
    </div>
  );
};

export default GoldenHorizonExpress;