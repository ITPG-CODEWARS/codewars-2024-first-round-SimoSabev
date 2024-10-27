import React from 'react';
import {NavbarDemo} from "@/components/ui/Nav";
import {ThreeDCardDemo1} from "@/components/ui/TrainCardBudget";

const Budget_Trains = () => {
    return (
        <div className="w-screen h-screen overflow-x-hidden">
            <NavbarDemo/>
            <div className="mt-40">
                <ThreeDCardDemo1/>
            </div>
        </div>
    );
};

export default Budget_Trains;
