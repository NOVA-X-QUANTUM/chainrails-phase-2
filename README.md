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
