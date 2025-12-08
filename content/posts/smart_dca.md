---
title: "Smart DCA: Methodology and Results"
date: "2025-11-05"
---
# Smart DCA: Methodology and Results

## 1. The Core Philosophy

Dollar Cost Averaging (DCA) is the gold standard for passive investing because it solves the timing problem. But it suffers from a fatal flaw: it is blind. A standard DCA strategy buys the exact same amount whether the market is crashing—which is actually the opportunity of a lifetime—or in a speculative bubble, where risk is at its maximum.

The mission was to build a tool that systematizes the intuition of a professional trader. We wanted an algorithm that uses strict mathematical rules to aggressively accumulate quality assets when they are on sale and pump the brakes when they are overheated, automating the discipline most of us lack.

## 2. Phase 1: The Blunt Instrument (V1)

Our first iteration was simple. If the price was low, we bought big. If it was high, we cut back.

* **Aggression:** If the VIX spiked above 30 or the Price dropped below the 200-day Average, we deployed 1.6x – 2.0x capital.
* **Safety:** If the RSI went above 70 indicating overbought conditions, we cut spending to 0.6x.

**The Failure:**
While V1 beat standard DCA, it failed the Rocket Ship test. In strong bull markets, like Nvidia in 2023, assets can stay overbought with an RSI over 70 for months. V1 misinterpreted this momentum as a warning sign and cut funding too early, leaving massive gains on the table.



## 3. The Solution: Smart Impulse

To fix the premature selling in Phase 1, we integrated the Elder Impulse System, which colors market bars based on momentum. Green bars mean strong upward momentum, while Red bars indicate a strong downtrend.



This turned a blunt instrument into a sniper rifle. The new strategy became: Aggressive on Entries, Smart on Exits.

### The Upgrades

1.  **The Rocket Fix (Impulse Exits)**
    We changed the selling rule. Now, even if RSI is screaming Overbought, we check the momentum. If the Impulse Bar is Green, we ignore the RSI and keep buying. This ensures we ride winners like Nvidia all the way to the top rather than jumping off at the first sign of altitude.

2.  **Unapologetic Aggression (Deep Value)**
    For high-quality assets like the S&P 500, waiting for a perfect bottom is a mistake.
    * **The Rule:** If a quality asset drops below its 200-day average and RSI hits below 40, we don't wait. We deploy 1.6x capital immediately.
    * **The Logic:** Great assets don't stay cheap for long. We catch the knife because we trust the handle.

## 4. Backtesting the Strategies (2004–2024)

To prove this isn't just luck, we backtested the algorithm against the three most distinct economic chapters of the last 20 years.

### A. The Great Financial Crisis (2007–2010)
*The Context: Total systemic collapse. The ultimate survival test.*



[Image of S&P 500 price chart during 2008 financial crisis]


| Metric | Standard DCA | V1 (Original) | Smart Impulse | The Verdict |
| :--- | :--- | :--- | :--- | :--- |
| **Total ROI** | 4.3% | 8.5% | **9.4%** | **Double the Profit** |
| **Alpha** | — | +4.2% | **+5.1%** | **Crisis Alpha** |
| **Max Drawdown** | -24.9% | -17.6% | **-14.7%** | **Safest Strategy** |

**Analysis:** This is the proof of concept. While standard investors suffered a 25% drawdown, Smart Impulse deployed heavy capital during the peak VIX spikes. It bought the blood in the streets, leading to a faster recovery and significantly lower risk.

### B. The Covid Money Printer (2020–2021)
*The Context: A V-shaped crash followed by a euphoria-fueled bull run.*

| Metric | Standard DCA | V1 (Original) | Smart Impulse | The Verdict |
| :--- | :--- | :--- | :--- | :--- |
| **Total ROI** | 30.7% | **36.0%** | 35.3% | **V1 Wins (Barely)** |
| **Capital Deployed** | 100% | 124.1% | **132.7%** | **Capturing Upside** |

**Analysis:** This is the only period where V1 edged out Smart Impulse by 0.7%, likely because V1 sold the Euphoria phase earlier, locking in cash before the 2022 crash. However, both strategies crushed the standard blind approach.

### C. The Inflation Crash (2022)
*The Context: A slow, painful, year-long grind down.*

| Metric | Standard DCA | V1 (Original) | Smart Impulse | The Verdict |
| :--- | :--- | :--- | :--- | :--- |
| **Total ROI** | -9.0% | -8.9% | **-8.7%** | **Defensive Win** |
| **Capital Deployed** | 100% | 163.3% | **139.2%** | **Smart Accumulation** |

**Analysis:** Here, V1 panicked, deploying 163% of capital into a falling market. Smart Impulse was more disciplined at 139%, saving cash while still accumulating cheap shares. It respected the trend rather than fighting it.

## 5. Modern Era Performance (2020–Present)

### A. The Torture Test (High Volatility)
*Portfolio: NVDA, PYPL, DIS. Goal: Survive volatility and capture alpha.*

| Metric | Standard DCA | V1 (Original) | Smart Impulse | The Verdict |
| :--- | :--- | :--- | :--- | :--- |
| **Total ROI** | 89.9% | 97.1% | **100.3%** | **+10.4% Alpha** |
| **Capital Deployed** | 100% | 137.9% | **123.4%** | **Highest Efficiency** |
| **Max Drawdown** | -39.3% | -37.1% | -39.4% | **Risk On** |

**Analysis:**
This test confirms why we abandoned V1.
* **V1** was inefficient: it spent 138% capital to get a 97% return.
* **Smart Impulse** was precise: it spent far less (123%) but achieved a higher return (100%).
It stopped spraying and praying and started sniping entries.

### B. The Stable Test (VOO + QQQ)
*Portfolio: S&P 500 & Nasdaq. Goal: Efficient cash management.*



| Metric | Standard DCA | V1 (Original) | Smart Impulse | The Verdict |
| :--- | :--- | :--- | :--- | :--- |
| **Total ROI** | 67.0% | 73.7% | **74.6%** | **+7.6% Alpha** |
| **Capital Deployed** | 100% | 122.4% | **120.3%** | **Sniper Efficiency** |
| **Max Drawdown** | -11.0% | -8.5% | **-10.2%** | **Reduced Risk** |

**The Verdict:**
For index fund investors, Smart Impulse improves efficiency. It beat Standard DCA by 7.6% and beat V1 by roughly 1% while using less capital. 