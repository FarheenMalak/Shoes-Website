import React, { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when user scrolls down 300px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {/* Social Icons Section */}
            <div className="flex gap-10 justify-items-start items-center px-6 py-4 ">
                <span className="text-sm">Follow Shoose</span>
                <div className="flex space-x-4 text-xl">
                    <FaFacebookF className="cursor-pointer hover:text-gray-900" />
                    <FaInstagram className="cursor-pointer hover:text-gray-900" />
                    <FaLinkedinIn className="cursor-pointer hover:text-gray-900" />
                </div>
            </div>

            {/* Back to Top Button */}
            <div className="flex justify-end px-6">
                {isVisible && (
                    <button onClick={scrollToTop} className="flex items-center space-x-2 border px-4 py-2 text-sm font-semibold hover:bg-gray-200">
                        <IoIosArrowUp />
                        <span>Back to top</span>
                    </button>
                )}
            </div>

            <footer className="bg-gray-100 text-gray-700 mt-20">
                {/* Footer Links Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
                    {footerData.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-lg mb-2">{section.title}</h3>
                            <ul className="space-y-1 text-sm">
                                {section.links.map((link, idx) => (
                                    <li key={idx} className="hover:underline cursor-pointer">
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t gap-5 mt-4 px-6 py-4 text-xs flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center space-x-2">
                        <span>🌍 English (Pakistan)</span>
                        <input type="checkbox" className="toggle" />
                        <span>Your Privacy Choices</span>
                    </div>
                    <div className="flex text-left gap-5 justify-items-start flex-col md:flex-row space-x-4">
                        {["Customer Support", "Privacy Policy", "Terms of Service", "Returns & Refunds", "FAQ"].map(
                            (item, idx) => (
                                <span key={idx} className="cursor-pointer hover:underline">
                                    {item}
                                </span>
                            )
                        )}
                    </div>
                    <span>© Shoose 2025 || Developed by Farheen Malak</span>
                </div>
            </footer>
        </>
    );
};

// Footer Data (Shoe E-commerce Relevant Links)
const footerData = [
    {
        title: "Shop",
        links: ["Men's Shoes", "Women's Shoes", "Kids' Shoes", "New Arrivals", "Best Sellers", "Sale"],
    },
    {
        title: "Customer Service",
        links: ["Order Tracking", "Shipping Information", "Returns & Exchanges", "FAQs", "Contact Us"],
    },
    {
        title: "About Us",
        links: ["Our Story", "Sustainability", "Careers", "Press", "Partnerships"],
    },
    {
        title: "Categories",
        links: ["Sneakers", "Formal Shoes", "Sandals", "Boots", "Running Shoes", "Accessories"],
    },
    {
        title: "Legal",
        links: ["Privacy Policy", "Terms & Conditions", "Cookies Policy", "Refund Policy"],
    },
];

export default Footer;
