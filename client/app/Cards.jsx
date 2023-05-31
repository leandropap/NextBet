import Card from "./Card"

export default function Cards(props) {
    return (
        <section className="flex flex-row">
            <Card displayOn={props.displayOn} />
            <Card displayOn={props.displayOn} />
            <Card displayOn={props.displayOn} />
        </section>
    )
}