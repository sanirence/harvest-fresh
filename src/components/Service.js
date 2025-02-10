import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import icon1 from "../assets/images/icon-service1.png"
import icon2 from "../assets/images/icon-service2.png"
import icon3 from "../assets/images/icon-service3.png"
import img from "../assets/images/img-service.png"

const Service = () => {
    return (
        <div id="service" className="w-full bg-white">
            <div className="w-full max-w-screen-2xl mx-auto pt-12 px-4 md:pt-16 md:px-12 lg:px-24">
                <div className="flex items-center gap-2">
                    <div className="w-[60px] h-[3px] hidden md:flex bg-black"></div>
                    <h2 className="text-4xl text-black font-poppins font-bold">Our <span className="text-gold">Services</span></h2>
                </div>
                <div className="w-full mt-4 md:grid md:grid-cols-3 md:gap-10">
                    <div className="w-full mt-8 md:mt-4">
                        <div className="flex items-center gap-[8px] md:flex-col md:items-start lg:flex-row lg:items-center">
                            <img src={ icon1 } alt="iconify" className="w-[48px] md:w-auto md:h-[48px] lg:w-[60px] lg:h-[60px] lg:object-contain" />
                            <h3 className="md:h-[60px] md:mt-1 md:flex lg:items-center text-2xl text-black font-poppins font-semibold">
                                Fresh Produce Delivery
                            </h3>
                        </div>
                        <div className="w-full pl-[56px] mt-1 md:mt-2 md:pl-0 lg:mt-0 lg:pt-2 lg:pl-[68px]">
                            <p className="text-sm text-bold font-poppins font-light">
                                Enjoy the convenience of having fresh fruits and vegetables delivered straight to your doorstep. We source our produce from trusted local farmers and suppliers, ensuring top quality and freshness in every order.
                            </p>
                        </div>
                    </div>
                    <div className="w-full mt-8 md:mt-4">
                        <div className="flex items-center gap-[8px] md:flex-col md:items-start lg:flex-row lg:items-center">
                            <img src={ icon2 } alt="iconify" className="w-[48px] md:w-auto md:h-[48px] lg:w-[60px] lg:h-[60px] lg:object-contain" />
                            <h3 className="md:h-[60px] md:mt-1 md:flex lg:items-center text-2xl text-black font-poppins font-semibold">
                                Customizable Orders
                            </h3>
                        </div>
                        <div className="w-full pl-[56px] mt-1 md:mt-2 md:pl-0 lg:mt-0 lg:pt-2 lg:pl-[68px]">
                            <p className="text-sm text-bold font-poppins font-light">
                                Choose exactly what you need with our user-friendly app. Whether it's a weekly stock-up or a quick top-off of essentials, you can select and customize your order to suit your preferences.
                            </p>
                        </div>
                    </div>
                    <div className="w-full mt-8 md:mt-4">
                        <div className="flex items-center gap-[8px] md:flex-col md:items-start lg:flex-row lg:items-center">
                            <img src={ icon3 } alt="iconify" className="w-[48px] md:w-auto md:h-[48px] lg:w-[60px] lg:h-[60px] lg:object-contain" />
                            <h3 className="md:h-[60px] md:mt-1 md:flex lg:items-center text-2xl text-black font-poppins font-semibold">
                                Subscription Plans
                            </h3>
                        </div>
                        <div className="w-full pl-[56px] mt-1 md:mt-2 md:pl-0 lg:mt-0 lg:pt-2 lg:pl-[68px]">
                            <p className="text-sm text-bold font-poppins font-light">
                                Simplify your shopping routine with our flexible subscription plans. Set up regular deliveries of your favorite produce. so you never run out of the essentials while saving time and effort.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:mt-0 lg:mt-0 flex flex-col lg:grid lg:grid-cols-2">
                    <div className="w-full py-8 md:py-12 lg:pb-6 flex justify-center lg:justify-start">
                        <img src={ img } alt="Freepik" className="w-full md:w-[80%] lg:w-[90%]" />
                    </div>
                    <div className="lg:pt-12 lg:flex lg:flex-col lg:justify-center text-center text-black font-poppins lg:text-left">
                        <h3 className="px-4 lg:px-0 text-xl font-semibold">
                            Simplify Your Life With Fresh Fruits And Vegetables
                        </h3>
                        <p className="mt-4 text-sm font-light">
                            Welcome to Harvest Fresh, your one-stop solution for fresh and high-quality fruits and vegetables delivered straight to your doorstep. Our mission is to provide you with the freshest produce, sourced from trusted local farmers and suppliers who share our commitment to quality, sustainability, and taste. With Harvest Fresh, eating healthy has never been easier or more enjoyable!
                        </p>
                        <div className="w-full mt-4">
                            <div className="w-full py-4 flex items-center justify-between border-b-2 text-black text-sm font-poppins font-medium tracking-wide md:text-lg">
                                <p>Fresh Fruit</p>
                                <FontAwesomeIcon icon={ faPlus } />
                            </div>
                            <div className="w-full py-4 flex items-center justify-between border-b-2 text-black text-sm font-poppins font-medium tracking-wide md:text-lg">
                                <p>Healty Vegetables</p>
                                <FontAwesomeIcon icon={ faPlus } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service