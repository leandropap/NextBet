import RootLayout from "@/app/layout"
import { useEffect, useState } from "react"

export default function Match(props) {
    const [isMounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <main>
            {isMounted ? <RootLayout>
                <h1>Manchester City - Real Madrid</h1>

            </RootLayout>
                : null}
        </main>
    )
}