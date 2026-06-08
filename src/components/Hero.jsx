function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-[#020B35] to-[#7C3AED] text-white">
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">

        <h1 className="text-6xl font-bold">
          Transforming Data into
          <span className="text-cyan-300">
            {" "}Meaningful Insights
          </span>
        </h1>

        <p className="mt-8 text-xl max-w-3xl mx-auto">
          PadmaShree Infotech Solutions has been delivering
          high-quality data entry, survey collection and
          information management services since 2016.
        </p>

        <button className="mt-10 bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold">
          Explore Services
        </button>

      </div>
    </section>
  );
}

export default Hero;