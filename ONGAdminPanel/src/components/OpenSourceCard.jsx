import { useState } from "react";

const initialFormData = {
  title: "",
  content: "",
  description: "",
  github_url: "",
  image: "",
  programming_language: "",
  version: "",
  released: "",
  extras: "",
};

export default function OpenSourceForm() {
  const [formData, setFormData] = useState(initialFormData);
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
          body: JSON.stringify({
            ...formData,
            released: formData.released || null,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setMessage("Project added successfully!");
      setFormData({ ...initialFormData });
    } catch (error) {
      setMessage(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl bg-[#0d1117] border border-white/10 px-4 py-3 text-white outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20";

  const labelClass = "mb-2 block font-medium text-slate-300";

  const inputs = [
    {
      label: "Title *",
      name: "title",
      type: "text",
      placeholder: "Project title",
      required: true,
    },
    {
      label: "GitHub URL",
      name: "github_url",
      type: "url",
      placeholder: "https://github.com/...",
    },
    {
      label: "Image URL",
      name: "image",
      type: "url",
      placeholder: "https://...",
    },
    {
      label: "Programming Language",
      name: "programming_language",
      type: "text",
      placeholder: "React, JavaScript, Python...",
    },
    {
      label: "Version",
      name: "version",
      type: "text",
      placeholder: "e.g. 1.0.0",
    },
    {
      label: "Release Date",
      name: "released",
      type: "date",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] px-4 py-10">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[#161b22] p-6 sm:p-10">
        <h1 className="mb-10 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-4xl">
          Open Source Projects Admin
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {inputs.map((input) => (
            <div key={input.name}>
              <label htmlFor={input.name} className={labelClass}>
                {input.label}
              </label>

              <input
                id={input.name}
                type={input.type}
                name={input.name}
                value={formData[input.name]}
                onChange={handleChange}
                placeholder={input.placeholder}
                required={input.required || false}
                className={inputClass}
              />
            </div>
          ))}

          <div>
            <label htmlFor="content" className={labelClass}>
              Content
            </label>

            <textarea
              id="content"
              name="content"
              rows={4}
              value={formData.content}
              onChange={handleChange}
              placeholder="Short project content"
              className={`${inputClass} resize-y`}
            />
          </div>

          <div>
            <label htmlFor="description" className={labelClass}>
              Description
            </label>

            <textarea
              id="description"
              name="description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              placeholder="Detailed project description"
              className={`${inputClass} resize-y`}
            />
          </div>

          <div>
            <label htmlFor="extras" className={labelClass}>
              Extras
            </label>

            <textarea
              id="extras"
              name="extras"
              rows={3}
              value={formData.extras}
              onChange={handleChange}
              placeholder="Additional features, tools, requirements, or notes"
              className={`${inputClass} resize-y`}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Project"}
          </button>
        </form>

        {message && (
          <div
            role="status"
            aria-live="polite"
            className="mt-6 rounded-xl border border-white/10 bg-[#0d1117] p-4 text-slate-300"
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}