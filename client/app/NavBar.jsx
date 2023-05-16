export default function NavBar(props) {

    console.log(props)

    return (

        <div class="flex justify-evenly">
            {props.props.map(el => {
                return (
                    <a href={el.link}
                        class="hover:bg-blue-500"
                    >{el.text}</a>
                )
            })}
        </div>
    )
}