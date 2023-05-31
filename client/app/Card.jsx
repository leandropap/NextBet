import Link from "next/link"

export default function Card(props) {
    return (
        <section className="border-2 rounded-3xl pt-8 pb-6 px-8 m-2 hover:scale-105">
            <Link href="match">
                <div className="flex flex-col">
                    <div className="flex flex-row -my-5">
                        <div className="flex flex-col px-5">
                            <h1>Manchester City</h1>
                            <img src="https://i.imgur.com/BeclwOR.png" width="100px" className="pt-3" />
                            {
                                props.displayOn ? <h1 className="flex justify-center pt-3 text text-xl">4</h1> : null
                            }
                        </div>
                        <div className="flex flex-col px-5">
                            <h1>Real Madrid</h1>
                            <img src="https://i.imgur.com/kE2SLbC.png" width="80px" className="pt-3 " />
                            {
                                props.displayOn ? <h1 className="flex justify-center pt-3 text text-xl">0</h1> : null
                            }
                        </div>
                    </div>
                    {
                        !props.displayOn ? <h1 className="flex justify-center pt-10 text text-lg">Martes 16:30 ARG</h1> : null
                    }
                </div>
            </Link>
        </section>
    )
}