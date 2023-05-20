import NavBar from "./NavBar";

export default function Header() {

    let links = [{ text: "Inicio", link: "" },
    { text: "En vivo", link: "live" },
    { text: "Hoy", link: "today" },
    { text: "Iniciar sesion", link: "login" }]

    return (
        <header>
            <span>Logo</span>
            <NavBar props={links} />
        </header>
    );
}
