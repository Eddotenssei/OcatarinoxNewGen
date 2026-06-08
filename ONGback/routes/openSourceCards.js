import express from "express";
import { supabase } from "../data/db.js";

const router = express.Router();

/**
 * GET all open source cards
 */
router.get("/", async (req, res) => {
  const { data, error } = await supabase
    .from("openSourceCards")
    .select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

/**
 * POST new open source card
 */
router.post("/", async (req, res) => {
  const {
    title,
    content,
    github_url,
    image,
    programming_language,
    page_url,
  } = req.body;

  const { data, error } = await supabase
    .from("openSourceCards")
    .insert([
      {
        title,
        content,
        github_url,
        image,
        programming_language,
        page_url,
      },
    ])
    .select(); // returns inserted row

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json(data);
  console.log("OPEN SOURCE ROUTE LOADED");
});

export default router;