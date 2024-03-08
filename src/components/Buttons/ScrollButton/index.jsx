import { motion } from "framer-motion";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export const ScrollButton = ({ color, goTo }) => {
    const [currentColor, setCurrentColor] = useState('#FFFFFF');
    useEffect(() => {
        setCurrentColor(color);
    }, [color]);

    return (
        <motion.div className="table-fixed bottom-0 self-center py-4" animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 2.5, repeat: Infinity }}>
            <button className="outline-none bg-black rounded-full p-2 bg-opacity-20" onClick={goTo}>
                <ChevronDoubleDownIcon color={currentColor} className="w-6 h-6 md:w-10 md:h-10 stroke-2 md:stroke-1" />
            </button>
        </motion.div>
    )
};