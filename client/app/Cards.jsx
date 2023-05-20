import Card from "./Card"

export default function Cards() {
    return (
        <section>
            <h1 class="text text-2xl">Ultimos partidos</h1>
            <hr />
            <section className="grid auto-grid">
                <Card />
                <Card />
                <Card />
            </section>
        </section >
    )
}