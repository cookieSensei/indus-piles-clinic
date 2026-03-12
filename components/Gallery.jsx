import Image from "next/image"

export default function Gallery(){

const images=[
"/gallery/clinic1.jpg",
"/gallery/clinic2.jpg",
"/gallery/clinic3.jpg",
"/gallery/clinic1.jpg",
"/gallery/clinic2.jpg",
"/gallery/clinic3.jpg"
]

return(

<section className="bg-white py-24 px-6">

<div className="max-w-6xl mx-auto">

<h2 className="text-3xl font-bold text-center">
Clinic Gallery
</h2>

<div className="grid md:grid-cols-3 gap-6 mt-12">

{images.map((src,index)=>(
<Image
key={index}
src={src}
width={400}
height={300}
className="rounded-lg shadow"
/>
))}

</div>

</div>

</section>

)

}