import { Router } from "express";
export const router = Router();

/**
 * POST /ace/webhook
 * Body: { policyVersion, decision, reasons, correlationId }
 */
router.post("/ace/webhook", (req, res) => {
  // For demo: just acknowledge.
  // (Your real build would persist, adjust allow/hold posture, etc.)
  res.json({ ok: true, received: req.body ?? {} });
});