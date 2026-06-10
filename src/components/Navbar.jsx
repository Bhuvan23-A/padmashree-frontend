import logo from "../assets/logo.jpeg";

function Navbar() {
  return (
    <nav className="bg-[#020B35] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo + Company Name */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="PadmaShree Logo"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h1 className="font-bold text-xl">
              PadmaShree Infotech Solutions
            </h1>

            <p className="text-xs text-gray-300">
              Data Entry • Survey Collection • Data Processing
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6">

          <a
            href="#home"
            className="hover:text-cyan-400 transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-cyan-400 transition"
          >
            About
          </a>

          <a
            href="#services"
            className="hover:text-cyan-400 transition"
          >
            Services
          </a>

          <a
            href="#team"
            className="hover:text-cyan-400 transition"
          >
            Team
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </a>

          <a
            href="https://padmashree-employee-portal.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg font-semibold transition"
          >
            Employee Login
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;