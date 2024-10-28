import {lazy, Suspense} from 'react';
import ganicaKula1 from "../assets/ganica-kula-1.jpg";
import ganicaKula2 from "../assets/ganica-kula-2.jpg";
import ganicaKula3 from "../assets/ganica-kula-3.jpg";
import ganicaKula4 from "../assets/ganica-kula-4.jpg";
import ganicaKula5 from "../assets/ganica-kula-5.jpg";
import ganicaKula6 from "../assets/ganica-kula-6.jpg";
import ganicaKula7 from "../assets/ganica-kula-7.jpg";
import ganicaKula8 from "../assets/ganica-kula-8.jpg";
import ganicaKula9 from "../assets/ganica-kula-9.jpg";
import ganicaKula10 from "../assets/ganica-kula-10.jpg";
import ganicaKula11 from "../assets/ganica-kula-11.jpg";
import ganicaKula12 from "../assets/ganica-kula-12.jpg";
import ganicaKula13 from "../assets/ganica-kula-13.jpg";
import ganicaKula14 from "../assets/ganica-kula-14.jpg";
import ganicaKula15 from "../assets/ganica-kula-15.jpg";
import ganicaKula16 from "../assets/ganica-kula-16.jpg";
import ganicaKula17 from "../assets/ganica-kula-17.jpg";
import ganicaKula18 from "../assets/ganica-kula-18.jpg";
import ganicaKula19 from "../assets/ganica-kula-19.jpg";
import ganicaKula20 from "../assets/ganica-kula-20.jpg";
import ganicaKula21 from "../assets/ganica-kula-21.jpg";
import { motion } from 'framer-motion';
import Header from "../components/Header";
const VideoComponent = lazy(() => import('../components/Video'))

const GallerySection = () => {

    const gallery = [
        {
            src: ganicaKula1,
            text: 'Fotograf: Nedim Luboder',
            alt: 'Ganica Kula'
        },
        {
            src: ganicaKula2,
            text: 'Fotograf: Nedim Luboder',
            alt: 'Ganica Kula'
        },
        {
            src: ganicaKula3,
            text: 'Fotograf: Nedim Luboder',
            alt: 'Ganica Kula'
        },
        {
            src: ganicaKula4,
            text: 'Fotograf: Nedim Luboder',
            alt: 'Ganica Kula'
        },
        {
            src: ganicaKula5,
            text: 'Fotograf: Nedim Luboder',
            alt: 'Ganica Kula'
        },
        {
            src: ganicaKula6,
            text: 'Fotograf: Nedim Luboder',
            alt: 'Ganica Kula'
        },
        {
            src: ganicaKula21,
            text: 'Fotograf: Nedim Luboder',
            alt: 'Ganica Kula'
        },
        {
            src: ganicaKula8,
            text: 'Fotograf: Nedim Luboder',
            alt: 'Ganica Kula'
        },
        {
            src: ganicaKula9,
            text: 'Fotograf: Nedim Luboder',
            alt: 'Ganica Kula'
        },
        {
            src: ganicaKula10,
            text: 'Fotograf: Nedim Luboder',
            alt: 'Ganica Kula'
        },
        {
            src: ganicaKula11,
            text: 'Fotograf: Nedim Luboder',
            alt: 'Ganica Kula'
        },
        {
            src: ganicaKula12,
            text: 'Fotograf: Nedim Luboder',
            alt: 'Ganica Kula'
        },
        {
            src: ganicaKula13,
            text: 'Fotograf: Nedim Luboder',
            alt: 'Ganica Kula'
        },
        {
            src: ganicaKula14,
            text: 'Fotograf: Nedim Luboder',
            alt: 'Ganica Kula'
        },
        {
            src: ganicaKula15,
            text: 'Fotograf: Nedim Luboder',
            alt: 'Ganica Kula'
        },
        {
            src: ganicaKula16,
            text: 'Fotograf: Nedim Luboder',
            alt: 'Ganica Kula'
        },
        {
            src: ganicaKula17,
            text: 'Fotograf: Nedim Luboder',
            alt: 'Ganica Kula'
        },
        {
            src: ganicaKula18,
            text: 'Fotograf: Nedim Luboder',
            alt: 'Ganica Kula'
        },
        {
            src: ganicaKula19,
            text: 'Fotograf: Nedim Luboder',
            alt: 'Ganica Kula'
        },
        {
            src: ganicaKula20,
            text: 'Fotograf: Nedim Luboder',
            alt: 'Ganica Kula'
        },
        {
            src: ganicaKula7,
            text: 'Fotograf: Nedim Luboder',
            alt: 'Ganica Kula'
        },
    ]


    return (
        <>
            <Header title={"Galerija"} />
            <Suspense fallback={<div>Loading...</div>}>
                <VideoComponent/>
            </Suspense>
            <div className="w-full gallery">
                <div className="transition duration-500 ease-in-out transform">
                    {gallery.map((image, index) => {
                        return (
                            <motion.div key={index} className="relative"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}>
                                <img key={index} src={image.src}
                                    alt={image.alt}
                                    className="w-full object-cover py-2 hover:filter hover:brightness-75 transition duration-500 ease-in-out transform"
                                />
                                {image.text && <p className="absolute bottom-0 right-0 p-2 mb-2 bg-white bg-opacity-70 text-black font-semibold">{image.text}</p>}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default GallerySection;