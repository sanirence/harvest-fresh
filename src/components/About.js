import { useState, useEffect } from "react"
import Reviews from "../assets/Reviews"
import doubleQuote from "../assets/images/icon-about.png"
import img from "../assets/images/img-about.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong, faArrowRightLong, faEnvelope } from "@fortawesome/free-solid-svg-icons"

const About = () => {
    const [startIndex, setStartIndex] = useState(0)
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024)

    const visibleReviews = isLargeScreen ? Reviews.slice(startIndex, startIndex + 2) : Reviews.slice(0, 2)

    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const nextReview = () => {
        if (isLargeScreen && startIndex + 2 < Reviews.length) {
            setStartIndex(startIndex + 1)
        }
    }

    const prevReview = () => {
        if (isLargeScreen && startIndex > 0) {
            setStartIndex(startIndex - 1)
        }
    }

    return (
        <div id="about" className="w-full bg-white">
            <div className="w-full max-w-screen-2xl mx-auto pt-12 pb-8 px-4 md:pt-16 md:px-12 lg:pt-12 lg:px-24">
                <div className="flex items-center gap-2">
                    <div className="w-[60px] h-[3px] hidden md:flex bg-black"></div>
                    <h2 className="text-4xl text-gold font-poppins font-bold">What Our Costumers Say <span className="text-black">About Us</span></h2>
                </div>
                <div className="w-full relative mt-8">
                    <div className="w-full h-full hidden absolute -z-0 lg:flex justify-end">
                        <img src={ img } alt="Freepik" className="scale-125 relative bottom-10" />
                    </div>
                    <div className="w-full relative z-10 flex flex-col md:flex-row gap-4 lg:grid lg:grid-cols-3">
                        {
                            visibleReviews.map((review) => (
                                <div key={ review.id } className="px-8 py-10 bg-lemonchiffon rounded-sm">
                                    <img src={ doubleQuote } alt="Designed by Freepik" className="h-[24px]" />
                                    <p className="h-[120px] my-4 text-black text-sm font-poppins font-light md:text-sm">
                                        { review.review }
                                    </p>
                                    <div className="w-full flex items-center gap-3">
                                        <div className="w-[40px] aspect-square pt-1 pb-0 overflow-hidden rounded-full bg-gray-200">
                                            <img src={ review.avatar } alt="Freepik" className="w-full h-full object-contain" />
                                        </div>
                                        <div className="font-poppins text-sm">
                                            <p className="text-black font-semibold">{ review.name }</p>
                                            <p className="text-gray-400">{ review.location }</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        {
                            isLargeScreen && (
                                <div className="hidden lg:flex items-end gap-4">
                                    <button onClick={ prevReview } disabled={ startIndex === 0 } className="px-4 py-2 rounded-sm bg-gold text-lg text-black">
                                        <FontAwesomeIcon icon={ faArrowLeftLong } />
                                    </button>
                                    <button onClick={ nextReview } disabled={ startIndex + 2 >= Reviews.length } className="px-4 py-2 rounded-sm bg-gold text-lg text-black">
                                        <FontAwesomeIcon icon={ faArrowRightLong } />
                                    </button>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="w-full mt-12 mb-4">
                    <div className="w-full max-w-[700px] mx-auto font-poppins">
                        <h3 className="text-center text-black text-4xl font-bold">
                            <span className="text-gold">Subscribe now</span> and enjoy the convenience of healthy shopping
                        </h3>
                        <p className="my-12 text-center text-bold text-lg font-medium">
                            Ordering fresh fruits and vegetables has never been easier
                        </p>
                        <div className="w-full ps-4 pe-2 py-2 md:ps-8 flex justify-between items-center shadow-input rounded-sm">
                            <div className="w-full flex gap-2 items-center">
                                <FontAwesomeIcon icon={ faEnvelope } />
                                <input placeholder="Enter your email address" className="w-full h-full pr-4 border-none focus:outline-none text-gray-600 text-md" />
                            </div>
                            <button className="px-5 py-3 md:px-12 md:py-4 rounded-sm bg-gold text-white text-sm font-semibold md:text-md">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About