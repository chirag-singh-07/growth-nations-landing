import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 as Source_Sans_Pro } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "700", "900"],
})

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Growth Nations Web - Empowering Businesses with Modern Web Solutions",
  description:
    "Premium web development agency specializing in modern web solutions, UI/UX design, e-commerce, and digital transformation.",
  keywords: "web development, UI/UX design, e-commerce, SEO, branding, digital agency",
  authors: [{ name: "Growth Nations Web" }],
  openGraph: {
    title: "Growth Nations Web - Premium Web Development Agency",
    description: "Empowering Businesses with Modern Web Solutions",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${sourceSansPro.variable}`}>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
