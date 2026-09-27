import express from "express";
import { supabase } from "../data/db.js";

import { execFile } from "node:child_process";
import { promisify } from "node:util";
import path from "node:path";

const router = express.Router();

const execFileAsync = promisify(execFile);


// GET all open source cards

router.get("/", async (req, res) => {
  const { data, error } = await supabase
    .from("openSourceCards")
    .select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});


// POST new open source card

router.post("/", async (req, res) => {

    const {
        title,
        content,
        github_url,
        image,
        programming_language
    } = req.body;


    // 1. Save the project to Supabase

    const { data, error } = await supabase
        .from("openSourceCards")
        .insert([
            {
                title,
                content,
                github_url,
                image,
                programming_language
            }
        ])
        .select();


    if (error) {
        return res.status(500).json({
            error: error.message
        });
    }


    // 2. Run the frontend generator

    try {

        const generatorPath = path.resolve(
            process.cwd(),
            "../OctarinoxNewGen/scripts/generatefile.js"
        );

        console.log("Running generator:", generatorPath);


        const { stdout, stderr } = await execFileAsync(
            "node",
            [generatorPath]
        );


        if (stdout) {
            console.log(stdout);
        }

        if (stderr) {
            console.error(stderr);
        }


        console.log("Generator finished successfully.");

    } catch (generationError) {

        console.error(
            "Generator failed:",
            generationError
        );

        return res.status(500).json({
            error: "Card was created, but file generation failed.",
            project: data
        });
    }


    // 3. Tell the Admin Panel everything succeeded

    res.status(201).json(data);

});

export default router;