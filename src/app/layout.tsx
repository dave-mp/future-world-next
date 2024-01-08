import { Montserrat } from "next/font/google"
import { Header } from "app/components/shared/Header"
import { Footer } from "app/components/shared/Footer"
import "app/sass/globals.sass"

const montserrat = Montserrat({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
