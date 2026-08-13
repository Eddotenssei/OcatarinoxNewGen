import { useState } from "react";

export default function OpenSourceForm() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    github_url: "",
    image: "",
    programming_language: "",
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
      });
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] py-10 px-4">

      <div
        className="
          mx-auto max-w-4xl
          bg-[#161b22]
          border border-white/10
          rounded-3xl
          p-10
        "
      >

        <h1
          className="
            mb-10
            text-4xl
            font-bold
            text-center
            bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400
            bg-clip-text
            text-transparent
          "
        >
          Open Source Projects Admin
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >

          {[
            {
              label: "Title *",
              name: "title",
              type: "text",
              placeholder: "Project title",
            },
            {
              label: "Github URL",
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
          ].map((input) => (
            <div key={input.name}>

              <label
                className="
                  mb-2
                  block
                  font-medium
                  text-slate-300
                "
              >
                {input.label}
              </label>

              <input
                type={input.type}
                name={input.name}
                value={formData[input.name]}
                onChange={handleChange}
                placeholder={input.placeholder}
                className="
                  w-full
                  rounded-xl
                  bg-[#0d1117]
                  border border-white/10
                  px-4
                  py-3
                  text-white
                  outline-none
                  transition
                  focus:border-violet-400
                  focus:ring-2
                  focus:ring-violet-400/20
                "
              />

            </div>
          ))}

          <div>

            <label
              className="
                mb-2
                block
                font-medium
                text-slate-300
              "
            >
              Description
            </label>

            <textarea
              name="content"
              rows="5"
              value={formData.content}
              onChange={handleChange}
              placeholder="Project description"
              className="
                w-full
                rounded-xl
                bg-[#0d1117]
                border border-white/10
                px-4
                py-3
                text-white
                outline-none
                resize-none
                transition
                focus:border-violet-400
                focus:ring-2
                focus:ring-violet-400/20
              "
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              rounded-xl
              py-3
              font-semibold
              text-white
              bg-gradient-to-r
              from-violet-500
              via-fuchsia-500
              to-indigo-500
              hover:opacity-90
              transition
              disabled:opacity-50
            "
          >
            {loading ? "Adding..." : "Add Project"}
          </button>

        </form>

        {message && (
          <div
            className="
              mt-6
              rounded-xl
              border border-white/10
              bg-[#0d1117]
              p-4
              text-slate-300
            "
          >
            {message}
          </div>
        )}

      </div>

    </div>
  );
}