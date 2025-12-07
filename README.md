# Service-Oriented Computing Mini Project  
### Client–Server System with Public API Integration & MongoDB

---

## 📌 Project Overview

This mini project demonstrates a **Service-Oriented Architecture (SOA)** by building a **client–server system** that integrates multiple public APIs, aggregates the data, and submits it to a custom backend service. The backend securely stores records in **MongoDB** with **OAuth 2.0-style token authentication** and **API key validation**.

---

## 🚀 Features

### ✅ Client (Frontend)
- Built using **HTML, JavaScript, AJAX**
- Uses **three public APIs**:
  - COVID-19 API (disease.sh)
  - OpenWeatherMap API
  - Travel Advisory API
- Aggregates response into a single JSON object
- Displays JSON on the webpage
- Sends the JSON to the backend using AJAX
- Includes API Key + OAuth Token in request headers

### ✅ Server (Backend)
- Built using **Node.js + Express**
- Handles JSON requests
- Validates OAuth token & API key
- Stores records in **MongoDB Atlas**
- Provides endpoint to **retrieve all saved records**

---

## 📂 Project Structure

mini-project/

│

├── client/

│ ├── index.html
│ ├── script.js
│ └── style.css

│
├── server/

│ 
├── server.js
│ ├── models/
│ │ └── Record.js
│

├── routes/

│
│ └── apiRoutes.js

│ ├── .env (NOT INCLUDED IN GITHUB)
│ ├── package.json
│ └── package-lock.json

│

├── .gitignore

└── README.md



---

## 🔧 Technologies Used

### **Frontend**
- HTML5  
- Vanilla JavaScript  
- Fetch API / AJAX  

### **Backend**
- Node.js  
- Express.js  
- Mongoose (MongoDB ORM)  

### **Security**
- API Key Authentication  
- OAuth-like Token Authentication  

### **Database**
- MongoDB Atlas (Cloud)

---

## 🌍 Public APIs Used

| API | Purpose | Link |
|------|---------|------|
| COVID-19 API | Live COVID statistics | https://disease.sh/docs/ |
| OpenWeatherMap API | Weather data | https://openweathermap.org/api |
| Travel Advisory API | Country safety information | https://www.travel-advisory.info/api |

---

## ⚙️ Setup Instructions

### 🟦 **1. Clone the Repository**

```bash
git clone https://github.com/yourusername/mini-project.git
cd mini-project
```


### 🟩 **2. Server Setup**

Navigate to the server folder:

```bash
cd server
npm install

Create a .env file:
MONGO_URI= ADD URL
PORT=5000
API_KEY=APIKEY123456
OAUTH_TOKEN=USER123TOKEN
```


⚠️ Do NOT commit .env to GitHub.

Start the Server:
```bash
npm start
```

You should see:
```bash
MongoDB Connected
Server running on port 5000
```

### 🟧 **3. Client Setup**

No installation needed.

Open the file:

client/index.html


Use Live Server or simply double-click to open in browser.

### ▶️ **How to Use**
Step 1 — Enter Country Name 

Example: Sri Lanka

Step 2 — Fetch API Data

Click Get Data
You will see aggregated JSON output.

Step 3 — Save to Server

Click Save to Server

Output should be:

{ "message": "Data stored successfully!" }

### 🟧 3. Client Setup

No installation needed.

Open the file:

client/index.html


Use Live Server or simply double-click to open in browser.

### ▶️ **How to Use**
Step 1 — Enter Country Name

Example: Sri Lanka

Step 2 — Fetch API Data

Click Get Data
You will see aggregated JSON output.

Step 3 — Save to Server

Click Save to Server

Output should be:

{ "message": "Data stored successfully!" }


### 🔐 **Security**

The server validates every request using:

API Key (app-level)

Sent via header:

x-api-key: APIKEY123456

OAuth Token (user-level)

Sent via header:

authorization: USER123TOKEN


Requests without valid credentials are rejected.

### 📌 **Endpoints Summary**
POST /api/save

Saves aggregated data to MongoDB
Headers required:

x-api-key
authorization

GET /api/records

Fetches all saved records from database

### 📸 **Sample Screenshot (Optional)**


<img width="853" height="436" alt="image" src="https://github.com/user-attachments/assets/b6091a97-d815-4cf6-a71f-8e6772d30c9c" />

<img width="940" height="486" alt="image" src="https://github.com/user-attachments/assets/135e3f97-9967-4088-bd99-b599392710bb" />



### 🧑‍💻 **Contributors**
 
Nethmi Fernando - ITBIN-2211-0010 

Ishfak Ahamed - ITBIN-2211-0011 

Pramudi Premarathna - ITBIN-2211-0013 

Loshitha Perera - ITBIN-2211-0042 



***
