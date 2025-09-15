# ⚙️ CHAINRAILS™ Phase 2  

**Goal:** Extend Phase 1 rails with compliance-native checks, continuity (RVRs), and ACE monitoring — without touching Phase 1.  

---

## 🌉 Interaction with Phase 1  
- Consumes Phase 1 API at `PHASE1_BASE_URL`.  
- Adds pre-settlement KYC/AML checks + RVR anchoring.  
- Exposes its own API for ACE + dashboards.  
- Never mutates Phase 1 logic — Phase 1 stays the single source of truth.  

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

Designed to be modular: you can run Phase 2 side-by-side or linked via APIs.

## 📚 Documentation
- [📘 Phase 2 Scope](./docs/PHASE2_SCOPE.md)
- [📕 Tech Stacks](./docs/STACKS.md)
- [🚆 Phase 1 Repo](https://github.com/YOUR-USERNAME/chainrails-phase-1)
- [🌐 XRPL Explorer](https://testnet.xrpl.org)

## 🛠 Tech Stack
- [TypeScript](https://www.typescriptlang.org/) — Strong typing  
- [Express.js](https://expressjs.com/) — API framework  
- [Axios](https://axios-http.com/) — HTTP client for Phase 1 + ACE calls  
- [XRPL.js](https://github.com/XRPLF/xrpl.js) — XRPL integration  
- [Docker](https://www.docker.com/) — Optional containerization  
- [NOVA 1000 Codex](../NOVA%201000%20Codex.pdf) — ACE governance + logic  

### 📂 Phase 1 repo (`chainrails-xrpl-mvp/README.md`)
