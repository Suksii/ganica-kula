import { motion } from 'framer-motion';
import ganicaKula from "../assets/ganica-kula.mp4";

const VideoComponent = () => {
    return (
        <motion.video initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="px-[12px]"
            controls>
            <source src={ganicaKula} type="video/mp4" />
        </motion.video>
    )
}

export default VideoComponent;