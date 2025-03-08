import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import ImagesList from "../assets/images/ImagesList"

const Contact = () => {
    const [assetsList, setAssetsList] = useState(false)

    useEffect(() => {
        if (assetsList) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [assetsList])

    return (
        <div id="contact" className="w-full bg-lemonchiffon">
            <div className="w-full max-w-screen-2xl mx-auto px-4 py-8 md:p-12 md:pb-6 lg:px-24">
                <div className="w-full flex flex-col gap-8 md:flex-row-reverse md:gap-16">
                    <div className="w-full md:pt-3 flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-0 lg:flex lg:flex-row lg:justify-end lg:gap-24 text-center md:text-left">
                        <div className="flex flex-col gap-2 text-black font-poppins">
                            <h3 className="text-lg font-semibold">Our Services</h3>
                            <p className="text-xs md:text-sm">Fresh Produce Delivery</p>
                            <p className="text-xs md:text-sm">Costumizable Orders</p>
                            <p className="text-xs md:text-sm">Subscribtion Plans</p>
                            <p className="text-xs md:text-sm">Reviews</p>
                            <p className="text-xs md:text-sm">Pricing</p>
                            <p className="text-xs md:text-sm">Press inquires</p>
                        </div>
                        <div className="flex flex-col gap-2 text-black font-poppins">
                            <h3 className="text-lg font-semibold">Contact Us</h3>
                            <p className="text-xs md:text-sm">harvestfresh@gmail.com</p>
                            <p className="text-xs md:text-sm">Groceries Harvest Fresh Jakarta, Indonesia</p>
                        </div>
                    </div>
                    <div className="md:w-[60%] lg:w-[40%] text-center md:text-left">
                        <h2 className="mb-1 font-irishgrover text-2xl md:text-3xl text-gold font-bold">
                            Harvest Fresh
                        </h2>
                        <p className="text-xs md:text-sm text-black font-poppins">
                            Start your journey to healthier eating with our convenient app for ordering farm-fresh fruits and vegetables. 
                        </p>
                        <div className="w-full mt-6 mb-12 md:mb-20 flex items-center justify-center gap-4 md:justify-start">
                            <a href="https://www.instagram.com/sanirence.gallery/" target="_blank" rel="noreferrer"  className="w-[28px] h-[28px] grid place-content-center bg-gold ">
                                <FontAwesomeIcon icon={ faFacebook } className="text-lg" />
                            </a>
                            <a href="https://www.instagram.com/sanirence.gallery/" target="_blank" rel="noreferrer"  className="w-[28px] h-[28px] grid place-content-center bg-gold ">
                                <FontAwesomeIcon icon={ faTwitter } className="text-lg" />
                            </a>
                            <a href="https://www.instagram.com/sanirence.gallery/" target="_blank" rel="noreferrer"  className="w-[28px] h-[28px] grid place-content-center bg-gold ">
                                <FontAwesomeIcon icon={ faInstagram } className="text-lg" />
                            </a>
                            <a href="https://www.instagram.com/sanirence.gallery/" target="_blank" rel="noreferrer"  className="w-[28px] h-[28px] grid place-content-center bg-gold ">
                                <FontAwesomeIcon icon={ faLinkedin } className="text-lg" />
                            </a>
                        </div>
                        <p className="text-xs md:text-sm">&copy; <span onClick={ () => setAssetsList(true) } className="cursor-pointer text-gold">Copyright</span> 2025 Sanirence</p>
                    </div>
                </div>
            </div>

            {/* assets source */}
            {
                assetsList && (
                    <div className="w-[100vw] h-[100dvh] fixed top-0 left-0 z-50">
                        <div onClick={ () => setAssetsList(false) } className="w-full h-full bg-white opacity-60"></div>
                        <div className="w-full h-full max-w-screen-lg absolute top-0 left-[50%] -translate-x-[50%] shadow-xl bg-white opacity-100 font-poppins">
                            <div className="w-full h-[80px] flex justify-center items-center gap-4 shadow-md">
                                <FontAwesomeIcon icon={ faArrowLeft } onClick={ () => { setAssetsList(false) } } className="cursor-pointer px-4 py-2 rounded-sm bg-black text-white text-xl" />
                                <h3 className="text-xl md:text-2xl text-black font-bold">Image and Asset Sources</h3>
                            </div>
                            <div className="w-full h-[calc(100dvh-80px)] p-6 md:px-12 flex flex-col gap-6 overflow-y-scroll no-scrollbar">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <a href="https://fonts.google.com/share?selection.family=Poppins" target="_blank" rel="noreferrer" className="px-6 py-4 cursor-pointer rounded-lg shadow-md bg-gray-100 font-poppins hover:shadow-none">
                                        <p className="text-lg md:text-xl font-semibold">Poppins</p>
                                        <p className="mt-1 md:mt-2 text-sm md:text-md">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9</p>
                                    </a>
                                    <a href="https://fonts.google.com/share?selection.family=Irish+Grover" target="_blank" rel="noreferrer" className="px-6 py-4 cursor-pointer rounded-lg shadow-md bg-gray-100 font-irishgrover hover:shadow-none">
                                        <p className="text-lg md:text-xl font-semibold">Irish Grover</p>
                                        <p className="mt-1 md:mt-2 text-sm md:text-md">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9</p>
                                    </a>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {
                                        ImagesList.map((item) => (
                                            <a key={ item.id } href={ item.url } target="_blank" rel="noreferrer" className="w-full aspect-square p-4 cursor-pointer rounded-lg shadow-md bg-gray-50 hover:shadow-none">
                                                <img src={ item.img } alt={ item.img_source } className="w-full h-full object-contain" />
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Contact