# ⚙️ CHAINRAILS™ Phase 2  
**Goal:** Extend Phase 1 rails with compliance-native checks, continuity (RVRs), and ACE monitoring — without touching Phase 1.

---

## 🌉 How this repo interacts with Phase 1
- Consumes Phase 1 API at `PHASE1_BASE_URL`
- Adds pre-settlement KYC/AML checks + RVR anchoring
- Exposes its own API for ACE + dashboards

---

## 🚀 Quick start
1. Copy `.env.example` → `.env` and fill values.  
2. Run locally:
   ```bash
   npm install
   npm run dev
Health check:

http
Copy code
GET /health → { "status": "ok", "phase": 2 }
⚙️ Env
env
Copy code
PHASE1_BASE_URL=http://localhost:8080
XRPL_ENDPOINT=wss://s.altnet.rippletest.net:51233
ACE_WEBHOOK_URL=http://localhost:9090/webhook
📑 Notes
Phase 1 = settlement engine.

Phase 2 = compliance + continuity + ACE.

Both can stay in separate repos until a monorepo decision is made.

Designed to be modular: you can run Phase 2 side-by-side with Phase 1, or link via APIs only.

📂 Documentation
📜 Phase 2 Scope

🧱 Tech Stacks


