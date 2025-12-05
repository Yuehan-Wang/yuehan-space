---
title: "Smart DCA Algorithm Report"
date: "2025-12-04"
---
# Smart DCA Algorithm Report

## 1. The Core Philosophy
Dollar Cost Averaging (DCA) is the gold standard for passive investing because it removes the stress of timing the market. However, it suffers from a fundamental inefficiency: **it is blind.** It deploys the exact same capital whether the market is crashing (high opportunity) or bubbling (high risk).

To address this, many investors use **"Smart DCA"**—a popular strategy that adjusts contributions based on market valuation. The goal is simple: **buy more when stocks are on sale, and buy less when they are expensive.**

**Our Tool's Mission:** While the concept is well-known, executing it manually is difficult and emotional. We built this tool to **systematize and automate** the strategy, using strict mathematical rules to "weaponize" human emotion instead of falling victim to it.

### Our Initial Implementation
Our first algorithmic approach used four simple rules to decide how much to invest:
1.  **Crisis Buying:** If the market was panicking (VIX > 30) or the price was historically cheap (below the 200-day average), the tool allocated aggressive capital (1.6x - 2.0x).
2.  **Dip Buying:** If the price took a quick dip (RSI < 30), it allocated slightly more (1.4x).
3.  **Trend Following:** If the stock was in a healthy uptrend but pulled back slightly, it added to the position (1.2x).
4.  **The Safety Check:** If the price skyrocketed too fast (RSI > 70), the tool checked momentum. If shaky, it cut spending (0.6x).

**The Baseline Result:** This logic beat standard DCA by about **5.2%**. However, it was "expensive"—often spending cash reserves too quickly during long crashes. We knew the tool needed to be smarter.

---

## 2. Why We Refined the Logic
While our initial code worked well for steady indexes like the S&P 500, we noticed it struggled with individual stocks that behave more violently. We identified three specific market behaviors where a basic Smart DCA approach fails.

### A. The "Falling Knife" Problem (e.g., PayPal, Intel)
* **The Issue:** When a stock like PayPal crashed in 2022, it stayed "cheap" (below its 200-day average) for months. The original code saw this as a nonstop sale and aggressively doubled down (1.6x) the entire way down.
* **The Lesson:** Just because a stock is cheap doesn't mean it has stopped falling. The tool needed a way to wait for a bottom.

### B. The "Rocket Ship" Problem (e.g., Nvidia, QQQ)
* **The Issue:** When a powerful stock like Nvidia goes parabolic, its RSI often stays high (> 70) for weeks. The original code would interpret this as "overbought" and cut funding too early, missing the biggest part of the rally.
* **The Lesson:** In a strong bull run, being "overbought" is a sign of strength, not a signal to sell.

### C. The "Choppy Market" Problem (e.g., Disney, Small Caps)
* **The Issue:** When a stock moves sideways, it generates noise. The tool would often get faked out—buying at the bottom of the range and getting scared at the top—without any real trend.
* **The Lesson:** We needed a filter to ignore "garbage time" in the market.

---

## 3. The Solution: "Smart Impulse"
To fix these issues, we updated the tool's core logic. We added a **"Patience Filter"** for crashes and a **"Momentum Engine"** for rallies.

### Key Upgrades
1.  **Buying with Patience (The Deep Value Fix):**
    We still hunt for prices below the 200-day average, but now the tool waits for confirmation. It effectively says: *"I see the price is low, but I won't buy heavily until the RSI drops below 40."* This simple rule prevents catching falling knives.

2.  **Riding the Wave (The Impulse System):**
    We integrated the **Elder Impulse System** into the logic. It colors every market bar based on momentum:
    * **Green Bars (Go):** The trend is accelerating. Even if the price looks "expensive," the tool maintains standard buying. This keeps us on rocket ships like Nvidia.
    * **Blue/Red Bars (Caution):** The momentum is fading or the market is chopping. The tool immediately cuts spending to save cash.

---
## 4. The Evolution of Performance

To visualize the impact of our updates, we compared all three stages of the strategy's evolution against our "Torture Test" portfolio (NVDA, PYPL, DIS) from 2020–Present.

### The 3-Way Showdown (Torture Test)

| Metric | Standard DCA (Baseline) | Smart DCA (V1) | Smart Impulse (Current) |
| :--- | :--- | :--- | :--- |
| **Total Return (ROI)** | 225.2% | 230.4% | **245.5%** |
| **Alpha (Excess Return)** | — | +5.2% | **+20.3%** |
| **Max Drawdown** | -37.7% | **-35.1%** | -37.6% |
| **Capital Deployed** | 100% | 137.7% | **120.5%** |

### Analysis of the Evolution
1.  **Standard DCA (The Baseline):**
    It performed respectably but blindly. It bought PayPal all the way down and Nvidia all the way up without distinction.

2.  **Smart DCA V1 (The "Blunt Instrument"):**
    * **Result:** It beat the market by **5.2%**, but at a heavy cost.
    * **The Flaw:** It deployed **137% capital** (aggressive leverage) to achieve that small gain. It was working harder, not smarter.

3.  **Smart Impulse (The Final Form):**
    * **Result:** It beat the market by **20.3%**—a massive jump in performance.
    * **The Fix:** Notice the **Capital Deployed dropped to 120%**. By adding the "Falling Knife Guard," the algorithm stopped wasting money on crashing stocks (like PayPal), saving that cash to deploy more effectively into winners.
    * **Verdict:** It generated **4x the Alpha of V1** while using **significantly less capital**.

---

### Comparison B: The "Stable" Test (VOO + QQQ)
*Does it work on boring index funds?*

| Metric | Standard DCA | Smart DCA (V1) | Smart Impulse (Current) |
| :--- | :--- | :--- | :--- |
| **Total Profit** | $172,128 | **$225,481** | $213,691 |
| **Cash Invested** | $226,000 | $272,500 | **$255,700** |
| **ROI (Efficiency)** | 76.1% | 82.7% | **83.6%** |

**Key Takeaway:**
While V1 generated the highest *raw dollar* profit, it did so by recklessly spending every dollar it had. The **Current Algorithm (Smart Impulse)** achieved the **highest ROI (83.6%)**, proving it is the most efficient allocator of your wealth.

### The Verdict
The updated tool is simply more efficient. By programmatically waiting for better entries on crashing stocks and refusing to sell too early on winning stocks, it generated more profit while actually risking less of your cash.