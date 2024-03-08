import { motion } from 'framer-motion';


export const TypingEffect = ({ text, customStyle }) => {

    return (
        <>
         <motion.div className={customStyle ?? ''}>
         {text.split("").map((letter, index) => (
           <motion.span
             key={index}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1,  }}
             transition={{ duration: 2.4, delay: index * 0.1, repeat: Infinity }}
           >
             {letter}
           </motion.span>
         ))}
       </motion.div>
      </>
  );
};
