"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar(){

const [menuOpen,setMenuOpen] = useState(false)

return(

<nav className="sticky top-0 z-50 bg-white shadow-md">

<div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

{/* Logo */}

<div className="flex items-center gap-3">

<Image
src="/logo.jpg"
width={50}
height={50}
className="rounded-full"
alt="Indus Piles Clinic"
/>

<h1 className="text-lg font-bold text-green-700">
Indus Piles Clinic
</h1>

</div>


{/* Desktop Menu */}

<div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

<Link href="/">Home</Link>

<Link href="/doctor">Doctor</Link>

<Link href="/treatments">Treatments</Link>

<Link href="/contact">Contact</Link>

<a
href="https://wa.me/919309133423"
className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
>
Book Appointment
</a>

</div>

</div>

</nav>

)

}