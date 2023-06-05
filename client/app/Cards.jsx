import Card from "./Card"
import Slider from "./Slider"

export default function Cards(props) {
    return (
        <Slider>
            <section className="flex flex-row">
                <Card displayOn={props} />
                <Card displayOn={props} />
                <Card displayOn={props} />
                <Card displayOn={props} />
                <Card displayOn={props} />
            </section>
        </Slider>
    )
}