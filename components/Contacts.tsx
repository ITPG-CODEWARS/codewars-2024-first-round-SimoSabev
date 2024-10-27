import { CardSpotlight } from "@/components/ui/card-spotlight";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {NavbarDemo} from "@/components/ui/Nav";

export function CardSpotlightDemo() {
    return (
        <CardSpotlight className="min-h-screen w-full flex flex-col justify-evenly items-center p-4 md:p-8">
            <NavbarDemo/>
            <p className="text-3xl md:text-5xl font-bold relative z-20 text-white">
                Contacts
            </p>
            <div className="text-neutral-200 relative z-20 text-center text-xl md:text-2xl flex flex-col justify-center gap-6 md:gap-10 items-center w-full h-full">
                You can contact us from the following options:
                <ul className="list-none space-y-6 md:space-y-12 text-base md:text-lg">
                    <Step title="+359-12-345-6789" icon={<FaPhoneAlt />} />
                    <Step title="trainco_team@gmail.com" icon={<MdEmail />} />
                    <Step title="Trainco Team in Linkedin" icon={<FaLinkedin />} />
                    <Step title="Trainco Team in Instagram" icon={<FaInstagram />} />
                    <Step title="Trainco Team in Facebook" icon={<FaFacebook />} />
                </ul>
            </div>
            <p className="text-neutral-300 mt-4 relative z-20 text-xs md:text-sm text-center">
                Please, feel free to contact Trainco Team for any questions or suggestions. You will be answered as soon as possible.
            </p>
        </CardSpotlight>
    );
}

const Step = ({ title, icon }: { title: string, icon: React.ReactNode }) => {
    return (
        <li className="flex gap-2 items-center">
            {icon}
            <p className="text-white">{title}</p>
        </li>
    );
};