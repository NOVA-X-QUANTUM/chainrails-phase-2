import { Router } from "express";
export const router = Router();

/**
 * GET /health -> {"status":"ok","phase":2}
 */
router.get("/health", (_req, res) => {
  res.json({ status: "ok", phase: 2 });
});