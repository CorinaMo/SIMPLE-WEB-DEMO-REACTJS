import { motion } from "framer-motion";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

export const ScrollButton = ({ color, goTo, withShadow }) => {

    return (
        <motion.div className="table-fixed bottom-0 self-center py-4" animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 2.5, repeat: Infinity }}>
            <button 
                className={`${withShadow ? 'bg-black bg-opacity-30' : ''} outline-none rounded-full p-2`}
                onClick={goTo}>
                <ChevronDoubleDownIcon color={color ?? '#FFFFFF'} className="w-6 h-6 md:w-10 md:h-10 stroke-2" />
            </button>
        </motion.div>
    )
};