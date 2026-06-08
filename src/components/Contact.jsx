function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Get In Touch
            </h3>

            <div className="space-y-4 text-gray-700">
              <p>📧 info@padmashreeinfotech.com</p>
              <p>📞 +91 XXXXX XXXXX</p>
              <p>📍 Hyderabad, Telangana, India</p>
            </div>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border p-3 rounded-lg"
            />

            <button
              className="bg-[#020B35] text-white px-6 py-3 rounded-lg"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;