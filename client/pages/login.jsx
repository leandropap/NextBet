import RootLayout from "@/app/layout"
import { useState, useEffect } from "react"

export default function Login(props) {
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