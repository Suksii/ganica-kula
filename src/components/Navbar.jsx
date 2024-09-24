const Navbar = () => {

    const navMenu = [
        {
            name: 'Header',
            ref: 'HeaderSection'
        },
        {
            name: 'Header',
            ref: 'HeaderSection'
        },
        {
            name: 'Header',
            ref: 'HeaderSection'
        },
    ]

    return (
        <div className="flex justify-end gap-20 sticky top-0">
            {navMenu.map((menu, index) => (
                <div key={index} className="hover:underline hover:underline-offset-8 cursor-pointer">
                    <p className="text-xl py-4">{menu.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Navbar;