export default function Hero(){

return(

<section className="bg-green-50 py-20">

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

<div>

<h1 className="text-4xl font-bold text-gray-900">
Advanced Ayurvedic Treatment
</h1>

<p className="mt-4 text-gray-700">
Specialized treatment for Piles, Fissure and Fistula
by Dr. Gaurav Sharma.
</p>

<div className="mt-6 flex gap-4">

<a
href="/appointment"
className="bg-green-600 text-white px-6 py-3 rounded-lg"
>
Book Appointment
</a>

<a
href="https://wa.me/919309133423"
className="border border-green-600 text-green-600 px-6 py-3 rounded-lg"
>
WhatsApp Chat
</a>

</div>

</div>

<img
src="/clinic.jpg"
className="rounded-xl shadow-lg"
/>

</div>

</section>

)

}