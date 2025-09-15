import express from "express";
import health from "./routes/health.js";

const app = express();
app.use(express.json());

// routes
app.get("/health", health);

// placeholder: call Phase 1 without mutating it
app.get("/phase1/ping", async (_req, res) => {
  res.json({ ok: true, note: "Wire to Phase 1 goes here" });
});

const port = process.env.PORT || 9090;
app.listen(port, () => console.log(`Phase 2 API on :${port}`));

