import React, { useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

function Navbar({ cart, setCart }) {
    const [showCart, setShowCart] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const [formData, setFormData] = useState({ name: '', address: '', contact: '' });

    const handleCheckout = () => {
        if (cart.length === 0) return;
        setShowCart(false);
        setShowForm(true);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.address || !formData.contact) {
            alert("Please fill in all fields.");
            return;
        }
        setShowForm(false);
        setOrderConfirmed(true);
        setFormData({ name: '', address: '', contact: '' });

        setTimeout(() => {
            setOrderConfirmed(false);
            window.location.reload(); // Reload page after 3 seconds
        }, 3000);
    };

    return (
        <>
            {/* Desktop Navbar */}
            <div className='hidden fixed top-0 left-0 w-full bg-white shadow-md z-50 md:flex justify-between px-12 py-6 items-center border-b-2 border-green-500'>
                <div className='text-3xl font-bold text-[#7FC109]'>Shoose</div>
                <ul className='flex gap-8 text-lg font-semibold text-gray-700'>
                    {['Home', 'Featured Shoes', 'Products'].map((item) => (
                        <li key={item} className='cursor-pointer hover:text-green-600 transition'>{item}</li>
                    ))}
                </ul>
                <div className='relative'>
                    <IoCartOutline className='text-2xl cursor-pointer hover:text-green-600 transition' onClick={() => setShowCart(!showCart)} />
                    {cart.length > 0 && <span className='absolute top-0 right-0 bg-red-500 text-white text-xs px-2 rounded-full'>{cart.length}</span>}
                </div>
            </div>

             {/* Mobile Navbar */}
             <div className='fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between px-6 py-5 md:hidden items-center border-b-2 border-green-500'>
                <div onClick={() => setToggle(!toggle)} className='text-2xl cursor-pointer text-green-600'>
                    {toggle ? <RxCross1 /> : <FaBars />}
                </div>
                <div className='text-2xl font-bold text-[#7FC109]'>Shoose</div>
                <div className='relative'>
                    <IoCartOutline className='text-2xl cursor-pointer hover:text-green-600 transition' onClick={() => setShowCart(!showCart)} />
                    {cart.length > 0 && <span className='absolute top-0 right-0 bg-red-500 text-white text-xs px-2 rounded-full'>{cart.length}</span>}
                </div>
            </div>

            {/* Sliding Mobile Menu */}
            <div className={`fixed top-0 right-0 w-3/4 h-screen bg-white shadow-lg z-50 transform ${toggle ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
                <ul className='mt-55 justify-center flex flex-col gap-6 text-lg font-semibold text-gray-700 p-6'>
                    {['Home', 'Featured Shoes', 'Products'].map((item) => (
                        <li key={item} className='cursor-pointer hover:text-green-600 transition' onClick={() => setToggle(false)}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Cart Dropdown */}
            {showCart && (
                <div className='fixed top-16 right-6 bg-white shadow-lg p-6 rounded-lg w-80 h-96 z-50 border border-gray-300 overflow-y-auto'>
                    <div className='flex justify-between items-center border-b pb-3'>
                        <h3 className='text-lg font-semibold'>Your Cart</h3>
                        <button onClick={() => setShowCart(false)} className='text-gray-500 hover:text-red-500'>✖</button>
                    </div>
                    {cart.length > 0 ? (
                        cart.map((item, index) => (
                            <div key={index} className='flex justify-between items-center my-2 border-b pb-2'>
                                <img src={item.image} alt={item.name} className='w-16 h-16 object-cover rounded' />
                                <div>
                                    <p className='text-sm font-medium'>{item.name}</p>
                                    <p className='text-xs text-gray-500'>${item.price}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='text-sm text-gray-500 text-center mt-4'>Your cart is empty.</p>
                    )}
                    {cart.length > 0 && (
                        <button onClick={handleCheckout} className='mt-4 bg-green-600 text-white py-2 text-lg w-full rounded hover:bg-green-700 transition'>
                            Checkout
                        </button>
                    )}
                </div>
            )}

            {/* Checkout Form */}
            {showForm && (
    <div className='fixed inset-0  bg-opacity-30 flex justify-center items-center z-50 backdrop-blur-sm'>
        <div className='bg-white p-8 rounded-lg shadow-lg w-96'>
            <h2 className='text-2xl font-semibold mb-4'>Checkout</h2>
            <form onSubmit={handleFormSubmit} className='flex flex-col'>
                {['name', 'address', 'contact'].map((field) => (
                    <div key={field} className='mb-3'>
                        <label className='text-lg font-medium capitalize'>{field}</label>
                        <input type='text' name={field} value={formData[field]} onChange={(e) => setFormData({...formData, [field]: e.target.value})} className='border p-3 text-lg rounded w-full' required />
                    </div>
                ))}
                <button type='submit' className='bg-green-600 text-white py-3 mt-2 text-lg rounded hover:bg-green-700 transition'>
                    Confirm Order
                </button>
            </form>
        </div>
    </div>
)}
            {/* Order Confirmation Pop-up */}
            {orderConfirmed && (
    <div className='fixed inset-0  bg-opacity-30 flex justify-center items-center z-50 backdrop-blur-sm'>
        <div className='bg-green-500 text-white p-6 text-lg rounded-lg shadow-lg text-center w-80'>
            <p className='text-2xl font-semibold'>🎉 Your order has been confirmed!</p>
        </div>
    </div>
)}
        </>
    );
}

export default Navbar;
