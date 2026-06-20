export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a14] text-gray-400 border-t border-white/10 mt-20">

      <div className="max-w-[1330px] mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="
            text-lg font-bold mb-3
            bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 
            bg-clip-text text-transparent
          ">
            Octarinox
          </h2>

          <p className="text-sm leading-relaxed">
            A collection of open-source projects, code snippets, and experiments
            built for learning and sharing.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="
            text-sm font-semibold mb-3
            bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 
            bg-clip-text text-transparent
          ">
            Contact
          </h3>

          <p className="text-sm">📍 Tbilisi, Georgia</p>
          <p className="text-sm">📧 octarinox.dev@example.com</p>
          <p className="text-sm">📞 +995 555 12 34 56</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="
            text-sm font-semibold mb-3
            bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 
            bg-clip-text text-transparent
          ">
            Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-fuchsia-400 transition">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-fuchsia-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-fuchsia-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-fuchsia-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Octarinox. All rights reserved.
      </div>
    </footer>
  );
}