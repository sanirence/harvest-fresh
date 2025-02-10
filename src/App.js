import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Service from "./components/Service"
import Product from "./components/Product"
import About from "./components/About"
import Contact from "./components/Contact"

const App = () => {
	return (
		<div className="grid place-items-center">
			<div className="w-full relative flex flex-col overflow-x-hidden">
				<Navbar />
				<Home />
				<Service />
				<Product />
				<About />
				<Contact />
			</div>
		</div>
  	)
}

export default App