import Link from "next/link"

export default function Footer(){

return(

<footer className="bg-[#0a1a33] text-white mt-20">

<div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

{/* Clinic Info */}

<div>

<h3 className="text-lg font-semibold">
Indus Piles Clinic
</h3>

<p className="text-gray-300 mt-2">
Advanced Ayurvedic treatment for Piles, Fissure and Fistula.
</p>

</div>


{/* Quick Links */}

<div>

<h3 className="font-semibold mb-3">
Quick Links
</h3>

<ul className="space-y-2 text-gray-300">

<li>
<Link href="/" className="hover:text-white">
Home
</Link>
</li>

<li>
<Link href="/doctor" className="hover:text-white">
Doctor
</Link>
</li>

<li>
<Link href="/treatments" className="hover:text-white">
Treatments
</Link>
</li>

<li>
<Link href="/contact" className="hover:text-white">
Contact
</Link>
</li>

</ul>

</div>


{/* Contact */}

<div>

<h3 className="font-semibold mb-3">
Contact
</h3>

<p className="text-gray-300">
Indus Piles Clinic<br/>
Kalyanpur, Kanpur<br/>
Phone: 9309133423
</p>

</div>

</div>


{/* Bottom Bar */}

<div className="text-center py-4 border-t border-gray-700 text-gray-400">

© {new Date().getFullYear()} Indus Piles Clinic

</div>

</footer>

)

}