"use client"

import Navbar from "@/components/navbar/Navbar";
import Weather from "@/components/weather/Weather";
import axios from "axios";
import { useState } from "react";

export default function Home(){
  const [city, setCity] = useState("")
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
    
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_KEY}`
  
  const handleSearch = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.get(url).then((response) => {
      setData(response.data)
    })
    setCity("")
    setLoading(false)
  }

  if(loading){
    return <p>Loading...</p>
  }else{
    return(
      <main className="bg-[url('/bg.jpg')] h-screen bg-cover">
        <Navbar setCity={setCity} handleSearch={handleSearch} />
        <div className="h-screen flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl">Weather</h1>
          {data.list && <Weather data={data} />}
        </div>
      </main>
    );
  }
}