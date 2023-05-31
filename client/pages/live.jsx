import RootLayout from "@/app/layout"
import { useEffect, useState } from "react"
import Header from "@/app/Header"

export default function LaLiga(props) {

    const [isMounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <>
            {isMounted ? <RootLayout>
                <h1>Manchester City - Real Madrid</h1>

            </RootLayout>
                : null}
        </>
    )
}