---
title: "Smart DCA Algorithm Report"
date: "2025-12-04"
---
# Smart DCA Algorithm Report

## 1. The Philosophy: Improving Standard DCA
Dollar Cost Averaging (DCA) is the gold standard for passive investing because it removes the need to time the market. However, it suffers from a fundamental inefficiency: **it is blind.** Standard DCA deploys the exact same capital whether the market is crashing (high opportunity) or bubbling (high risk).

To solve this, we developed a "Smart DCA" logic designed to **weaponize human emotion**. Instead of a fixed amount, we use a multiplier (0.6x – 2.0x) based on the market's price tag.

### The First Iteration (V1 Logic)
The initial algorithm was built on a simple hierarchy of four technical laws:
1.  **The Law of Crisis:** If VIX > 30 or Price < 200-day Moving Average (MA200), we assume the asset is "on sale" and deploy **1.6x - 2.0x** capital.
2.  **The Law of Opportunity:** If the asset is oversold (RSI < 30 or below Bollinger Bands), we buy the dip at **1.4x**.
3.  **The Law of Trend:** If Price < 50-day Moving Average (MA50), we add **1.2x**.
4.  **The Momentum Filter:** If RSI > 70, we check the MACD Histogram. If positive, we hold standard buying (1.0x). If negative, we reduce to **0.6x**.

### Performance Baseline (V1 vs. Standard DCA)
We stress-tested this first iteration against a standard monthly DCA strategy (2020–Present). While it was profitable, the efficiency was questionable:
* **Total Profit:** **+5.2%** improvement over Standard DCA.
* **Capital Required:** It spent **137.7%** of the standard budget to achieve that small gain.
* **Risk:** It provided **negligible downside protection** (+2.5% improvement in Max Drawdown).
* **Verdict:** The V1 algorithm was effectively "Leveraged DCA." It didn't trade smarter; it simply spent more money during downtrends.

---

## 2. Critical Flaws: The "Falling Knife" Trap
While the V1 logic performs well on broad indices like **VOO** (S&P 500) which tend to recover quickly, we discovered significant vulnerabilities when applied to individual volatile assets.

The algorithm assumes *Low Price = Good Value*, triggering a "Deep Value" buy (1.6x) solely because the price is below the MA200.

**Case Studies of Failure:**
* **PayPal (PYPL):** In 2022, PYPL crashed and stayed below its MA200 for months. The V1 algorithm interpreted this as a continuous "Crisis Opportunity," aggressively doubling down (1.6x) on a dying trend.
* **ARK Innovation (ARKK):** Similarly, during a prolonged bear market, the V1 logic exhausted cash reserves early in the decline, attempting to catch a falling knife.

In these specific cases, the "Smart" V1 algorithm actually performs **worse** than Standard DCA because it heavily leverages into a losing position.

---

## 3. The Update: "Smart Impulse" (Current Algorithm)
To fix the "Falling Knife" issue and improve capital efficiency, we updated the core logic to include **Trend Confirmation** and **Confluence**.

### Key Upgrades
1.  **Deep Value Confluence:** We still hunt for prices below the MA200, but we now require **RSI < 40** to confirm the move is an oversold extreme, not just a slow death. This prevents buying falling knives like PYPL too early.
2.  **The Impulse System:** We replaced the standard MACD check with the **Elder Impulse System**.
    * **Green Bars:** Rising Momentum + Rising Inertia (Hold 1.0x).
    * **Blue/Red Bars:** Fading Momentum (Cut to 0.6x immediately).
    * *Benefit:* This allows us to ride winners like **NVDA** longer while cutting exposure faster when the trend weakens.

---

## 4. Final Comparison: V1 vs. Current Algorithm
I developed a custom simulation script, `compare_algo.py`, to rigorously test both strategies against a "Torture Test" portfolio (comprising VOO, QQQ, and volatile assets) from 2020 to Present.

**How `compare_algo.py` Works:**
The script simulates historical trades day-by-day, calculating not just total profit, but also risk metrics (Drawdown) and efficiency (Capital Deployment). It allows us to prove whether the extra complexity actually adds value.

### Results Comparison

| Metric | First Iteration (V1) | Current Algorithm (Impulse) | The Difference |
| :--- | :--- | :--- | :--- |
| **Alpha (Profit vs Std DCA)** | +5.2% | **+19.6%** | **4x Higher Alpha** 🚀 |
| **Capital Deployed** | 137.7% | **123.2%** | **More Efficient** 📉 |
| **Max Drawdown** | -35.1% | -36.4% | Similar Risk |
| **ROI** | 82.7% | **83.4%** | **Higher Return on Cash** |

**Conclusion:** The Current Algorithm is superior. It generates **4x the excess profit** while risking **significantly less capital**, solving the "Falling Knife" problem inherent in the first iteration.