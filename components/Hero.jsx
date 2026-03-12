export default function Hero() {
  return (
    <section className="bg-green-50 py-24 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Advanced Ayurvedic Treatment
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-lg">
            Specialized treatment for <strong>Piles, Fissure and Fistula</strong> by 
            Dr. Gaurav Sharma at Indus Piles Clinic, Kanpur.
          </p>

          <a
            href="https://wa.me/919309133423"
            className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow"
          >
            Book Appointment
          </a>

        </div>

        <img
          src="/clinic.jpg"
          className="rounded-xl shadow-xl"
        />

      </div>

    </section>
  );
}