# 📊 Terminal Operations Data Summary
### Brooke's Point Grand Terminal — Live Operations Dashboard
**Brooke's Point, Southern Palawan, Philippines**
*Built by Joey S. Heredero · -=pagong=- · 2026*

---

## 🔗 Live Dashboard

**👉 [Open Dashboard](https://bpgtterminal.github.io/terminal-operations-data-summary/BPGT-Daily-Summary.html)**

> Install as a mobile app: Open the link in Chrome on your phone → tap the 3-dot menu → **Add to Home Screen**

---

## 📌 Overview

This is the official operations summary dashboard for the **Brooke's Point Grand Terminal (BPGT)**. It pulls live data directly from the terminal's Google Sheets database and presents a comprehensive daily, weekly, monthly, quarterly, and yearly view of terminal operations — including passenger statistics, revenue collection, vehicle movement, routes served, and staff performance.

No server. No backend. No monthly cost. Just a browser and a Google Sheet.

---

## ✨ Features

### 📅 Period Filters
| Filter | Description |
|---|---|
| **Today** | Current day's operations |
| **This week** | Sunday to today |
| **This month** | Current calendar month |
| **This quarter** | Q1 / Q2 / Q3 / Q4 |
| **This year** | Full year to date |
| **Date range** | Custom From → To date picker |

### 💰 Financial Overview
- Total revenue collected (Cash / GCash / Maya / Bank Transfer)
- Paid, Unpaid, and Waived transaction counts with peso amounts
- Average fee per trip
- Payment method breakdown with bar charts
- Revenue by collector (top 3 + expandable)

### 👥 Passenger Statistics
- Total Bus/Van passengers (departures + arrivals — main count)
- Tricycle departures tracked separately as **extra count** (prevents double-counting)
- Adults, Children, Seniors, PWD, Pregnant — with M/F breakdown per category
- Visual category breakdown bars with percentage of total
- Stacked male/female bar chart by category
- Gender split donut pie chart

### 🚌 Vehicle & Routes
- Vehicle type donut pie chart (Bus, Shuttle Van, Tricycle)
- Top 10 routes served — expandable to see all
- Route trip counts with visual bars

### 👷 Staff Performance
- Top 3 collectors by trip count (expandable)
- Top 3 collectors by revenue collected (expandable)

### 🖨️ Print & Export
- **Save PDF** — saves A4 landscape PDF via browser print dialog
- **Print** — sends to printer directly
- All charts and tables formatted for clean print output

### 📱 PWA — Installable App
Works offline for the app shell. Data refreshes when online.

---

## 🗂️ Files

| File | Purpose |
|---|---|
| `BPGT-Daily-Summary.html` | Main dashboard — open this in browser |
| `manifest.json` | PWA configuration for home screen install |
| `sw.js` | Service Worker for offline support |
| `bpgt-logo.png` | BPGT seal used as app icon |
| `README.md` | This file |

---

## 🔧 Data Source

| Layer | Technology | Cost |
|---|---|---|
| Dashboard hosting | GitHub Pages | ₱0 |
| Database | Google Sheets (TERMINAL PASSENGER DATA) | ₱0 |
| Data API | Google Visualization API (GViz) | ₱0 |
| **TOTAL** | | **₱0 / month** |

The dashboard reads directly from the terminal's Google Sheet using the **Google Visualization API** — no Apps Script, no CORS issues, no authentication needed as long as the Sheet is shared as *"Anyone with the link can view"*.

---

## 📊 Passenger Counting Logic

The BPGT uses a **dual-count system** to prevent double-counting of passengers:

**Main count** (Bus + Shuttle Van only):
- Departing bus/van passengers
- Arriving bus/van passengers

**Extra count** (Tricycle departures — separate):
- Arriving passengers who transfer to tricycles for onward travel are recorded separately
- This ensures they are not counted twice (once as arriving bus/van pax, once as departing tricycle pax)

---

## 📱 Installing as a Phone App

1. Open the dashboard URL in **Chrome** (Android) or **Safari** (iPhone)
2. Tap the browser menu (3 dots on Chrome, Share on Safari)
3. Select **"Add to Home Screen"**
4. The BPGT seal icon will appear on your home screen
5. Opens fullscreen like a native app — no browser bar

---

## 🗺️ Related Projects

| Project | Description | Link |
|---|---|---|
| **BPGT TMS v4.4** | Main terminal monitoring system | [View](https://claude.ai/share/85017cd5-2ca0-4c20-8b99-c0af8d158ce4) |
| **OPM v2.0** | Operations Personnel Monitor | [View](https://claude.ai/share/47125418-0fa1-4b5b-9407-05cad369b194) |
| **RYL Travels** | PUV intercity booking app | *In deployment* |

---

## 👤 Builder

**Joey S. Heredero**
Brooke's Point Grand Terminal, Southern Palawan

- Terminal Manager, BPGT
- Philippine Red Cross Safety Instructor (20+ years)
- Tour Guide, Southern Palawan (10+ years)
- Emergency Responder

*Built with ❤️ by -=pagong=- and Dev · Brooke's Point, Palawan · 2026*

---

> *"Excellence in Every Move. Guidance in Every Step. BPGT Service that Leads to Passenger Satisfaction."*
