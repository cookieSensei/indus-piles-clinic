export default function Footer(){

return(

<footer className="bg-gray-900 text-white mt-20">

<div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

<div>
<h3 className="text-lg font-semibold">
Indus Piles Clinic
</h3>
<p className="text-gray-400 mt-2">
Advanced Ayurvedic treatment for Piles,
Fissure and Fistula.
</p>
</div>

<div>
<h3 className="font-semibold">Quick Links</h3>

<ul className="mt-3 space-y-2 text-gray-400">
<li>Home</li>
<li>Doctor</li>
<li>Treatments</li>
<li>Contact</li>
</ul>

</div>

<div>
<h3 className="font-semibold">Contact</h3>

<p className="text-gray-400 mt-2">
Indus Piles Clinic<br/>
Kalyanpur, Kanpur<br/>
Phone: 9309133423
</p>

</div>

</div>

<div className="text-center py-4 border-t border-gray-700 text-gray-400">

© {new Date().getFullYear()} Indus Piles Clinic

</div>

</footer>

)

}