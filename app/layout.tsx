import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"

export const metadata = {
  title: "Indus Piles Clinic",
  description: "Ayurvedic treatment for piles, fissure and fistula",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        <main className="min-h-screen">
        {children}
        </main>

        <Footer />

        <ScrollToTop />

        </body>
    </html>
  )
}