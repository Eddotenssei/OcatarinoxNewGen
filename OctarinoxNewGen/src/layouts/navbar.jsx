import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-10 py-5 shadow-md border-b border-white/10 flex items-center justify-between">
      {/* Brand */}

      <Link
        to="/home"
        className="
      text-2xl font-extrabold tracking-wider
      bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 
      bg-clip-text text-transparent
      "
      >
        octarinoxNewGen
      </Link>

      {/* Links */}
      <ul className="flex gap-10 items-center text-xl font-medium tracking-wide">
        <li>
          <Link
            to="/home"
            className="hover:text-fuchsia-400 transition-colors duration-200"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/aboutUs"
            className="hover:text-fuchsia-400 transition-colors duration-200"
          >
            About us
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="hover:text-fuchsia-400 transition-colors duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
