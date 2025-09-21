import { Router } from "express";
export const router = Router();

/**
 * GET /rvr/:id -> demo record
 */
router.get("/rvr/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    rvr_id: id,
    phase: 2,
    timestamp: new Date().toISOString(),
    governance: {
      dcc_policy_version: "dcc-1.0.0-demo",
      decision: "allow",
      reasons: []
    },
    continuity: { state_gap_ms: 500, checkpoint_seq: 1 },
    anchors: { xrpl_tx_hash: null, merkle_root: null },
    hash: "demo_hash_not_anchored"
  });
});