function Team() {
  const members = [
    {
      name: "GOULLA PADMA REDDY",
      role: "Chairman",
    },
    {
      name: "GOULLA VENKATRAM REDDY",
      role: "Founder",
    },
    {
      name: "GOULLA SUDARSHAN REDDY",
      role: "Chief Executive Officer",
    },
    {
      name: "GOULLA GOVINDA REDDY",
      role: "Director - Operations",
    },
    {
      name: "KOTHAKAPU VENKAT REDDY",
      role: "Director - Strategic Development",
    },
    {
      name: "K. HARIPRIYA",
      role: "Human Resources Executive",
    },
    {
      name: "S. ARAVIND",
      role: "Head of Technology & Digital Solutions",
    },
    {
      name: "S. GANESH",
      role: "Operations & Project Manager",
    },
  ];

  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Leadership Team
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md text-center"
            >
              <div className="w-20 h-20 bg-[#020B35] rounded-full mx-auto mb-4"></div>

              <h3 className="font-bold text-lg">
                {member.name}
              </h3>

              <p className="text-gray-600 mt-2">
                {member.role}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Team;