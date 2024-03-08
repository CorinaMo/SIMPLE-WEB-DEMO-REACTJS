import { useEffect, useRef, useState } from "react";
import { DocumentArrowDownIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import { ConicGradientButton, conicGradient, DefaultDialog, TitleSection } from "../../../components";
import { SectionBase } from "../components/SectionBase";
import { Footer, PDFContent } from "./components";
import Resume from '../../../assets/docs/Resume-2024.pdf';
import { useVisibility } from "../../../utils";
import { motion, useAnimation } from "framer-motion";
import { SectionDivider } from "../components/SectionDivider";

export const FooterSection = () => {
    // Handle PDF (React-PDF).
    const [showPDF, setShowPDF] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const handleClosePDF = () => setShowPDF(false);
    const handleOpenPDF = () => setShowPDF(true);
    const handleDownloadPDF = () => {
        setIsDownloading(true);
        const pdf = Resume;
        const link = document.createElement("a");
        link.href = pdf;
        link.download = "Resume-Corina-Morera.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => {
            setIsDownloading(false);
        }, 1000);
    };

    //FOR LATER const goToGamePairs = () => router('/pairs');

    // Animation
    const ref = useRef();
    const isVisible = useVisibility(ref ?? null);
    const controls = useAnimation();

    useEffect(() => {
        if (isVisible) {
            controls.start({ opacity: 1, scale: 1, transition: { duration: 1.5, ease: 'easeIn' } });
        }
    }, [isVisible, controls]);

    return (
        <>
            {isDownloading && (
                <div className="flex absolute z-20 h-full w-full items-center justify-center bg-black bg-opacity-30 backdrop-blur-md">
                    <div className={`${conicGradient} flex flex-row gap-2 w-fit h-fit items-center p-4 rounded-lg`}>
                        <DocumentArrowDownIcon width="32" height="32" color="#FFFFFF" />
                        <p className="text-white antialiased">Downloading Resume in PDF!</p>
                    </div>
                </div>
            )}
            <SectionBase>
                <SectionDivider />
                <motion.div ref={ref} className="flex flex-col w-full h-full justify-center items-center"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={controls}
                >
                    <div className="flex flex-row gap-2 self-center items-center pt-6">
                        <div className="flex flex-col pr-4">
                            <TitleSection>Resume</TitleSection>
                            <p>Or "sneak peak"</p>
                        </div>
                        <ConicGradientButton action={handleOpenPDF}>
                            <DocumentTextIcon width="28" height="28" color="#FFFFFF" />
                        </ConicGradientButton>
                        <button onClick={handleDownloadPDF}>
                            <DocumentArrowDownIcon width="42" height="42" color="#FFFFFF" className={`${conicGradient} rounded-full p-2 hover:shadow-lg hover:scale-110 shadow-sm shadow-black`} />
                        </button>
                    </div>
                </motion.div>
                <Footer />
            </SectionBase>
            <DefaultDialog open={showPDF} close={handleClosePDF}>
                <PDFContent />
            </DefaultDialog>
        </>
    )
};
