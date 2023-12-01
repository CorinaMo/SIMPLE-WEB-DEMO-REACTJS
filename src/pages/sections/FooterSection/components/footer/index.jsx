import { CodeBracketIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { conicGradientBlack } from "../../../../../components/styles";
import { GithubIcon, LinkedInIcon, MediumIcon } from "../../../../../components";
import { goGithub, goLinkedin, goMedium } from "../../../../../utils/functions/goTo";

const SocialLine = ({ children, action }) => {
    return <button
            className="flex flex-row gap-1 md:gap-3 uppercase text-[0.6rem] md:text-xs text-white items-center"
            onClick={action}> {children}</button>
};

export const Footer = () => {
    return (
        <div className={"md:table-fixed mb-0 min-h-fit py-6 " + conicGradientBlack}>
                <div className="absolute bottom-0 bg-black bg-opacity-30 h-full" />
                <div className="flex flex-col md:flex-row gap-10 w-full h-full justify-center items-center">
                    <div className="flex flex-col w-[65vw] md:w-[25vw] justify-center items-center">
                        <CodeBracketIcon color="#ffffff" className="w-5 h-5 md:w-7 md:h-7" />
                        <span className="text-white font-bold text-xs sm:text-sm uppercase pt-2 self-center">Corina Morera</span>
                        <span className="text-white antialiased md:font-medium text-xs pt-1 md:pt-3 md:max-w-[20vw]">Full stack developer / AI & Big Data | Postgraduate in Psychology | Writer</span>
                        <span className="text-white font-medium text-xs">#Creative #ActuallyAutistic</span>

                    </div>
                    <div className="flex flex-col w-[95vw] md:w-[25vw] justify-center items-center">
                        <div className="flex flex-row flex-wrap md:flex-col gap-3 md:gap-2 w-fit h-fit justify-center items-center md:items-start self-center">
                            <SocialLine action={() => goLinkedin()}> <LinkedInIcon color="#FFFFFF" className="mb-1" />Linkedin</SocialLine>
                            <SocialLine action={() => goGithub()}><GithubIcon color="#FFFFFF" /> Github</SocialLine>
                            <SocialLine action={() => goMedium()}><MediumIcon color="#FFFFFF" />My Mental Straws</SocialLine>
                        </div>
                    </div>
                    <div className="flex flex-col md:gap-2 w-[65vw] md:w-[25vw] justify-center items-center">
                        <span className="text-white font-medium text-[0.6rem] md:text-xs md:pt-3 md:max-w-[18vw]">Simple web made with React JS, Tailwind CSS and Framer Motion</span>
                        <span className="flex flex-row gap-3 uppercase text-[0.6rem] text-white items-center">
                            <EnvelopeIcon width="20" heigth="20" color="#FFFFFF" />crista.majere@gmail.com
                        </span>
                    </div>
                </div>
            </div>
    )
};
