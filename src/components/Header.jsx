import { motion } from 'framer-motion'

const Header = ({ title }) => {
    return (
        <motion.div initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative bg-cover bg-center flex items-center justify-center my-8">
            <div className="bg-black bg-opacity-60 p-6 md:p-10 rounded-lg backdrop-blur-md shadow-xl">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-wider text-center">
                    {title}
                </h1>
            </div>
        </motion.div>
    )
}

export default Header;