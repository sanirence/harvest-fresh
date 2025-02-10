import ProductsList from "../assets/images/Products"

const Product = () => {

    const RatingStars = ({ rating }) => {
        const fullStars = Math.floor(rating)
        const halfStar = rating % 1 >= 0.5 ? 1 : 0 
        const emptyStars = 5 - fullStars - halfStar
      
        return (
          <div className="rating">
            {[...Array(fullStars)].map((_, index) => (
              <span key={`full-${index}`} className="star full">★</span>
            ))}
            
            {halfStar === 1 && <span className="star half">★</span>}
      
            {[...Array(emptyStars)].map((_, index) => (
              <span key={`empty-${index}`} className="star empty">★</span>
            ))}
          </div>
        )
    }
      
    return (
        <div id="product" className="w-full bg-white">
            <div className="w-full max-w-screen-2xl mx-auto pt-12 px-4 md:pt-16 md:px-12 lg:px-24">
                <div className="flex items-center gap-2">
                    <h2 className="w-full text-4xl text-black text-center font-poppins font-bold">Our <span className="text-gold">Products</span></h2>
                </div>
                <div className="w-auto h-full mt-6 mb-4 md:mb-6 gap-2 flex lg:justify-center overflow-x-scroll overflow-y-hidden lg:overflow-x-hidden text-black text-sm font-poppins font-semibold">
                    <div className="w-auto">
                        <button className="w-[140px] h-[36px] grid place-content-center rounded-full bg-gold">All</button>
                    </div>
                    <div className="w-auto">
                        <button className="w-[140px] h-[36px] grid place-content-center rounded-full bg-lemonchiffon">Fresh Fruits</button>
                    </div>
                    <div className="w-auto">
                        <button className="w-[140px] h-[36px] grid place-content-center rounded-full bg-lemonchiffon">Fresh Veggie</button>
                    </div>
                    <div className="w-auto">
                        <button className="w-[140px] h-[36px] grid place-content-center rounded-full bg-lemonchiffon">Herps & Spices</button>
                    </div>
                    <div className="w-auto">
                        <button className="w-[140px] h-[36px] grid place-content-center rounded-full bg-lemonchiffon">Tropical Fruits</button>
                    </div>
                    <div className="w-auto">
                        <button className="w-[140px] h-[36px] grid place-content-center rounded-full bg-lemonchiffon">Excotic Fruits</button>
                    </div>
                </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {
                        ProductsList.map((item) => (
                            <div key={ item.id } className="p-1 bg-lemonchiffon">
                                <div className="p-2 md:p-6">
                                    <img src={ item.img } alt="Freepik" className="object-cover" />
                                </div>
                                <div className="py-2 bg-ivory text-center text-black font-poppins">
                                    <p className="text-sm font-semibold">{ item.desc }</p>
                                    <div className="mt-1 mb-2 text-xs">
                                        <RatingStars rating={item.rate} />
                                    </div>
                                    <p className="text-xs">{ new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(item.price) } / {item.unit}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Product