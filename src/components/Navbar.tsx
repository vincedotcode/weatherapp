import React from "react";
import { triggerEmojiShower } from "../utils/emojiShower";


export default function Navbar() {

    const handleLikeClick = () => {
        triggerEmojiShower();
    };
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    <div className="flex items-center space-x-4">
                       
                        <span role="img" aria-label="sun" className="text-2xl">☀️</span>
                        <a href="#" className="text-gray-700 hover:text-gray-900 text-xl font-semibold transition duration-300 ease-in-out">
                            Weather
                        </a>
                    </div>
                
                    <div className="hidden md:flex items-center space-x-1">
                        <a href="#" className="py-4 px-2 text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out">Current Weather</a>
                    </div>
                    {/* Like Button */}
                    <button
                        onClick={handleLikeClick}
                        className="flex items-center space-x-2 py-2 px-3 bg-red-500 text-white rounded hover:bg-red-400 transition duration-300 ease-in-out"
                    >
                        <span role="img" aria-label="like" className="text-lg">👍</span>
                        <span>Like</span>
                    </button>
    
                </div>
            </div>
           
        </nav>
    );
}
