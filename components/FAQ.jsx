"use client"

import { useState } from "react"

export default function FAQ(){

const faqs=[
{
q:"Is piles treatment painful?",
a:"No, Ayurvedic treatment is minimally invasive and safe."
},
{
q:"How long does treatment take?",
a:"Most patients recover within 1–2 weeks depending on condition."
},
{
q:"Do I need surgery?",
a:"Many cases can be treated without surgery using Ayurvedic methods."
}
]

const [open,setOpen]=useState(null)

return(

<section className="bg-gray-50 py-24 px-6">

<div className="max-w-3xl mx-auto">

<h2 className="text-3xl font-bold text-center">
Frequently Asked Questions
</h2>

<div className="mt-10 space-y-4">

{faqs.map((faq,index)=>(
<div key={index} className="bg-white rounded-lg shadow">

<button
className="w-full text-left p-4 font-semibold"
onClick={()=>setOpen(open===index?null:index)}
>
{faq.q}
</button>

{open===index && (
<p className="px-4 pb-4 text-gray-700">
{faq.a}
</p>
)}

</div>
))}

</div>

</div>

</section>

)

}