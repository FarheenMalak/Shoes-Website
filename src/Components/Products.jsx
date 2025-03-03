import React, { useState } from 'react';

const Products = ({ addToCart }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [maxPrice, setMaxPrice] = useState(200);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState('M');

    const products = [
        { id: 1, name: "Air Max", price: 120, category: "Running", image: "shoes1.png", description: "Comfortable running shoes with air cushion." },
        { id: 2, name: "Classic Runner", price: 100, category: "Casual", image: "shoes2.png", description: "Stylish casual shoes for everyday wear." },
        { id: 3, name: "Sport Pro", price: 140, category: "Training", image: "shoes3.png", description: "High-performance shoes for intense training." },
        { id: 4, name: "Speedster", price: 90, category: "Running", image: "shoes4.png", description: "Lightweight shoes designed for speed." },
        { id: 5, name: "Urban Sneakers", price: 110, category: "Casual", image: "shoes5.png", description: "Trendy sneakers perfect for city life." },
        { id: 6, name: "Power Lift", price: 160, category: "Training", image: "shoes6.png", description: "Sturdy shoes built for weightlifting." },
    ];

    const filteredProducts = products.filter(product => 
        (selectedCategory === 'All' || product.category === selectedCategory) && product.price <= maxPrice
    );

    return (
        <div className="flex flex-col md:flex-row min-h-screen p-6 md:p-12 bg-gray-50">
            {/* Sidebar Filters */}
            <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md mb-6 md:mb-0">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Filters</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Category</label>
                    <select 
                        className="w-full p-2 border rounded" 
                        value={selectedCategory} 
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="Running">Running</option>
                        <option value="Casual">Casual</option>
                        <option value="Training">Training</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Max Price: ${maxPrice}</label>
                    <input 
                        type="range" 
                        min="50" max="200" 
                        value={maxPrice} 
                        onChange={(e) => setMaxPrice(Number(e.target.value))} 
                        className="w-full"
                    />
                </div>
            </aside>
            
            {/* Product Cards */}
            <section className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((shoe) => (
                        <div key={shoe.id} className="max-h-[500px] flex flex-col justify-between border border-black bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                            <img src={shoe.image} alt={shoe.name} className="w-full h-56 object-cover rounded-lg mb-4" />
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{shoe.name}</h3>
                                <p className="text-gray-600 text-lg font-medium">${shoe.price}</p>
                                <button 
                                    className="mt-4 bg-black text-white px-6 py-2 w-full rounded hover:bg-gray-800 transition-transform transform hover:scale-105"
                                    onClick={() => addToCart(shoe)}
                                >
                                    Add to cart
                                </button>
                                <button onClick={() => setSelectedProduct(shoe)} className="mt-4 border-black border-1 bg-white text-black px-6 py-2 w-full rounded hover:bg-gray-800 hover:text-white transition-transform transform hover:scale-105">
                                    Details
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600 text-lg">No products found within this range.</p>
                )}
            </section>

            {/* Product Details Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md p-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
                        <button onClick={() => setSelectedProduct(null)} className="absolute top-2 right-2 text-xl bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300">&times;</button>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product Details</h2>
                        <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">{selectedProduct.name}</h3>
                        <p className="text-gray-600 text-lg font-medium">${selectedProduct.price}</p>
                        <p className="text-gray-700 mt-2">{selectedProduct.description}</p>
                        <div className="mt-4">
                            <label className="block text-gray-700 font-medium mb-2">Select Size</label>
                            <select 
                                className="w-full p-2 border rounded" 
                                value={selectedSize} 
                                onChange={(e) => setSelectedSize(e.target.value)}
                            >
                                <option value="S">Small</option>
                                <option value="M">Medium</option>
                                <option value="L">Large</option>
                                <option value="XL">Extra Large</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Products;
