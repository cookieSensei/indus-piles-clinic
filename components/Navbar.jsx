"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {

const [menuOpen, setMenuOpen] = useState(false)
const menuRef = useRef(null)

useEffect(() => {

function handleClickOutside(event) {
if (menuRef.current && !menuRef.current.contains(event.target)) {
setMenuOpen(false)
}
}

document.addEventListener("mousedown", handleClickOutside)

return () => {
document.removeEventListener("mousedown", handleClickOutside)
}

}, [])

return (

<nav ref={menuRef} className="sticky top-0 z-50 bg-white shadow">

<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

{/* Logo */}

<div className="flex items-center gap-3">

<Image
src="/logo.jpg"
width={45}
height={45}
alt="Indus Piles Clinic"
className="rounded-full"
/>

<span className="text-lg font-semibold text-green-700">
Indus Piles Clinic
</span>

</div>

{/* Desktop Menu */}

<div className="hidden md:flex items-center gap-8 text-gray-700">

<Link href="/">Home</Link>
<Link href="/doctor">Doctor</Link>
<Link href="/treatments">Treatments</Link>
<Link href="/contact">Contact</Link>

<a
href="https://wa.me/919309133423"
className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
>
Book Appointment
</a>

</div>

{/* Hamburger Button */}

<button
className="md:hidden text-2xl"
onClick={() => setMenuOpen(!menuOpen)}
>
☰
</button>

</div>

{/* Mobile Menu */}

{menuOpen && (

<div className="md:hidden bg-white border-t">

<div className="flex flex-col px-6 py-4 gap-4 text-gray-700">

<Link href="/" onClick={()=>setMenuOpen(false)}>Home</Link>
<Link href="/doctor" onClick={()=>setMenuOpen(false)}>Doctor</Link>
<Link href="/treatments" onClick={()=>setMenuOpen(false)}>Treatments</Link>
<Link href="/contact" onClick={()=>setMenuOpen(false)}>Contact</Link>

<a
href="https://wa.me/919309133423"
className="bg-green-600 text-white px-4 py-2 rounded-lg text-center"
>
Book Appointment
</a>

</div>

</div>

)}

</nav>

)
}