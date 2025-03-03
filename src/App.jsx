import { useState } from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import FeaturedShoes from './Components/FeaturedShoes'
import Products from './Components/Products'
import Footer from './Components/Footer'
function App() {
  const [cart, setCart] = useState([]);

  // Function to add product to cart
  const addToCart = (product) => {
      setCart([...cart, product]);  // Adding products to cart
  };
  return (
    <>
   <Navbar cart={cart} />
    <Hero />
    <FeaturedShoes />
    <div className="mt-20"> {/* Adjust margin to avoid overlap with fixed navbar */}
                <Products addToCart={addToCart} />
            </div>
            <Footer/>
    </>
  )
}

export default App
