import Navbar from "@/components/Navbar";
import {  getLoggedInUser } from "@/lib/appwrite";
import { redirect } from "next/navigation";

export default async function DashboardLayout({children}: Readonly<{children: React.ReactNode;}>) {
    const user = await getLoggedInUser()
    if(!user) redirect("/")
    return(
        <div className="w-full">
            <div className="flex flex-col w-full h-auto">
            <Navbar/>
            <main>{children}</main>
            </div>
        </div>
    )
}