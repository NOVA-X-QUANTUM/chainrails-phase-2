# ⚙️ CHAINRAILS™ Phase 2
**Goal:** extend Phase 1 rails with compliance-native checks, continuity (RVRs), and ACE monitoring — without touching Phase 1.

## How this repo interacts with Phase 1
- Consumes Phase 1 API at `PHASE1_BASE_URL`
- Adds pre-settlement KYC/AML checks + RVR anchoring
- Exposes its own API for ACE + dashboards

## Quick start
1. Copy `.env.example` to `.env` and fill values.
2. Run locally: `npm install` then `npm run dev`
3. Health check: `GET /health` → `{ status: "ok" }`

## Env
- `PHASE1_BASE_URL=` (e.g. https://phase1.example/api)
- `XRPL_ENDPOINT=`
- `ACE_WEBHOOK_URL=`

## Notes
- Phase 1 remains the source of truth for settlement.
- All Phase 2 work is here until we decide to merge to a monorepo.
