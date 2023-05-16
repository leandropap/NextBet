export default function Sidebar() {

    let ligas = [{ name: "La Liga", link: "laliga", img: "" }, { name: "Premier League", link: "premier", img: "" }, { name: "Liga A", link: "calcio", img: "" }]

    return (
        <div class="flex flex-col">
            {ligas.map(el => {
                return (<a href={el.link}
                    class=" hover:bg-blue-500 py-2 px-4 rounded-full mb-2 border border-blue-500 hover:border-white"
                >{el.name}</a>)
            })}
        </div>
    )
}