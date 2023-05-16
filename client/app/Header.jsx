export default function Header() {

    let links = [{ text: "Inicio", link: "" }, { text: "En vivo", link: "live" }, { text: "Hoy", link: "today" }, { text: "Iniciar sesion", link: "login" }]

    return (
        <>
            <span>Logo</span>
            <div class="flex justify-evenly">
                {links.map(el => {
                    return (
                        <a href={el.link}
                            class="hover:bg-blue-500"
                        >{el.text}</a>
                    )
                })}
            </div>
        </>
    );
}
