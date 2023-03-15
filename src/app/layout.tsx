import './globals.css'
import React from "react";
import Header from "@/app/components/common/Header";

export const metadata = {
  title: 'TextMe',
  description: 'TextMe app is an app which allows user to communicate.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Header/>
        {children}
      </body>
    </html>
  )
}
