export default function Sidebar() {

    let ligas = [{ name: "La Liga", link: "laliga", img: "" },
    { name: "Premier League", link: "premier", img: "" },
    { name: "Liga A", link: "calcio", img: "" },
    { name: "Bundesliga", link: "bundesliga", img: "" },
    { name: "Ligue 1", link: "ligue1", img: "" },
    { name: "Champions League", link: "ucl", img: "" },
    { name: "Copa Libertadores", link: "libertadores", img: "" }]

    return (
        <div class="flex flex-col py-2 pr-5">
            {ligas.map(el => {
                return (<a href={el.link}
                    class=" hover:bg-blue-500 py-2 px-4 rounded-full mb-2 border border-blue-500 hover:border-white text text-"
                >{el.name}</a>)
            })}
        </div>
    )
}