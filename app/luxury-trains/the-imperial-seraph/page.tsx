// app/luxury-trains/the-imperial-seraph/page.tsx
import React from 'react';
import { SparklesPreview } from '@/components/TrainCardHeader';
import trainImage from "@/assets/the-imperial-seraph.jpg"

const ImperialSeraph = () => {
  return (
    <div>
      <SparklesPreview
        header="The Imperial Seraph"
        image={trainImage.src}
      />
    </div>
  );
};

export default ImperialSeraph;