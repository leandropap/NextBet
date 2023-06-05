import "../app/globals.css"
import Header from "@/app/Header";
import Sidebar from "@/app/Sidebar";


export default function Layout({ children }) {

    return (
        <>
            <Header />
            <div className="flex flex-row my-5">
                <Sidebar />
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}