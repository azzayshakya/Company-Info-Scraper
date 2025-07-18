# 🏢 Company Info Scraper

A full-stack app that scrapes company data like emails, phone numbers, social links, and tech stack from websites using a modern React frontend and Python Flask backend.

---

## 🖼️ Overview

This tool allows users to input multiple URLs and receive structured information scraped from those websites. It’s designed for simplicity, responsiveness, and ease of deployment.

---

## 🔁 Folder Structure

```

Company-Info-Scraper/
├── scraper-frontend/   # React + Tailwind frontend
├── scraper-backend/    # Flask API for scraping

````
---

## 🌐 Frontend Setup – `scraper-frontend/`

### 🔧 Setup Instructions

1. Navigate to the frontend directory:

```bash
cd scraper-frontend
````

2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

This will start your React + Vite app at:

```
http://localhost:5173
```

### 🧪 Features

* Clean, responsive form
* Tailwind-styled result cards
* Error messages per URL (e.g., invalid, unresponsive, blocked)

---

## 📦 Backend Setup – `scraper-backend/`

This folder contains the **Flask API** for scraping company data.

---

### 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/Company-Info-Scraper.git
cd Company-Info-Scraper/scraper-backend
```

2. Create a virtual environment:

```bash
python -m venv venv
```

3. Activate the virtual environment:

```bash
# Windows
.\venv\Scripts\activate

# macOS/Linux
source venv/bin/activate
```

4. Install required dependencies:

```bash
pip install -r requirements.txt
```

> 🔹 If `requirements.txt` is missing, run:

```bash
pip install flask flask-cors requests beautifulsoup4 lxml
pip freeze > requirements.txt
```

---

### ▶️ Running the Backend Server (Flask API)

```bash
python app.py
```

API will start on:

```
http://localhost:5000
```

---

### ✅ API Endpoint

#### POST `/api/scrape`

**Request Body:**

```json
{
  "urls": [
    "https://example.com",
    "https://another.com"
  ]
}
```

**Response:**

```json
[
  {
    "url": "https://example.com",
    "company_name": "Example Inc.",
    "description": "...",
    "emails": [],
    "phones": [],
    "social_profiles": {
      "linkedin": "...",
      "twitter": null,
      "facebook": null
    },
    "tech_stack": ["React", "Node.js"],
    "scrape_error": null
  }
]
```
---

### 📁 Backend Structure

```
scraper-backend/
├── app.py                # Main Flask API
├── run_scraper.py        # CLI scraping tool
├── requirements.txt
├── scraper/
│   ├── __init__.py
│   ├── input_handler.py  # Input + validation
│   ├── scraper.py        # Main scrape logic
│   ├── utils.py          # Email, phone, social, tech
├── output/               # Output files
├── logs/                 # Error logs
```

---
