import "dotenv/config";
import { createClient } from "@supabase/supabase-js";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const supabase = createClient(
    process.env.VITE_SUPABASE_URL,
    process.env.VITE_SUPABASE_ANON_KEY
);

// Get projects from Supabase
const { data, error } = await supabase
    .from("openSourceCards")
    .select("*");

if (error) {
    console.error("Supabase error:", error);
    process.exit(1);
}

console.log(`Found ${data.length} projects`);

// Get the current script directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Folder where generated React files will be created
const outputDirectory = path.join(
    __dirname,
    "../src/pages/generated"
);

// Create the folder if it doesn't exist
await fs.mkdir(outputDirectory, {
    recursive: true
});

console.log("Generated folder is ready!");
const generatedRoutes = [];

function createFileName(title) {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

// Generate a React page for every project
for (const project of data) {

    // Create a unique React component name
    const componentName = `Project${project.id}`;

    // React file content
    const pageContent = `
import React from "react";

function ${componentName}() {
    return (
        <main>
            <h1>${project.title}</h1>

            <img
                src="${project.image}"
                alt="${project.title}"
            />

            <p>${project.content}</p>

            <p>
                Language: ${project.programming_language}
            </p>

            <a
                href="${project.github_url}"
                target="_blank"
                rel="noreferrer"
            >
                GitHub
            </a>

            <a
                href="${project.page_url}"
                target="_blank"
                rel="noreferrer"
            >
                Project Website
            </a>
        </main>
    );
}

export default ${componentName};
`;

    // Create the filename
const fileName = createFileName(project.title);

generatedRoutes.push(`
    {
        path: "/projects/${fileName}",
        element: <Project${project.id} />
    }
`);

const filePath = path.join(
    outputDirectory,
    `${fileName}.jsx`
);

    // Write the file
    await fs.writeFile(
        filePath,
        pageContent,
        "utf8"
    );

console.log(`Generated: ${fileName}.jsx`);
}

const imports = data
    .map((project) => {
        const fileName = createFileName(project.title);

        return `import Project${project.id} from "./${fileName}.jsx";`;
    })
    .join("\n");

const routesFile = `
import React from "react";

${imports}

export const generatedRoutes = [
    ${generatedRoutes.join(",\n")}
];
`;

const routesPath = path.join(
    outputDirectory,
    "generatedRoutes.jsx"
);

await fs.writeFile(
    routesPath,
    routesFile,
    "utf8"
);

console.log("Generated: generatedRoutes.jsx");