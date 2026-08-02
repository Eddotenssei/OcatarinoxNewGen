import express from "express";
import { createClient } from "@supabase/supabase-js";

const router = express.Router();

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

/*
GET ALL BLOGS
GET /blogs
*/

router.get("/", async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("blogs")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) throw error;

        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/*
GET SINGLE BLOG
GET /blogs/:id
*/
router.get("/:id", async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("blogs")
            .select("*")
            .eq("id", req.params.id)
            .single();

        if (error) throw error;

        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/*
CREATE BLOG
POST /blogs
*/
router.post("/", async (req, res) => {
    try {
        const { title, author, text } = req.body;

        if (!title || !author || !text) {
            return res.status(400).json({
                message: "title, author and text are required",
            });
        }

        const { data, error } = await supabase
            .from("blogs")
            .insert({
                title,
                author,
                text,
            })
            .select()
            .single();

        if (error) throw error;

        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/*
UPDATE BLOG
PUT /blogs/:id
*/
router.put("/:id", async (req, res) => {
    try {
        const updates = {};

        if (req.body.title !== undefined) updates.title = req.body.title;
        if (req.body.author !== undefined) updates.author = req.body.author;
        if (req.body.text !== undefined) updates.text = req.body.text;

        const { data, error } = await supabase
            .from("blogs")
            .update(updates)
            .eq("id", req.params.id)
            .select()
            .single();

        if (error) throw error;

        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/*
DELETE BLOG
DELETE /blogs/:id
*/
router.delete("/:id", async (req, res) => {
    try {
        const { error } = await supabase
            .from("blogs")
            .delete()
            .eq("id", req.params.id);

        if (error) throw error;

        res.json({
            message: "Blog deleted successfully",
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;