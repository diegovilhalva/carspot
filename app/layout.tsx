import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import RegisterDialog from "@/components/auth/RegisterDialog";
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import LoginDialog from "@/components/auth/LoginDialog";


export const metadata: Metadata = {
  title: "CarSpot",
  description: "CarSpot is a top online car marketplace where users can easily find and purchase new and used cars. With advanced filtering options and a user-friendly interface, CarSpot offers an intuitive platform for browsing vehicles, comparing prices, and making informed purchasing decisions. Explore a wide range of cars, from sedans to SUVs, all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#ebf2f7] antialiased`}
      >
        <NuqsAdapter>
          <RegisterDialog />
          <LoginDialog />
          {children}
        </NuqsAdapter>
        <Toaster />
      </body>
    </html>
  );
}
