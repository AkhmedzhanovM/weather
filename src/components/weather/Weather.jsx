"use client"

import { MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Weather({data}){
    const date = new Date().toLocaleString().slice(0, 17)

    return(
        <div className="mt-10 bg-zinc-900 p-6 rounded-xl shadow-2xl">

            <div>
                <div className="flex">
                    <MapPin className="text-white" />
                    <h2 className="text-white">{data.city.name}</h2>
                </div>
                {/* <p className="text-zinc-400 text-sm mt-2">19 may, sn 06:20</p> */}
                {/* <p className="text-zinc-400 text-sm mt-2">{data.list[0].dt_txt}</p> */}
                <p className="text-zinc-400 text-sm mt-2">{date}</p>
            </div>

            <div className="flex items-center mt-4">
                <div className="text-white flex items-center mr-4">
                    <Image 
                        src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@4x.png`}
                        alt=""
                        width={60}
                        height={60}
                    /> 
                    <p className="text-4xl font-light">{data.list[0].main.temp.toFixed(0)}°F</p>
                </div>
                <div className="text-zinc-400 text-sm ml-4">
                    <p>{data.list[0].weather[0].description}</p>
                    <p>{data.list[0].main.temp_max.toFixed(0)}°/ {data.list[0].main.temp_min.toFixed(0)}°</p>
                    <p>Feels like {data.list[0].main.feels_like.toFixed(0)}°</p>
                </div>
            </div>

            <div>
                
            </div>

            <div className="text-center mt-4">
                <Link className="text-white bg-zinc-600 hover:bg-zinc-400 transition-all px-4 py-[4px] rounded-xl" href="https://weather.com/">More</Link>
            </div>
            
        </div>
    )
}