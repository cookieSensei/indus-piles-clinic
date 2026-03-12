export default function DoctorCard() {

return (

<section className="py-20 px-6 bg-white">

<div className="max-w-4xl mx-auto text-center">

<h2 className="text-3xl font-bold text-gray-900">
Meet Our Doctor
</h2>

<div className="mt-10 bg-gray-50 p-10 rounded-xl shadow-md">

<img
src="/doctor.jpg"
className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-green-500"
/>

<h3 className="text-2xl font-semibold mt-6 text-gray-900">
Dr. Gaurav Sharma
</h3>

<p className="text-green-600 font-medium">
Ayurvedic Specialist
</p>

<p className="mt-4 text-gray-700 max-w-xl mx-auto">
Expert in treating Piles, Fissure and Fistula using advanced Ayurvedic techniques.
</p>

</div>

</div>

</section>

)
}