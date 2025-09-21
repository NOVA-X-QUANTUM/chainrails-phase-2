import { Router } from "express";
export const router = Router();

/**
 * POST /precheck
 * Body (example):
 * {
 *   "tx_ref":"tx-123",
 *   "corridor":{"from":"US","to":"SG"},
 *   "use_case":"payroll",
 *   "state_gap_ms": 500,
 *   "prev_rvr_hash": "abc..." (optional)
 * }
 */
router.post("/precheck", async (req, res) => {
  const now = new Date().toISOString();
  const { tx_ref, corridor, use_case, state_gap_ms, prev_rvr_hash } = req.body ?? {};

  // super-light demo logic; always “allow” if from=US,to=SG and state gap < 60s
  const allow =
    corridor?.from === "US" &&
    corridor?.to === "SG" &&
    typeof state_gap_ms === "number" &&
    state_gap_ms < 60000;

  const decision = allow ? "allow" : "hold";
  const reasons = allow ? [] : ["policy_demo_condition_not_met"];
  const rvr_id = `rvr_${Math.random().toString(36).slice(2, 10)}`;
  const dcc_policy_version = "dcc-1.0.0-demo";

  // In your real build, this would persist+anchor. Here we echo a stable response.
  res.json({
    decision,
    rvr_id,
    reasons,
    snapshot: {
      tx_ref: tx_ref ?? "tx-demo",
      corridor,
      use_case,
      prev_rvr_hash: prev_rvr_hash ?? null,
      governance: { dcc_policy_version, decision, reasons, at: now }
    }
  });
});