
import { motion } from "framer-motion"
export const Animation = ({children}) => {
  return (
    <motion.div
    initial={{opacity:0,y:30}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y:-30}}
    transition={{duration:1, ease:"easeInOut"}}
    >

        {children}
    </motion.div>
  )
}
