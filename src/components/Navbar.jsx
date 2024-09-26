import { useEffect, useState } from "react";

const Navbar = ({ scrollToSection }) => {

    const [isTop, setIsTop] = useState(true);

    const navMenu = [
        {
            name: 'Ganića Kula',
            ref: 'HeaderSection'
        },
        {
            name: 'Galerija',
            ref: 'GallerySection'
        },
    ]

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 96) {
                setIsTop(false)
            } else {
                setIsTop(true)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [isTop, setIsTop])

    return (
        <div className={`flex justify-end h-16 gap-20 sticky top-0 z-50 px-10 ${isTop ? 'bg-transparent' : 'bg-white text-black shadow-xl'}`}>
            {navMenu.map((menu, index) => (
                <div key={index} className="hover:underline hover:underline-offset-8 cursor-pointer" onClick={() => scrollToSection(menu.ref)}>
                    <p className="text-lg md:text-xl py-4">{menu.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Navbar;