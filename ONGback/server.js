import express from "express";
import openSourceCardsRouter from "./routes/openSourceCards.js";

const app = express();

app.use(express.json());

app.use("/api/openSourceCards", openSourceCardsRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
