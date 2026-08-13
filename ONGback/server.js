import "dotenv/config";
import express from "express";
import openSourceCardsRouter from "./routes/openSourceCards.js";
import blogsRouter from "./routes/blogs.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/openSourceCards", openSourceCardsRouter);
app.use("/api/blogs", blogsRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});