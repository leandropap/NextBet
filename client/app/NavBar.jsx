export default function NavBar(props) {

    return (

        <div class="flex justify-evenly">
            {props.props.map(el => {
                return (
                    <a href={el.link} class="hover:bg-blue-500 hover:rounded-lg px-10">
                        {el.text}
                    </a>
                )
            })}
        </div>
    )
}