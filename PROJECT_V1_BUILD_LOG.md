# Solar Training App — V1 Build Log & V2 Planning

##  Overview

This document captures the full development process of the Solar Training App V1.

Purpose:
- Preserve build decisions
- Track architecture choices
- Provide context for Codex-assisted V2 development
- Serve as a system-level reference

---

## V1 Goal

Build a **solar training web app** that simulates:

1. Monitoring (O&M dashboard)
2. Site Evaluation workflow

---

##  V1 Modules

### 1. Monitoring Module

- Dashboard
- Production page
- Recent alerts (dashboard component)

### 2. Site Evaluation Module

- Site Eval Home
- Assessment Form
- Photo Capture
- Assessment Summary

---

## Core Workflow

```text
/site-eval
  ↓
/site-eval/form
  ↓
/site-eval/photos
  ↓
/site-eval/summary
  ↓
(back to /site-eval)

 Tech Stack
	•	React
	•	Vite
	•	Tailwind CSS
	•	React Router
	•	Recharts
	•	Netlify (deployment)

  src/
  components/
    charts/
    dashboard/
    site-eval/
    common/
  pages/
  routes/
  data/
public/
  _redirects

Key Design Decisions

1. V1 is Frontend Only
	•	No backend
	•	No database
	•	No auth
	•	No persistence

 All data is mock/local

2. Separation of Concerns
	•	Pages = layout + routing
	•	Components = logic + UI
	•	Data = mock datasets

3. Training First, Not Production SaaS

Focus:
	•	clarity
	•	usability
	•	learning flow

NOT:
	•	scalability
	•	auth
	•	real-time systems

Production Page Logic

## Time Range Toggle
	•	Daily
	•	Weekly
	•	Monthly

// ## Data Strategy

Each range uses its own dataset:
dailyProductionData
weeklyProductionData
monthlyProductionData

Standardized Shape
{
  label: 'Mon',
  productionKwh: 28.4
}
Metrics
	•	Total Production
	•	Average Production
	•	Best Period

  Site Evaluation System

Assessment Form

Captures:
	•	Site info
	•	Roof details
	•	Electrical
	•	Safety

⸻

Photo Capture
	•	Required categories:
	•	Roof Overview
	•	Obstructions
	•	Main Panel
	•	Meter
	•	Structure
	•	Equipment Location
	•	Local preview only
	•	No uploads

⸻

Summary Page

Displays:
	•	Assessment info
	•	Roof details
	•	Electrical details
	•	Safety
	•	Photo status

Acts as:
Final validation screen

// ## Routing 
/
→ /dashboard

/dashboard
/production
/site-eval
/site-eval/form
/site-eval/photos
/site-eval/summary

// ## Navigation Strategy

Global Navigation (Top Nav)
	•	Dashboard
	•	Production
	•	Site Evaluation

Workflow Navigation
	•	Start Assessment
	•	Continue to Photos
	•	Continue to Summary
	•	Complete Assessment
//

## build settings
npm run build
dist/

// ## SPA Routing Fix
public/_redirects
/* /index.html 200

// ## QA Checklist

Before deploy:
	•	All routes load
	•	Buttons navigate correctly
	•	No console errors
	•	Mobile layout usable
	•	Full site-eval flow works

// ## Lessons Learned
	•	Keep V1 simple
	•	Don’t overbuild early
	•	Routing clarity is critical
	•	UI consistency matters more than features
	•	Workflow > features

 // ## V2 Planning Ideas

1. State Management
	•	Persist form + photo data across pages

2. Real Summary Data
	•	Replace mock summary with actual user inputs

3. Sample Assessment Mode
	•	Preloaded example for training/demo

4. Dashboard Upgrade
	•	Make it true system home
	•	Link modules together

5. Alerts System (Optional)
	•	Full alerts page
	•	Severity filtering

6. Export Features
	•	PDF summary
	•	Report generation

7. Instructor Mode
	•	Review student submissions
	•	Feedback system

// ## Codex Usage Strategy (V2)

When using Codex:

Always:
	•	define exact files
	•	define scope
	•	define constraints
	•	define acceptance criteria

Avoid:
	•	“build everything”
	•	vague prompts
	•	large refactors

## Final V1 Status
Monitoring Module → Complete
Site Evaluation Module → Complete
Deployment → Live

// ## URL 
https://gentle-otter-056809.netlify.app

// ## Mental Model 
Form = Data collection
Photos = Evidence
Summary = Validation
Dashboard = System awareness

//