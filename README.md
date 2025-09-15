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
.env.example

ini
Copy code
PHASE1_BASE_URL=http://localhost:8080
XRPL_ENDPOINT=wss://s.altnet.rippletest.net:51233
ACE_WEBHOOK_URL=http://localhost:9090/webhook
package.json

json
Copy code
{
  "name": "chainrails-phase-2",
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "node --watch ./dist/index.js",
    "build": "tsc",
    "start": "node ./dist/index.js"
  },
  "dependencies": {
    "express": "^4.19.2",
    "axios": "^1.7.2"
  },
  "devDependencies": {
    "typescript": "^5.4.0"
  }
}
src/index.ts

ts
Copy code
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
src/routes/health.ts

ts
Copy code
import { Request, Response } from "express";
export default function (_req: Request, res: Response) {
  res.json({ status: "ok", phase: 2 });
}
docs/PHASE2_SCOPE.md

md
Copy code
# Phase 2 Scope
- Compliance-first pipeline (KYC/AML pre-checks)
- RVR (Resurrection Verification Records) anchoring
- ACE (Autonomous Covenant Executor) monitors + enforces
- Dashboards + alerts
- Benchmarks + reports
