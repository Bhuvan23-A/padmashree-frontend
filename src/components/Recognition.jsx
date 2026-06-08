import certificate from "../assets/startup-india-certificate.jpeg";

function Recognition() {
  return (
    <section className="py-24 bg-slate-100">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-10">
          Startup India Recognition
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
          PadmaShree Infotech Solutions is proudly recognized under the
          Startup India Initiative, reflecting our commitment to innovation,
          business excellence, and technology-driven growth.
        </p>

        <img
          src={certificate}
          alt="Startup India Certificate"
          className="rounded-xl shadow-xl mx-auto"
        />

      </div>

    </section>
  );
}

export default Recognition;