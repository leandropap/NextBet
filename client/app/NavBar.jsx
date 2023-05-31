import Link from "next/link"

export default function NavBar(props) {
    return (
        <div className="flex justify-evenly">
            {props.props.map(el => {
                return (
                    <Link href={el.link} className="hover:bg-blue-500 hover:rounded-lg px-10" key={el.text}>
                        {el.text}
                    </Link>
                )
            })}
        </div>
    )
}