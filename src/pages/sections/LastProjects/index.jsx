import React, { useEffect, useRef } from 'react';
import NMlogo from '../../../assets/svgs/natural-machines-logo-white.svg';
import InnervoicesLogo from '../../../assets/images/logo.png';
import { ScrollButton } from '../../../components/Buttons/ScrollButton';
import { TitleSection } from '../../../components';
import { SectionBase } from '../components/SectionBase';
import { SectionDivider } from '../components/SectionDivider';
import { Project } from './components/project';
import { motion, useAnimation } from 'framer-motion';
import { useVisibility } from '../../../utils';

export const LastProjects = ({ goTo }) => {
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
    <SectionBase>
      <SectionDivider />
      <div className="flex flex-col w-full h-full items-center justify-center">
        <TitleSection>Lasts Projects</TitleSection>
        <div ref={ref} className="flex flex-col w-full md:w-[75%] pt-6">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={controls}
          >
            <Project
              logo={InnervoicesLogo}
              title="Innervoices AI"
              subtitle="Your personalized mental wellbeing support, anytime, anywhere."
              href="www.innervoices.ai"
              tasks="(developer + AI support) react js + next js + tailwind css + python"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={controls}
            transition={{ delay: 2 }}
          >
            <Project
              logo={NMlogo}
              title="Natural Machines"
              subtitle="3D Printing | Food, pharma and skin care."
              href="www.naturalmachines.com"
              tasks="(software developer) iot + react native + firmware (C / arduino ide) + java + angular"
            />
          </motion.div>
        </div>
      </div>
      <ScrollButton color="rgb(157,23,77)" goTo={goTo} />
    </SectionBase>
  );
};
