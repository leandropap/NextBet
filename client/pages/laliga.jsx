import RootLayout from "@/app/layout"
import { useEffect, useState } from "react"
import Header from "@/app/Header"

export default function LaLiga(props) {

    const [isMounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <RootLayout />
    )

}