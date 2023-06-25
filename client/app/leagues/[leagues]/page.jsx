"use client"
import { useParams } from 'next/navigation'

export default function League({ params }) {
    console.log(params)

    return (
        <container className="flex flex-col items-center">
            <h1 className="text text-3xl">{params.leagues}</h1>
            <h1>Tabla de posiciones</h1>
            <span>Aqui va la tabla de posiciones</span>
            <h1>Goleadores</h1>
            <span>Aqui va la tabla de goleadores</span>
            <h1>Cronograma</h1>
            <span>Aqui se muestran los proximos partidos</span>
        </container>
    )
}
