export default function WhyChooseUs(){

const features = [
{
title:"7+ Years Experience",
desc:"Experienced Ayurvedic specialist treating piles, fissure and fistula."
},
{
title:"5000+ Patients Treated",
desc:"Hundreds of successful treatments with satisfied patients."
},
{
title:"Advanced Kshar Sutra Therapy",
desc:"Safe and effective Ayurvedic treatment technique."
},
{
title:"Modern Clinic Facilities",
desc:"Clean and comfortable clinic with modern medical support."
}
]

return(

<section className="bg-white py-24 px-6">

<div className="max-w-6xl mx-auto">

<h2 className="text-3xl font-bold text-center text-gray-900">
Why Choose Our Clinic
</h2>

<div className="grid md:grid-cols-4 gap-8 mt-12">

{features.map((item,index)=>(
<div
key={index}
className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
>

<h3 className="text-lg font-semibold text-green-700">
{item.title}
</h3>

<p className="mt-3 text-gray-700">
{item.desc}
</p>

</div>
))}

</div>

</div>

</section>

)

}