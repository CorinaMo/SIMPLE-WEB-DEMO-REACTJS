import { motion } from "framer-motion";

const LoadingDot = "block w-8 h-8 bg-white rounded-full";
const LoadingContainer = "w-40 h-20 flex justify-around";

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "100%",
  },
};

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  repeat: Infinity,
  ease: "easeInOut",
};

export const LoadingAnimation = () => {
  return (
    <div
      className="pt-20 w-full flex items-center justify-center" // Tailwind classes
    >
      <motion.div
        className={LoadingContainer} 
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span
          className={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          className={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          className={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
      </motion.div>
    </div>
  );
}
