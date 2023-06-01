import RootLayout from "@/app/layout"
import { useEffect, useState } from "react"

export default function Match(props) {

    const data = {
        local: { name: "Manchester City", badge: "https://i.imgur.com/VRfdWvH.png" },
        visitor: { name: "Real Madrid", badge: "https://i.imgur.com/xelhFwH.png" },
        date: "27/5/23",
        result: "4 - 0",
        goals: {
            local: [{ player: "Bernardo Silva", time: "23', 37'" },
            { player: "Manuel Akanji", time: "76'" },
            { player: "Julian Alvarez", time: "90 + 1'" }],
            visitor: []
        },
        players: {
            local: [],
            visitor: []
        },
        stats: {
            local: {
                shots: 16,
                onTarget: 8,
                cornerKick: 7,
                posession: "60%",
                passes: 618,
                precision: "89%",
                fouls: 16,
                yelowCards: 3,
                redCards: 0,
                offside: 0,

            },
            visitor: {
                shots: 7,
                onTarget: 3,
                cornerKick: 3,
                posession: "40%",
                passes: 421,
                precision: "82%",
                fouls: 14,
                yelowCards: 2,
                redCards: 0,
                offside: 0,

            },
        }
    }

    return (
        <RootLayout >
            <section className="flex flex-col items-center">

                <h1 className="my-5 text text-2xl">{data.local.name} - {data.visitor.name}</h1>

                <div className="flex justify-center mb-5">
                    <img src={data.local.badge} width="100px" className="mx-40" />
                    <h1 className="text-2xl mt-10">{data.result}</h1>
                    <img src={data.visitor.badge} width="100px" className="mx-40" />
                </div>

                <section className="space-x-reverse">
                    <div className="flex flex-row justify-around">
                        <div className="mx-40">
                            {data.goals.local.map(el => {
                                return (
                                    <p>{`${el.player} ${el.time}`}</p>
                                )
                            })}
                        </div>
                        <div className="mx-40">
                            {data.goals.visitor.map(el => {
                                return (
                                    <p>{`${el.player} ${el.time}`}</p>
                                )
                            })}
                        </div>
                    </div>
                </section>

                <h1 className="my-5">Estadisticas del partido</h1>

            </section>

            <section key="stats" className="flex flex-row justify-around">

                <section>
                    {
                        Object.entries(data.stats.local).map(([key, value]) => (
                            <p key={key}>{value}</p>
                        ))
                    }
                </section>

                <div className="text text-center">
                    <p>Remates</p>
                    <p>Al arco</p>
                    <p>Tiros de esquina</p>
                    <p>Posesión</p>
                    <p>Pases</p>
                    <p>Precisión</p>
                    <p>Faltas</p>
                    <p>Tarjetas amarillas</p>
                    <p>Tarjetas rojas</p>
                    <p>Offside</p>
                </div>

                <section>
                    {
                        Object.entries(data.stats.visitor).map(([key, value]) => (
                            <p key={key}>{value}</p>
                        ))
                    }
                </section>
            </section>

        </RootLayout>

    )
}