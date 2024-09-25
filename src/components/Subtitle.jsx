const Subtitle = ({ subtitle }) => {
    return (
        <div className="relative bg-cover bg-center flex items-center justify-center">
            <div className="bg-black bg-opacity-60 p-4 rounded-lg backdrop-blur-md shadow-xl">
                <p className="text-lg text-gray-300 text-center">
                    {subtitle}
                </p>
            </div>
        </div>
    )
}

export default Subtitle;