import { Router } from "express";
export const router = Router();

/**
 * POST /bench/run?profile=usd-sgd
 */
router.post("/bench/run", (req, res) => {
  const profile = String(req.query.profile ?? "usd-sgd");
  // Return deterministic demo KPIs
  res.json({
    profile,
    started_at: new Date().toISOString(),
    kpis: {
      allow_rate: 0.82,
      median_precheck_ms: 140,
      rvr_anchor_lag_ms_p95: 9000,
      ace_alerts_24h: 3
    }
  });
});