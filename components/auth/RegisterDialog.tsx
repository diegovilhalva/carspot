"use client"
import { useForm } from "react-hook-form"
import *  as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { signupSchema } from "@/validations/auth.validation"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import useRegisterDialog from "@/hooks/use-register-dialog"
import useLoginDialog from "@/hooks/use-login-dialog"

const RegisterDialog = () => {
    const { open, onClose } = useRegisterDialog()
    const { onOpen } = useLoginDialog()

    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: "",
            email: "",
            shopName: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof signupSchema>) => {

    }

    const handleLoginOpen = () => {
        onClose()
        onOpen()
    }
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] p-8">
                <DialogHeader>
                    <DialogTitle>
                        Create an account
                    </DialogTitle>
                    <DialogDescription>
                        Enter your details below to register for an account.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="John Smith" className="!h-10" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
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
                            name="shopName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Shop Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Techwithemma co."
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
                        Register
                    </Button>
                </Form>
                <div className="mt-2  flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <button className="text-primary" onClick={handleLoginOpen}>
                            Sign in
                        </button>
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default RegisterDialog