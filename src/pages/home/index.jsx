import { ParticlesBackground, ProfileCard, ScrollButton } from "../../components";
import { LastProjects } from "../sections/LastProjects";
import { handleScroll, useVisibility } from "../../utils";
import { useRef } from "react";
import { FooterSection } from "../sections/FooterSection";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import { conicGradient } from "../../components/conicGradients";
import { motion } from "framer-motion";
import { Blog } from "../sections/Blog";

export const Home = () => {
    const landingRef = useRef(null);
    const isLandingVisible = useVisibility(landingRef ?? null);
    const lastProjectsRef = useRef(null);
    const otherRef = useRef(null);
    const blogRef = useRef(null);
    const goTo = (currentRef) => {
        currentRef.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <button className={isLandingVisible ? 'hidden' : 'flex flex-col fixed bottom-10 right-4 z-10 w-fit justify-center hover:scale-110'} onClick={() => handleScroll(landingRef?.current)}>
                <ArrowUpCircleIcon color="#FFFFFF" className={`${conicGradient} h-12 w-12 rounded-full`} />
                <span className="text-white text-sm bg-black bg-opacity-10 rounded-lg px-2 mt-1 font-medium">TOP</span>
            </button>
            <div className="flex flex-col min-h-screen overflow-y-scroll overflow-x-hidden">
                <div ref={landingRef} className="flex w-full h-[100vh]">
                    <ParticlesBackground>
                        <div className="flex w-full h-full justify-center items-center">
                            <ProfileCard />
                        </div>
                        <ScrollButton color="#FFFFFF" withShadow={true} goTo={() => goTo(lastProjectsRef?.current)} />
                    </ParticlesBackground>
                </div>
                <div ref={lastProjectsRef} >
                    <LastProjects goTo={() => goTo(blogRef?.current)} />
                </div>
                <div ref={blogRef}>
                    <Blog goTo={() => goTo(otherRef?.current)} />
                </div>
                <div ref={otherRef}>
                    <FooterSection />
                </div>
            </div>
        </>
    )
};