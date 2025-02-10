import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef(null)
    
    const handleScroll = () => {
        if (window.scrollY > 10) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])

    const handleMenuItemClick = () => {
        setMenuOpen(false);
    }

    return (
        <div className={`w-full fixed top-0 z-50 flex justify-center bg-lemonchiffon ${ scrolled ? 'shadow-md' : 'shadow-none' }`}>
            <div className="w-full max-w-screen-2xl mx-auto px-4 py-3 md:px-12 md:py-5 lg:px-24 flex items-center justify-between">
                <div className="w-full md:w-auto flex items-center justify-between md:flex-row-reverse md:gap-8">
                    <h2 className="font-irishgrover text-2xl md:text-3xl text-gold font-bold">
                        Harvest Fresh
                    </h2>
                    <button onClick={ toggleMenu } className="h-[36px] aspect-square grid place-items-center lg:hidden bg-black text-white rounded-md">
                        <FontAwesomeIcon icon={ faBars } className="text-xl" />
                    </button>
                </div>

                <div ref={ menuRef } className={`lg:hidden absolute top-0 right-0 w-[50%] h-[100dvh] bg-ivory ${ menuOpen ? 'block' : 'hidden' }`}>
                    <div className="py-4 px-8 flex justify-end">
                        <button onClick={ toggleMenu } className="h-[36px] aspect-square grid place-items-center lg:hidden bg-black text-white rounded-md">
                            <FontAwesomeIcon icon={ faXmark } className="text-xl" />
                        </button>
                    </div>
                    <div className="mt-12 pr-8 flex flex-col items-end gap-8 text-black text-sm font-poppins font-medium py-4">
                        <a href="#home" onClick={ handleMenuItemClick }>Home</a>
                        <a href="#service" onClick={ handleMenuItemClick }>Services</a>
                        <a href="#product" onClick={ handleMenuItemClick }>Product</a>
                        <a href="#about" onClick={ handleMenuItemClick }>Reviews</a>
                        <a href="#contact" onClick={ handleMenuItemClick }>Contact</a>
                    </div>
                </div>

                <div className="hidden lg:flex gap-12 text-black text-sm font-poppins font-medium">
                    <a href="#home">Home</a>
                    <a href="#service">Services</a>
                    <a href="#product">Product</a>
                    <a href="#about">Reviews</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="hidden md:flex gap-8 text-gold text-lg font-poppins font-bold">
                    <a href="/">Sign In</a>
                    <a href="/">Sign Up</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar