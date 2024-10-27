"use client";
import React, {useState} from "react";
import {HoveredLink, Menu, MenuItem, ProductItem} from "../ui/navbar-menu";
import logo from "@/assets/logo.png"
import {cn} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {ModeToggle} from "@/components/ui/theme-chage";
import luxury from "@/assets/team.jpg"
import budget from "@/assets/luxury5.jpg"

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2"/>
        </div>
    );
}

function Navbar({className}: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <div className="w-full h- flex justify-between items-center">
                    <div className="w-fit absolute">
                        <Link href="/">
                            <Image src={logo.src} alt="Trainco Logo" width={60} height={60}
                                   className="rounded-full"></Image>
                        </Link>
                    </div>
                    <div className="w-full flex justify-center items-center gap-10">
                        <MenuItem setActive={setActive} active={active} item="Trains">
                            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                                <ProductItem
                                    title="Luxury Trains"
                                    href="/luxury-trains"
                                    src={luxury.src}
                                    description="Choose from our top 3 best luxury trains."
                                />
                                <ProductItem
                                    title="Budget Trains"
                                    href="/budget-trains"
                                    src={budget.src}
                                    description="Choose from our top 3 best budget trains."
                                />
                            </div>
                        </MenuItem>
                            <div className="flex flex-col space-y-4 text-white hover:opacity-[0.9]">
                                <Link href="/contacts">Contacts</Link>
                            </div>
                    </div>
                    <ModeToggle/>
                </div>
            </Menu>
        </div>
    );
}
