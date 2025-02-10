import img from "../assets/images/img-home.png"

const Home = () => {
    return (
        <div id="home" className="w-full bg-lemonchiffon">
            <div className="w-full max-w-screen-2xl mx-auto pt-28 px-4 md:pt-36 md:px-12 md:pb-[160px] lg:px-24 lg:pb-[280px] md:relative md:flex">
                <div className="w-full relative z-10">
                    <p className="text-black text-sm font-poppins font-medium tracking-wide">
                        Explore your favorite choice and order now
                    </p>
                    <h1 className="mt-2 mb-1 md:mt-1 md:mb-0 text-gold text-[48px] font-irishgrover md:text-[60px]">
                        Harvest Fresh
                    </h1>
                    <p className="w-full md:w-[60%] lg:w-[560px] text-black text-sm font-poppins font-light tracking-wider">
                        Start your journey to healthier eating with our convenient app for ordering farm-fresh fruits and vegetables. Nourish your body with the goodness of organic produce, grown without pesticides or synthetic fertilizers so from our farm to your door – your order will arrive right at your front step
                    </p>
                    <button className="w-[160px] h-[48px] mt-6 rounded-sm shadow-btn hover:shadow-none bg-gold text-black text-md font-poppins font-semibold tracking-wider">
                        Shop Now
                    </button>
                </div>
                <div className="w-full mt-4 md:mt-2 md:absolute md:bottom-0 md:right-0 md:z-0 flex justify-end">
                    <img src={ img } alt="Freepik" className="w-full md:w-auto md:h-[440px] lg:h-[600px]" />
                </div>
            </div>
        </div>
    )
}

export default Home