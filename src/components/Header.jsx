import { motion } from 'framer-motion'

const Header = ({ title }) => {
    return (
        <motion.h1 initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-semibold px-2 text-center py-10">{title}
        </motion.h1>
    )
}

export default Header;