import React from 'react';
import {NavbarDemo} from "@/components/ui/Nav";
import {ThreeDCardDemo} from "@/components/ui/TrainCardLuxury";

const Luxury_Trains = () => {
    return (
        <div className="w-screen h-screen overflow-x-hidden">
            <NavbarDemo/>
            <div className="mt-40">
                <ThreeDCardDemo/>
            </div>
        </div>
    );
};

export default Luxury_Trains;
