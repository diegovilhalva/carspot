"use client"
import { Loader, MessageSquareText, Plus, Search } from "lucide-react"
import Logo from "./logo"
import { Input } from "./ui/input"
import { useCallback, useState } from "react"
import Link from "next/link"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import useRegisterDialog from "@/hooks/use-register-dialog"
import useLoginDialog from "@/hooks/use-login-dialog"
import useCurrentUser from "@/hooks/api/use-current-user"
import { usePathname, useRouter } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { logoutMutationFn } from "@/lib/fetcher"
import { toast } from "@/hooks/use-toast"


const Navbar = () => {
    const router = useRouter()
    const pathname = usePathname()
    const { onOpen: onRegisterOpen } = useRegisterDialog()
    const { onOpen } = useLoginDialog()
    const [searchKeyword, setSearchKeyword] = useState("")

    const { data: userData, isPending: isLoading } = useCurrentUser()
    const user = userData?.user
    const queryClient = useQueryClient()
    const { mutate, isPending } = useMutation({
        mutationFn: logoutMutationFn,
        onSuccess: () => {
            queryClient.setQueryData(["currentUser"], null)
            queryClient.invalidateQueries({
                queryKey: ["currentUser"]
            })
            router.push("/")
        },
        onError: () => {
            toast({
                title: "Logout Failed",
                description: "Please try again.",
            });
        }
    })
    const handleSell = () => {
        if (!user) {
            onOpen()
            return
        }
        router.push("/my-shop/add-listing")
    }

    const handleLogout = useCallback(() => {
        mutate()
    }, [mutate])

    const hideSearchPathname = ["/", "/my-shop/add-listing", "/profile-messages"];
    const hideNavPath = ["/my-shop", "/my-shop/add-listing", "/profile-messages"];
    return (
        <header className="w-full px-3 md:px-0 bg-primary sticky top-0 align-top z-10 h-14" style={{ boxShadow: "1px 1px 4px #50727d66", }}>
            <nav className="flex items-center h-full max-w-7xl mx-auto">
                <Logo />
                <ul className="hidden  lg:flex flex-1 items-center justify-center  mx-9 text-white/90 space-x-6">

                    <li className="flex-[0.6] hidden md:flex">
                        {!hideSearchPathname.includes(pathname) && (
                            <div className="w-full max-w-[320px] h-10 bg-white rounded-lg relative">
                                <form>
                                    <div className="flex items-center justify-between">
                                        <Input type="search" name="keyword" autoComplete="off"
                                            className="flex-1 !shadow-none h-10 text-black !ring-0 !border-0" placeholder="Type your search here" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} />
                                        <Search className="w-5 h-5 mr-2 text-gray-600" />
                                    </div>
                                </form>
                            </div>
                        )}

                    </li>
                    {!hideNavPath.includes(pathname) && (
                        <>
                            <li>
                                <Link href="/" className="text-sm font-medium">
                                    Home
                                </Link>

                            </li>
                            <li>
                                <Link href="/" className="text-sm font-medium">
                                    Services & Repair
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-sm font-medium">
                                    Pricing
                                </Link>
                            </li>
                        </>
                    )}

                </ul>
                <div className="ml-auto flex items-center space-x-4 shrink-0">
                    {isLoading || isPending ? (
                        <Loader className="w-5 h-5 animate-spin text-white" />
                    ) : !user ? (
                        <div className="flex items-center space-x-2">
                            <button className="text-sm font-extralight text-white" onClick={onOpen}>
                                Sign in
                            </button>
                            <Separator orientation="vertical" className="h-3 text-white" />
                            <button className="text-sm font-extralight text-white"
                                onClick={onRegisterOpen}>
                                Registration
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <Button
                                size="icon"
                                className="rounded-full shadow-sm !py-0
                               !bg-white !text-black
                                 "
                            >
                                <MessageSquareText />
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar role="button" className="h-9 w-9 shadow-sm">
                                        <AvatarFallback className="text-sm uppercase">
                                            {user?.name
                                                .split(" ") 
                                                .map((word:string) => word.charAt(0)) 
                                                .slice(0, 2) 
                                                .join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56" align="end" forceMount>
                                    <DropdownMenuItem onClick={() => router.push("/my-shop")} className="!cursor-pointer">
                                        My Shop
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        onClick={handleLogout}
                                        disabled={isPending}
                                        className="!cursor-pointer"
                                    >
                                        Log out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    )}

                    <Button size="default" className="!bg-[#fea03c] !px-5 !-10"
                        onClick={handleSell}>
                        <Plus />
                        Sell Car
                    </Button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar