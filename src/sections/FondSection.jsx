const FontSection = () => {

    const fondLink = "https://fzm.me/v/";
    const fondLogo = "https://upload.wikimedia.org/wikipedia/commons/2/23/Coat_of_arms_of_Montenegro.svg";
    const goToFond = () => {
        console.log("Fond")
        window.open(fondLink);
    }

    return (
        <div className="hidden md:flex justify-center" onClick={goToFond}>
            <div className="flex items-center text-xl justify-center gap-3 left-2 my-6 cursor-pointer">
                <img src={fondLogo}
                     alt={"fond"}
                     className="w-12 h-12"/>
                <hr className="h-12 border-r-2 border-black"/>
                <p className="w-full">
                    <span className="font-semibold">Fond za zaštitu i ostvarivanje manjinskih prava </span>
                    Crne Gore
                </p>
            </div>
        </div>
    );
};

export default FontSection;