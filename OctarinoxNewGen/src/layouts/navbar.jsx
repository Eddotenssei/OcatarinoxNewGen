import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <ul className="flex gap-6 items-center">
        <li>
          <Link
            to="/"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}