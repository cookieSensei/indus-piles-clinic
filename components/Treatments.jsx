export default function Treatments() {

const treatments = [
{
title: "Piles Treatment",
desc: "Advanced Ayurvedic treatment for hemorrhoids.",
icon: "🩺"
},
{
title: "Fissure Treatment",
desc: "Effective pain relief and healing treatment.",
icon: "💊"
},
{
title: "Fistula Treatment",
desc: "Kshar Sutra therapy and modern Ayurvedic methods.",
icon: "⚕️"
}
]

return (

<section className="bg-gray-100 py-24 px-6">

<div className="max-w-6xl mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-900">
Our Treatments
</h2>

<p className="text-center text-gray-700 mt-4 max-w-2xl mx-auto">
Specialized Ayurvedic care for piles, fissure and fistula using advanced treatment techniques.
</p>

<div className="grid md:grid-cols-3 gap-8 mt-16">

{treatments.map((item,index)=>(
  
<div
key={index}
className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition"
>

<div className="text-4xl mb-4">
{item.icon}
</div>

<h3 className="text-xl font-bold text-green-700">
{item.title}
</h3>

<p className="mt-3 text-gray-700 leading-relaxed">
{item.desc}
</p>

</div>

))}

</div>

</div>

</section>

)

}