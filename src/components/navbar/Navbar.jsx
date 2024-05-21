"use client"

import { ChevronLeft, Search } from "lucide-react";

export default function Navbar({setCity, handleSearch}){
    return(
        <div className="absolute w-screen flex justify-between items-center mt-6">
            <form   
                className="flex ml-4" 
                onSubmit={handleSearch}
            >
                <ChevronLeft 
                    className="text-gray-200 hover:bg-gray-50/50 rounded-full cursor-pointer transition-all" 
                    size={40}    
                />
                <input 
                    className="bg-transparent text-white px-2 rounded-md" 
                    onChange={(e) => setCity(e.target.value)} 
                    type="text" 
                    placeholder="Enter city name..." 
                />
            </form>
            <Search 
                className="text-gray-200 hover:bg-gray-50/50 rounded-full cursor-pointer transition-all mr-6" 
                onClick={handleSearch} 
                size={35}
            />
        </div>
    )
}