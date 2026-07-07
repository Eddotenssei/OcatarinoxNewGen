import { useState } from "react";

export default function AdminPanel() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    github_url: "",
    image: "",
    programming_language: "",
    page_url: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      setMessage("Title is required");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch(
        "http://localhost:3000/api/openSourceCards",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setMessage("Project added successfully!");

      setFormData({
        title: "",
        content: "",
        github_url: "",
        image: "",
        programming_language: "",
        page_url: "",
      });
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-8 text-3xl font-bold text-slate-800">
          Open Source Projects Admin
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Project title"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Description
            </label>
            <textarea
              name="content"
              rows="5"
              value={formData.content}
              onChange={handleChange}
              placeholder="Project description"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Github URL */}
          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Github URL
            </label>
            <input
              type="url"
              name="github_url"
              value={formData.github_url}
              onChange={handleChange}
              placeholder="https://github.com/..."
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Programming Language */}
          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Programming Language
            </label>
            <input
              type="text"
              name="programming_language"
              value={formData.programming_language}
              onChange={handleChange}
              placeholder="React, JavaScript, Python..."
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Page URL */}
          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Page URL
            </label>
            <input
              type="text"
              name="page_url"
              value={formData.page_url}
              onChange={handleChange}
              placeholder="/project-page"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
          >
            {loading ? "Adding..." : "Add Project"}
          </button>
        </form>

        {message && (
          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4 text-blue-700">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}