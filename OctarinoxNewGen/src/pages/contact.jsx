export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0a0a14] text-gray-200 flex items-center justify-center p-6">

      {/* Card */}
      <div className="w-full max-w-2xl bg-[#11111b]/60 border border-white/10 rounded-3xl p-10 shadow-xl backdrop-blur-sm">

        {/* Title */}
        <h1 className="
          text-4xl font-bold text-center mb-10
          bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 
          bg-clip-text text-transparent
        ">
          Contact Us
        </h1>

        {/* Info */}
        <div className="space-y-5 text-sm text-gray-300 mb-8">

          <div className="flex justify-between border-b border-white/10 pb-3">
            <span className="text-gray-400">Email</span>
            <span>octarinox.dev@example.com</span>
          </div>

          <div className="flex justify-between border-b border-white/10 pb-3">
            <span className="text-gray-400">Phone</span>
            <span>+995 555 12 34 56</span>
          </div>

          <div className="flex justify-between border-b border-white/10 pb-3">
            <span className="text-gray-400">Location</span>
            <span>Tbilisi, Georgia</span>
          </div>

          <div className="flex justify-between border-b border-white/10 pb-3">
            <span className="text-gray-400">Project</span>
            <span>OctarinoxNewGen</span>
          </div>

        </div>

        {/* Map */}
        <div className="w-full rounded-xl overflow-hidden border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.361768370408!2d44.7603286!3d41.7127118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473d9656f5cb9%3A0x493505cd050f7c4e!2sOctarinox!5e0!3m2!1sen!2sge!4v1781981649035!5m2!1sen!2sge"
            className="w-full h-[300px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </div>
  );
}