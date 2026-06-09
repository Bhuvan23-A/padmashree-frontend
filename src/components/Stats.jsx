function Stats() {
  const stats = [
    { value: "2025", label: "Founded" },
    { value: "5000+", label: "Employees" },
    { value: "100+", label: "Projects Handled" },
    { value: "99%", label: "Quality Commitment" },
  ];

  return (
    <section className="bg-slate-100 py-20">

      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-4 gap-8 text-center">

          {stats.map((item, index) => (
            <div key={index}>
              <h3 className="text-5xl font-bold text-[#020B35]">
                {item.value}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;