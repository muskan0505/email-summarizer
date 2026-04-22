# 📧 Smart Email Summarizer

A full-stack web application that converts long emails or articles into concise, readable summaries.

This project also includes a **Chrome Extension** to summarize text directly from any webpage.

---

## 🚀 Features

* 🔹 Summarizes long emails/articles instantly
* 🔹 Clean and modern UI
* 🔹 Copy-to-clipboard support
* 🔹 Works offline (no external API dependency)
* 🔹 Fast and lightweight
* 🧩 Chrome Extension for real-time summarization

---

## 🛠 Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)
* Tailwind CSS (CDN)

### Backend

* FastAPI (Python)
* REST API
* Custom NLP (extractive summarization)

### Extension

* Chrome Extension (Manifest v3)
* JavaScript
* Chrome APIs (tabs, scripting)

---

## 🧠 How it Works

The backend uses a **frequency-based extractive summarization algorithm**:

1. Cleans and processes the input text
2. Calculates word frequency
3. Scores sentences based on importance
4. Returns the most relevant sentences as summary

---

## 📂 Project Structure

```
email-summarizer/
│
├── backend/
│   ├── main.py
│   ├── model.py
│   ├── schemas.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── extension/
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.js
│   └── style.css
│
└── README.md
```

---

## ▶️ Run Locally

### 🔹 Backend

```
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python -m uvicorn main:app --reload
```

Backend runs on:
👉 http://127.0.0.1:8000

---

### 🔹 Frontend

```
cd frontend
npm install
npm start
```

Frontend runs on:
👉 http://localhost:3000

---

## 🧩 Chrome Extension

This project includes a Chrome Extension that allows users to summarize selected text from any webpage.

---

### ⚙️ Install Extension (Local Setup)

1. Open Google Chrome
2. Go to:

```
chrome://extensions/
```

3. Enable **Developer Mode** (top-right corner)

4. Click **Load unpacked**

5. Select the `extension/` folder

---

### 🧪 How to Use

1. Open any webpage
2. Select (highlight) some text
3. Click the extension icon in Chrome toolbar
4. Click **Summarize**
5. View the generated summary

---

### ⚠️ Important Note

Make sure backend server is running before using extension:

```
cd backend
python -m uvicorn main:app --reload
```

---

## 📌 Future Enhancements

* 🔥 Chrome Extension auto-summarization (no popup)
* 🤖 AI-based summarization using LLMs
* 🌙 Dark mode UI
* 🌍 Multi-language support
* 📄 Export summary as PDF

---

## 💼 Resume Value

This project demonstrates:

* Full-stack development (React + FastAPI)
* Chrome Extension development
* API integration & debugging
* Handling real-world issues (network restrictions, SSL errors)
* NLP fundamentals (text summarization)
* UI/UX design

---

## 👩‍💻 Author

**Muskan**
GitHub: https://github.com/muskan0505

---

## ⭐ If you like this project

Give it a star ⭐ and feel free to fork!
