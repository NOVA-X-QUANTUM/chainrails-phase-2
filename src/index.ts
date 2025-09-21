import "dotenv/config";
import express from "express";
import { router as healthRouter } from "./routes/health.js";
import { router as precheckRouter } from "./routes/precheck.js";
import { router as aceRouter } from "./routes/ace.js";
import { router as rvrRouter } from "./routes/rvr.js";
import { router as benchRouter } from "./routes/bench.js";

const app = express();
app.use(express.json({ limit: "1mb" }));

// Basic CORS (local demo friendliness)
app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Routes
app.use(healthRouter);
app.use(precheckRouter);
app.use(aceRouter);
app.use(rvrRouter);
app.use(benchRouter);

// Boot
const PORT = process.env.PORT ? Number(process.env.PORT) : 8082;
app.listen(PORT, () => {
  // minimal boot log for your screen recording
  console.log(`CHAINRAILS Phase 2 listening on http://localhost:${PORT}`);
});