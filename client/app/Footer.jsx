import NavBar from "./NavBar"

export default function Footer() {

    let props = [{ text: "Estadisticas", link: "stats" },
    { text: "Como empezar", link: "start" },
    { text: "Preguntas frecuntes", link: "faq" },
    { text: "Terminos y condiciones", link: "legal" },
    { text: "Politicas de privacidad", link: "privacy" }]

    return (
        <>
            <NavBar props={props} />
            <hr />
            <a>Twitter</a>
            <a>Instagram</a>
            <a>facebook</a>
            <a>YouTube</a>
            <hr />
            <p>Línea de contacto gratuita y confidencial de orientación al jugador: al 0800-666-6006 https://saberjugar.gob.ar/. El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley N 25.326.</p>
            <p> La AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.</p>
            <p>EL JUEGO COMPULSIVO ES PERJUDICIAL PARA VOS Y TU FAMILIA</p>
        </>
    )
}