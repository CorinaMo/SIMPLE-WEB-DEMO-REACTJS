/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Card = ({ id, content, setPair, hiddenIndex, flippedIndex }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hide, setHide] = useState(false);

  const handleClick = () => {
    setPair(content?.name, id);
  };

  useEffect(() => {
    if (flippedIndex.includes(id)) setIsFlipped(true);
    else if (!flippedIndex.includes(id)) setIsFlipped(false);
    if (hiddenIndex.includes(id)) setHide(true);
  }, [hiddenIndex, flippedIndex]);

  return (
    <button
      onClick={handleClick}>
    <motion.div 
    animate={hide ? [{ rotate: 90 }, { rotate: 180 }, { opacity: 0 }] : {}}
      whileHover={ hide ? {} : {scale: 1.1, rotate: 10 }}
      className={` ${isFlipped ? "bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 text-white" : "bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700"} cursor-pointer rounded-lg flex m-2 w-[18vw] h-[18vw] sm:w-[16vw] sm:h-[16vw] md:w-[10vw] md:h-[10vw]`}
    >
      {isFlipped && (
        <div className="flex h-full w-full justify-center items-center">
            {content?.element}
        </div>
      )}
    </motion.div>
    </button>
  );
}