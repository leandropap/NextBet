import Card from "./Card"

export default function Cards(props) {
    return (
        <section class="flex flex-row">
            <Card displayOn={props.displayOn} />
            <Card displayOn={props.displayOn} />
            <Card displayOn={props.displayOn} />
        </section>
    )
}