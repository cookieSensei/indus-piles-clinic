import Hero from "../components/Hero"
import WhyChooseUs from "../components/WhyChooseUs"
import DoctorCard from "../components/DoctorCard"
import Treatments from "../components/Treatments"
import Testimonials from "../components/Testimonials"
import Gallery from "../components/Gallery"
import FAQ from "../components/FAQ"
import Map from "../components/Map"

export default function Home() {
  return (
    <div>
      <Hero />

      <WhyChooseUs />

      <DoctorCard />

      <Treatments />

      <Testimonials />

      <Gallery />

      <FAQ />

      <Map />
    </div>
  )
}