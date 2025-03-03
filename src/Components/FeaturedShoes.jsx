import React from 'react';

const FeaturedShoes = () => {
  const shoes = [
    { id: 1, name: "Air Max", price: "$120", image: "shoes1.png" },
    { id: 2, name: "Classic Runner", price: "$100", image: "shoes2.png" },
    { id: 3, name: "Sport Pro", price: "$140", image: "shoes3.png" },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-black mb-8 uppercase tracking-wide">Featured Shoes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="border-1 border-[#7FC109] bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <img src={shoe.image} alt={shoe.name} className="h-44 w-full md:h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{shoe.name}</h3>
            <p className="text-gray-600 text-lg font-medium">{shoe.price}</p>
            <button className="mt-4 bg-[#7FC109] text-white px-6 py-2 w-full rounded hover:bg-gray-800 transition-transform transform hover:scale-105">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedShoes;
