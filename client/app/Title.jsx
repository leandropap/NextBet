export default function Title(props) {
    console.log(props)

    return (
        <>
            <h1 class="text text-2xl ml-10">{props.text}</h1>
            <hr />
        </>
    )
}