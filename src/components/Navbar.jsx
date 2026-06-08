import logo from "../assets/logo.jpeg";

function Navbar() {
  return (
    <nav className="bg-[#020B35] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h1 className="font-bold text-xl">
              PadmaShree Infotech Solutions
            </h1>
          </div>
        </div>

        <div className="flex gap-6">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;