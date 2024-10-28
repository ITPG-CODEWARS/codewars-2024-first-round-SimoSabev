"use client";
import Image from "next/image";
import React, {useEffect, useId, useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {useOutsideClick} from "@/app/hooks/use-outside-click";
import person1 from "@/assets/person1.png";
import person2 from "@/assets/person2.png";
import person3 from "@/assets/person3.png";
import person4 from "@/assets/person4.png";
import person5 from "@/assets/person5.png";


export function ExpandableCardDemo() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
        null
    );
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <h1 className="text-5xl w-full text-center my-10">Our clients&apos; reviews</h1>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0  grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon/>
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <Image
                                    priority
                                    width={200}
                                    height={200}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                />
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-neutral-700 dark:text-neutral-200"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="max-w-2xl mx-auto w-full gap-4">
                {cards.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                    >
                        <div className="flex gap-4 flex-col md:flex-row ">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <Image
                                    width={100}
                                    height={100}
                                    src={card.src}
                                    alt={card.title}
                                    className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                                />
                            </motion.div>
                            <div className="">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M18 6l-12 12"/>
            <path d="M6 6l12 12"/>
        </motion.svg>
    );
};

const cards = [
    {
        description: "Emma R.",
        title: "\"A Journey That Redefined Luxury Travel\"",
        src: person1.src,
        content: () => {
            return (
                <p>
                    From start to finish, my experience aboard The Sapphire Monarch was nothing short of magical. The
                    train itself was like stepping into a royal palace on wheels, with opulent decor, plush seating, and
                    views that took my breath away. Every little detail was thoughtfully designed, from the personalized
                    welcome gift in my suite to the fresh flowers that greeted me every morning. I was particularly
                    impressed by the level of service – the staff was attentive without being intrusive and anticipated
                    my needs perfectly.

                    The onboard events were delightful; the &apos;Royal Gala Night&apos; was truly enchanting with live
                    classical
                    music, dancing, and a five-course meal that rivaled any Michelin-starred restaurant. The excursions
                    were expertly curated, allowing us to explore hidden gems at each destination and making every stop
                    along the journey memorable. But above all, what stood out the most was the commitment to comfort
                    and luxury in every aspect of the journey. I would highly recommend The Sapphire Monarch to anyone
                    looking to indulge in an unforgettable travel experience.
                </p>
            );
        },
    },
    {
        description: "Liam M.",
        title: "\"Exceeds All Expectations!\"",
        src: person2.src,
        content: () => {
            return (
                <p>
                    Having traveled on several luxury trains before, I can confidently say that The Sapphire Monarch
                    exceeded every expectation I had. The accommodations were spacious, elegantly designed, and had the
                    perfect balance of classic charm and modern amenities. My suite felt like a cozy private retreat,
                    with plush bedding, beautiful decor, and views of the landscapes that were simply mesmerizing.

                    The culinary experience was world-class. Every meal was a celebration of flavors, with a variety of
                    dishes inspired by local cuisines and paired perfectly with fine wines. The onboard chef even
                    accommodated my dietary preferences, which made me feel truly valued as a guest. The &apos;Royal
                    Experiences&apos; were something I looked forward to every evening, and I loved the thoughtful touch
                    of
                    storytelling during dinner, which provided insight into the history of the regions we traveled
                    through. It&apos;s clear that The Sapphire Monarch is in a league of its own, and I can&apos;t wait
                    to book
                    another trip.
                </p>
            );
        },
    },

    {
        description: "Sarah L.",
        title: "\"An Immersive Cultural Experience\"",
        src: person3.src,
        content: () => {
            return (
                <p>
                    What I appreciated most about The Sapphire Monarch was how much it emphasized the culture and
                    history of the regions we visited. The excursions were immersive and insightful – we explored
                    castles, met with local artisans, and even had exclusive access to a private historical estate. It
                    felt like we were stepping back in time at each stop, which added a new dimension to the journey.

                    Back on board, the attention to detail was impeccable. The themed dinner nights transported us to a
                    different world, and the staff was incredibly knowledgeable, sharing fascinating stories about each
                    region. The dining experience was top-notch, with dishes that were not only delicious but
                    beautifully presented. This was my first time on a luxury train, and The Sapphire Monarch set the
                    bar so high that I can&apos;t imagine traveling any other way. It was an unforgettable adventure,
                    and I&apos;m
                    already planning my next trip.
                </p>
            );
        },
    },
    {
        description: "Carlos D.",
        title: "\"Unmatched Luxury and Service\"",
        src: person4.src,
        content: () => {
            return (
                <p>
                    The Sapphire Monarch provided a travel experience unlike anything I have ever had. From the moment I
                    boarded, I felt like royalty. The staff greeted me warmly and made sure every part of my stay was
                    perfect. My suite was both luxurious and comfortable, with floor-to-ceiling windows that showcased
                    the incredible landscapes we passed through. Every detail was considered, from the plush linens to
                    the complimentary welcome champagne waiting for me.

                    The service on board was exceptional – the staff went above and beyond to ensure I was comfortable,
                    and even remembered my coffee preference each morning! The food was spectacular, with every meal a
                    culinary adventure. I especially enjoyed the curated wine pairings with each course and the cooking
                    class with the onboard chef. The Sapphire Monarch is not just a train; it&apos;s an experience of a
                    lifetime, and I would highly recommend it to anyone seeking an unforgettable and indulgent journey.
                </p>
            );
        },
    },
    {
        description: "Isabella F.",
        title: "\"An Unforgettable Romantic Getaway\"",
        src: person5.src,
        content: () => {
            return (
                <p>
                    My partner and I chose The Sapphire Monarch for a romantic getaway, and it was everything we could
                    have dreamed of. The ambiance was intimate, luxurious, and filled with beautiful details that made
                    our trip feel truly special. Our suite was gorgeous, and the large windows provided breathtaking
                    views, making the journey feel like a dream. The onboard activities, like the private wine tasting
                    and sunset yoga, were thoughtfully planned to create unforgettable moments.

                    The food was divine, with menus that highlighted fresh, locally sourced ingredients and showcased
                    the culinary heritage of the areas we traveled through. Each course was a work of art, and the
                    sommelier&apos;s wine pairings added a delightful touch. The onboard staff were so attentive and kind,
                    going out of their way to make us feel welcomed and pampered. This was our first luxury train
                    journey, and I can confidently say The Sapphire Monarch has set the standard. It was a magical
                    experience we will cherish forever, and we look forward to traveling on this magnificent train again
                    soon!
                </p>
            );
        },
    },
];
