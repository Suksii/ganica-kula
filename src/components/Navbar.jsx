const Navbar = ({scrollToSection}) => {

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

    return (
        <div className="flex justify-end h-16 gap-20 sticky top-0 z-50 px-10">
            {navMenu.map((menu, index) => (
                <div key={index} className="hover:underline hover:underline-offset-8 cursor-pointer" onClick={() => scrollToSection(menu.ref)}>
                    <p className="text-xl py-4">{menu.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Navbar;