import { useState } from "react"
import ProductsList from "../assets/images/Products"

const Product = () => {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredProducts = selectedCategory === "All"
        ? ProductsList
        : ProductsList.filter(item => item.category === selectedCategory)

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
                <div className="w-auto h-full mt-6 mb-4 md:mb-6 gap-2 flex lg:justify-center overflow-x-scroll overflow-y-hidden lg:overflow-x-hidden text-black text-sm font-poppins font-semibold no-scrollbar">
                    {
                        ["All", "Fresh Fruits", "Fresh Veggies", "Herbs & Spices", "Tropical Fruits", "Exotic Fruits"]
                            .map(category => (
                                <div key={ category } className="w-auto">
                                    <button
                                        className={ `w-[140px] h-[36px] grid place-content-center rounded-full border-none outline-none ${ selectedCategory === category ? "bg-gold" : "bg-lemonchiffon" }` }
                                        onClick={ () => setSelectedCategory(category) }
                                    >
                                        { category }
                                    </button>
                                </div>
                            ))
                    }
                </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {
                        filteredProducts.map((item) => (
                            <div key={ item.id } className="p-1 bg-lemonchiffon">
                                <div className="p-2 md:p-4">
                                    <img src={ item.img } alt={ item.img_source } className="w-full aspect-square object-contain" />
                                </div>
                                <div className="py-2 bg-ivory text-center text-black font-poppins">
                                    <p className="text-sm font-semibold">{ item.desc }</p>
                                    <div className="mt-1 mb-2 text-xs">
                                        <RatingStars rating={ item.rate } />
                                    </div>
                                    <p className="text-xs">{ new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(item.price) } / { item.unit }</p>
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