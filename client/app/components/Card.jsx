import Link from "next/link"
import Image from "next/image"

export default function Card(props) {
    console.log(props)
    const matchData = props.match

    return (
        <section className="border-4 border-green-500 rounded-3xl pt-8 pb-6 px-8 m-2 hover:scale-105">
            <Link href="match">
                <div className="flex flex-col">
                    <div className="flex flex-row -my-5">
                        <div className="flex flex-col px-5">
                            <h1>{matchData.teams.home.name}</h1>
                            <img src={matchData.teams.home.logo} width={100} height={100} className="pt-3" alt={matchData.teams.home.name} />
                            {
                                props.displayOn ? <h1 className="flex justify-center pt-3 text text-xl">
                                    {matchData.goals.home}
                                </h1> : null
                            }
                        </div>
                        <div className="flex flex-col px-5">
                            <h1>{matchData.teams.away.name}</h1>
                            <img src={matchData.teams.away.logo} width={100} height={100} className="pt-3 " alt={matchData.teams.away.name} />
                            {
                                props.displayOn ? <h1 className="flex justify-center pt-3 text text-xl">
                                    {matchData.goals.away}
                                </h1> : null
                            }
                        </div>
                    </div>
                    {
                        !props.displayOn ? <h1 className="flex justify-center pt-9 -mb-5 text text-lg ">Martes 16:30 ARG</h1> : null
                    }
                </div>
            </Link>
        </section>
    )
}