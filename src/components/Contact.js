import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
    return (
        <div id="contact" className="w-full bg-lemonchiffon">
            <div className="w-full max-w-screen-2xl mx-auto px-4 py-8 md:p-12 md:pb-6 lg:px-24">
                <div className="w-full flex flex-col gap-8 md:flex-row-reverse md:gap-16">
                    <div className="w-full md:pt-3 flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-0 lg:flex lg:flex-row lg:justify-end lg:gap-24 text-center md:text-left">
                        <div className="flex flex-col gap-2 text-black font-poppins">
                            <h3 className="text-lg font-semibold">Our Services</h3>
                            <button className="text-xs md:text-sm">Fresh Produce Delivery</button>
                            <button className="text-xs md:text-sm">Costumizable Orders</button>
                            <button className="text-xs md:text-sm">Subscribtion Plans</button>
                            <button className="text-xs md:text-sm">Reviews</button>
                            <button className="text-xs md:text-sm">Pricing</button>
                            <button className="text-xs md:text-sm">Press inquires</button>
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
                            <a href="https://www.instagram.com/sanirence.gallery/" className="w-[28px] h-[28px] grid place-content-center bg-gold ">
                                <FontAwesomeIcon icon={ faFacebook } className="text-lg" />
                            </a>
                            <a href="https://www.instagram.com/sanirence.gallery/" className="w-[28px] h-[28px] grid place-content-center bg-gold ">
                                <FontAwesomeIcon icon={ faTwitter } className="text-lg" />
                            </a>
                            <a href="https://www.instagram.com/sanirence.gallery/" className="w-[28px] h-[28px] grid place-content-center bg-gold ">
                                <FontAwesomeIcon icon={ faInstagram } className="text-lg" />
                            </a>
                            <a href="https://www.instagram.com/sanirence.gallery/" className="w-[28px] h-[28px] grid place-content-center bg-gold ">
                                <FontAwesomeIcon icon={ faLinkedin } className="text-lg" />
                            </a>
                        </div>
                        <p className="text-xs md:text-sm">&copy; Copyright 2025 Sanirence</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact