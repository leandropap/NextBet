"use client"
import Link from "next/link"

export default function Sidebar() {
    const ligas = [
        { name: "Liga Profesional", link: "primera" },
        { name: "B Nacional", link: "bnacional" },
        { name: "La Liga", link: "laliga" },
        { name: "Premier League", link: "premier" },
        { name: "Liga A", link: "calcio" },
        { name: "Bundesliga", link: "bundesliga" },
        { name: "Ligue 1", link: "ligue1" },
        { name: "Brasileirao", link: "brasileirao" },
        { name: "MLS", link: "mls" },
        { name: "Champions League", link: "ucl" },
        { name: "Copa Libertadores", link: "libertadores" },
    ]

    return (
        <div className="flex flex-col py-5 pr-5">
            {ligas.map(el => {
                return (<Link key={el.name} href={`${el.name}`}
                    className=" hover:bg-green-500 py-2 pl-4 rounded-full mb-2 border-4 border-green-500  hover:border-white w-48"
                >{el.name}</Link>)
            })}
        </div>
    )
}