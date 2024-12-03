import { motion } from "framer-motion";

const stairsAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    }
};

//animationIndex
const reverseIndex = (index) => {
    const totalSteps = 4;
    return totalSteps - index - 1;
}

const Stairs = () => {
  return (
    <>
        {[...Array(4)].map((_, index)=>{
            return (
                <motion.div key={index} variants={stairsAnimation} initial="initial" animate="animate" exit="exit" transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                    delay: reverseIndex(index) * 0.1,
                }}
                className="h-full w-full bg-accent relative"
                />
            );
        })}
    </>
  )
}

export default Stairs