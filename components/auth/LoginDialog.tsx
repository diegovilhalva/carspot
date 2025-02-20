"use client"
import { useForm } from "react-hook-form"
import *  as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "@/validations/auth.validation"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import useRegisterDialog from "@/hooks/use-register-dialog"
import useLoginDialog from "@/hooks/use-login-dialog"

const LoginDialog = () => {
    const { open, onClose } = useLoginDialog()
    const { onOpen } = useRegisterDialog()

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof loginSchema>) => {

    }

    const handleRegisterOpen = () => {
        onClose()
        onOpen()
    }
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] p-8">
                <DialogHeader>
                    <DialogTitle>
                        Sign in to your account
                    </DialogTitle>
                    <DialogDescription>
                        Enter your email and password to login
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="mail@example.com"
                                            type="email"
                                            className="!h-10"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="********"
                                            type="password"
                                            className="!h-10"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                    <Button
                        size="lg"
                        className="w-full" type="submit">
                        Login
                    </Button>
                </Form>
                <div className="mt-2  flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">
                        Dont't have an account?{" "}
                        <button className="text-primary" onClick={handleRegisterOpen}>
                            Registration
                        </button>
                    </p>

                </div>
            </DialogContent>
        </Dialog>
    )
}

export default LoginDialog