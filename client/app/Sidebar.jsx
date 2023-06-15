import Link from "next/link"

export default function Sidebar() {

    let ligas = [{ name: "La Liga", link: "laliga", img: "" },
    { name: "Premier League", link: "premier", img: "" },
    { name: "Liga A", link: "calcio", img: "" },
    { name: "Bundesliga", link: "bundesliga", img: "" },
    { name: "Ligue 1", link: "ligue1", img: "" },
    { name: "Champions League", link: "ucl", img: "" },
    { name: "Copa Libertadores", link: "libertadores", img: "" }]

    return (
        <div className="flex flex-col py-5 ">
            {ligas.map(el => {
                return (<Link key={el.name} href={el.link}
                    className=" hover:bg-green-500 py-2 pl-4 rounded-full mb-2 border-4 border-green-500  hover:border-white w-48"
                >{el.name}</Link>)
            })}
        </div>
    )
}