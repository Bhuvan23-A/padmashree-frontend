function Services() {

  const services = [
    "Data Entry Services",
    "Survey Data Collection",
    "Data Processing",
    "Data Validation",
    "Reporting & Analytics",
    "Database Management"
  ];

  return (
    <section id="services" className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold">
                {service}
              </h3>

              <p className="mt-4 text-gray-600">
                Professional, scalable and reliable solutions
                tailored to organizational requirements.
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;