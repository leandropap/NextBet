"use client"
import Link from "next/link"

export default function Sidebar() {
    const ligas = [
        "Liga Profesional",
        "B Nacional",
        "La Liga",
        "Premier League",
        "Liga A",
        "Bundesliga",
        "Ligue 1",
        "Brasileirao",
        "MLS",
        "Champions League",
        "Copa Libertadores"
    ]

    return (
        <div className="flex flex-col py-5 pr-5">
            {ligas.map(el => {
                return (<Link key={el} href={`leagues/${el}`}
                    className=" hover:bg-green-500 py-2 pl-4 rounded-full mb-2 border-4 border-green-500  hover:border-white w-48"
                >{el}</Link>)
            })}
        </div>
    )
}