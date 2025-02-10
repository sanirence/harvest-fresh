import doubleQuote from "../assets/images/icon-about.png"
import avatar1 from "../assets/images/avatar-about1.png"
import avatar2 from "../assets/images/avatar-about2.png"
import img from "../assets/images/img-about.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong, faArrowRightLong, faEnvelope } from "@fortawesome/free-solid-svg-icons"

const About = () => {
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
                        <div className="px-8 py-10 bg-lemonchiffon rounded-sm">
                            <img src={ doubleQuote } alt="Freepik" className="w-[40px]" />
                            <p className="my-4 text-black text-sm font-poppins font-light md:text-sm">
                                Amazing Apple Quality! I'm really happy with my apple order! The fruits were incredibly fresh, with a perfect balance of sweetness and crunch. Highly recommended
                            </p>
                            <div className="w-full flex items-center gap-3">
                                <img src={ avatar1 } alt="Freepik" />
                                <div className="font-poppins text-sm">
                                    <p className="text-black font-semibold">Putri Parker</p>
                                    <p className="text-gray-400">Depok, Indonesia</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-8 py-10 bg-lemonchiffon rounded-sm">
                            <img src={ doubleQuote } alt="Freepik" className="w-[40px]" />
                            <p className="my-4 text-black text-sm font-poppins font-light md:text-sm">
                                I ordered orange through this app, and I'm thoroughly impressed! The orange were fresh, juicy, and perfectly ripe. They arrived well-packed and the delivery was right on time.
                            </p>
                            <div className="w-full flex items-center gap-3">
                                <img src={ avatar2 } alt="Freepik" />
                                <div className="font-poppins text-sm">
                                    <p className="text-black font-semibold">Henzie Santsu</p>
                                    <p className="text-gray-400">Banten, Indonesia</p>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:flex items-end gap-4">
                            <button className="px-4 py-2 rounded-sm bg-gold text-lg text-black">
                                <FontAwesomeIcon icon={ faArrowLeftLong } />
                            </button>
                            <button className="px-4 py-2 rounded-sm bg-gold text-lg text-black">
                                <FontAwesomeIcon icon={ faArrowRightLong } />
                            </button>
                        </div>
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