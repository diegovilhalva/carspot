export default async function DashboardLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return(
        <div className="w-full">
            <main>{children}</main>
        </div>
    )
}