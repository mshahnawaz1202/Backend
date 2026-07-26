<div align="center">

# ⚙️ Backend — Node.js & Express

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
  <img src="https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square" />
  <img src="https://img.shields.io/badge/Level-Beginner%20→%20Intermediate-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" />
</p>

<br/>

> A progressive, hands-on backend course — from spinning up your first server to building full auth systems with JWT, cookies, MongoDB, and cloud image uploads.

</div>

---

## 📋 Table of Contents

- [🔍 Overview](#-overview)
- [🛠 Tech Stack](#-tech-stack)
- [📚 Topics Covered](#-topics-covered)
- [🗂 Project Structure](#-project-structure)
- [⚡ Getting Started](#-getting-started)
- [📖 Modules](#-modules)
  - [1. 🖥 Server Basics](#1--server-basics)
  - [2. 🚂 Express.js](#2--expressjs)
  - [3. 🌐 REST API & HTTP Methods](#3--rest-api--http-methods)
  - [4. 🗄 MongoDB & Mongoose](#4--mongodb--mongoose)
  - [5. 🖼 Image Upload — Multer + ImageKit](#5--image-upload--multer--imagekit)
  - [6. 🔗 Frontend & Backend Integration — CORS + Axios](#6--frontend--backend-integration--cors--axios)
  - [7. 🔐 Authentication & Authorization](#7--authentication--authorization)
  - [8. 🔑 JWT & Cookies](#8--jwt--cookies)
- [💡 Key Concepts](#-key-concepts)
- [🔗 Resources](#-resources)

---

## 🔍 Overview

This repository is a **progressive backend development course** built with Node.js and Express.js. Each module builds on the previous one — starting from what a server actually is, all the way to protecting routes with JWT-based authentication and storing image uploads in the cloud.

Every section contains plain-language explanations alongside working code snippets — written to make concepts stick, not just work.

---

## 🛠 Tech Stack

<div align="center">

| Badge | Technology | Purpose |
|:-----:|------------|---------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) | **Node.js** | JavaScript runtime environment |
| ![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white) | **Express.js** | Web server & routing framework |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) | **MongoDB Atlas** | Cloud NoSQL database |
| ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white) | **Mongoose** | MongoDB ODM for Node.js |
| ![Multer](https://img.shields.io/badge/Multer-FF6C37?style=flat-square&logo=npm&logoColor=white) | **Multer** | File/image upload middleware |
| ![ImageKit](https://img.shields.io/badge/ImageKit-00AAFF?style=flat-square&logo=imagekit&logoColor=white) | **ImageKit** | Cloud image storage & CDN |
| ![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white) | **jsonwebtoken** | Token-based authentication |
| ![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=flat-square&logo=dotenv&logoColor=black) | **dotenv** | Environment variable management |
| ![CORS](https://img.shields.io/badge/cors-0052CC?style=flat-square&logo=npm&logoColor=white) | **cors** | Cross-Origin Resource Sharing |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white) | **Axios** | HTTP client for the frontend |
| ![nodemon](https://img.shields.io/badge/nodemon-76D04B?style=flat-square&logo=nodemon&logoColor=white) | **nodemon** | Auto-restart dev server |

</div>

---

## 📚 Topics Covered

<details>
<summary><b>Click to expand full curriculum</b></summary>

<br/>

- 🖥 What a server is and how it differs from a regular computer
- 📦 `package.json` and `package-lock.json` explained
- 🚂 Creating and configuring an Express application
- 🌐 HTTP methods: GET, POST, PATCH, DELETE
- 🔢 Route parameters (`req.params`)
- 📐 REST API design and project structure
- 🗄 Connecting to MongoDB Atlas with Mongoose
- 🏗 Schema and Model creation
- ♻️ Full CRUD operations with Mongoose
- 🖼 Image uploads with Multer (memory storage) and ImageKit
- 🔒 Environment variables with `.env`
- 🌍 CORS and cross-origin request handling
- 🔄 `useNavigate` in React for post-action redirects
- ✅ Validation — checking input format
- 🔍 Verification — checking if data exists
- 🔐 Authentication — verifying identity
- 🛡 Authorization — controlling access
- 🪙 Token-Based Authentication
- 🔑 JWT creation and verification
- 🍪 Storing tokens in cookies

</details>

---

## 🗂 Project Structure

```
Backend/
│
├── 📁 node_modules/
│
├── 📁 src/
│   ├── 📁 db/
│   │     └── 📄 db.js              # MongoDB connection
│   ├── 📁 models/
│   │     └── 📄 *.models.js        # Mongoose schemas & models
│   └── 📄 app.js                   # Express app, routes, middleware
│
├── 📄 server.js                    # Server entry point
├── 📄 .env                         # 🔒 Secrets — never commit!
├── 📄 .gitignore
├── 📄 package.json
└── 📄 package-lock.json
```

---

## ⚡ Getting Started

### ✅ Prerequisites

Make sure you have the following:

| Tool | Link |
|------|------|
| ![Node.js](https://img.shields.io/badge/Node.js-≥18.x-339933?style=flat-square&logo=nodedotjs&logoColor=white) | [nodejs.org](https://nodejs.org/) |
| ![MongoDB](https://img.shields.io/badge/MongoDB-Atlas%20Account-47A248?style=flat-square&logo=mongodb&logoColor=white) | [mongodb.com/atlas](https://www.mongodb.com/atlas) |
| ![ImageKit](https://img.shields.io/badge/ImageKit-Account-00AAFF?style=flat-square) | [imagekit.io](https://imagekit.io/) — for image upload module |

---

### 🔧 Installation

```bash
# 1. Clone the repository
git clone https://github.com/mshahnawaz1202/Backend.git
cd Backend

# 2. Install all dependencies
npm install
```

---

### 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
JWT_SECRET=your_jwt_secret_key
IMAGE_KIT_PRIVATE_KEY=your_imagekit_private_key
```

> [!WARNING]
> **Never commit your `.env` file.** Add it to `.gitignore` immediately.

---

### ▶️ Run the Server

```bash
# 🔄 Development — auto-restarts on file save
npx nodemon server.js

# 🚀 Production
node server.js
```

> Server runs at → **http://localhost:3000**

---

## 📖 Modules

---

### 1. 🖥 Server Basics

A server is just a computer programmed to handle requests from users over a network.

| | Laptop / PC | Server |
|---|---|---|
| **Users** | One person | Many users simultaneously |
| **Uptime** | Shut down anytime | Runs 24/7 |
| **Purpose** | Personal apps | Processes & responds to requests |

---

### 2. 🚂 Express.js

![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)

**Setup:**
```bash
npm init -y
npm i express
```

**Minimal working server:**
```javascript
const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("Hello from Backend!")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
```

**Key objects:**

| Object | Role |
|--------|------|
| `req` | Contains all data sent **from** the client |
| `res` | Used to send data **back** to the client |
| `app.listen(port, cb)` | Starts the server on the given port |

---

### 3. 🌐 REST API & HTTP Methods

**REST** = Representational State Transfer — the standard for building web APIs.

| Badge | Method | Purpose | Example |
|:-----:|--------|---------|---------|
| ![GET](https://img.shields.io/badge/GET-61AFFE?style=flat-square) | `GET` | Fetch / read data | `GET /users` |
| ![POST](https://img.shields.io/badge/POST-49CC90?style=flat-square) | `POST` | Create new data | `POST /users` |
| ![PATCH](https://img.shields.io/badge/PATCH-50E3C2?style=flat-square) | `PATCH` | Update existing data | `PATCH /users/1` |
| ![DELETE](https://img.shields.io/badge/DELETE-F93E3E?style=flat-square) | `DELETE` | Remove data | `DELETE /users/1` |

**Route parameters (`req.params`):**
```javascript
app.delete("/notes/:id", (req, res) => {
    const id = req.params.id       // ⚠️ always a string
    const numericId = Number(id)   // convert when needed
})
```

---

### 4. 🗄 MongoDB & Mongoose

![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white)

```bash
npm i mongoose
```

**Connect to MongoDB Atlas:**
```javascript
const mongoose = require("mongoose")

async function connectDB() {
    await mongoose.connect(process.env.DATABASE_URL)
    console.log("Connected To DB")
}
module.exports = connectDB
```

**Schema → Model:**
```javascript
const noteSchema = new mongoose.Schema({
    title: String,
    description: String
})
const noteModel = mongoose.model("notes", noteSchema)
module.exports = noteModel
```

**CRUD Methods:**

| Operation | Method | Returns |
|-----------|--------|---------|
| ➕ Create | `Model.create({})` | New document |
| 📖 Read All | `Model.find()` | Array |
| 🔍 Read One | `Model.findOne({})` | Object or `null` |
| ✏️ Update | `Model.findOneAndUpdate({filter}, {update})` | — |
| 🗑 Delete | `Model.findOneAndDelete({filter})` | — |

---

### 5. 🖼 Image Upload — Multer + ImageKit

![Multer](https://img.shields.io/badge/Multer-FF6C37?style=flat-square&logo=npm&logoColor=white)
![ImageKit](https://img.shields.io/badge/ImageKit-00AAFF?style=flat-square)

```bash
npm i multer @imagekit/nodejs dotenv
```

**Upload flow:**

```
📱 Client
   │  (sends Image + Caption)
   ▼
🚂 Express Route  /create-post
   │
   ▼
📦 Multer Middleware
   │  (stores image in RAM — memoryStorage)
   ▼
🔢 req.file.buffer
   │
   ▼
☁️  ImageKit  (uploads & stores the image)
   │
   ▼
🔗 Image URL returned
   │
   ▼
🗄 MongoDB  (saves URL + caption)
   │
   ▼
✅ JSON Response → Client
```

**Route example:**
```javascript
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })

app.post("/create-post", upload.single("image"), async (req, res) => {
    const result = await uploadFile(req.file.buffer)
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })
    res.status(201).json({ message: "Post Created Successfully!", post })
})
```

> [!TIP]
> `memoryStorage()` keeps the image in RAM only — no disk clutter since it's immediately forwarded to ImageKit.

---

### 6. 🔗 Frontend & Backend Integration — CORS + Axios

![CORS](https://img.shields.io/badge/cors-0052CC?style=flat-square&logo=npm&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)

```bash
npm i cors      # ← backend
npm i axios     # ← frontend
```

**Enable CORS on the backend:**
```javascript
const cors = require("cors")

// ✅ Allow all origins (development)
app.use(cors())

// ✅ Allow only your frontend (production)
app.use(cors({ origin: "http://localhost:5173" }))
```

**Axios on the frontend:**
```javascript
axios.get("/posts")                         // fetch all posts
axios.post("/create-post", formData)        // submit a new post
```

**CORS flow:**
```
Frontend (localhost:5173)
          │ request
          ▼
  Browser checks CORS header
          │
          ▼
  Backend (localhost:3000)
          │
          ├── ✅ CORS Allowed   → Response sent
          └── ❌ CORS Blocked   → Browser throws error
```

> [!CAUTION]
> Without `app.use(cors())`, the browser will block **every** cross-origin request — even if the server processes it.

---

### 7. 🔐 Authentication & Authorization

**The 4 pillars of an auth system:**

| # | Concept | What it checks | Example |
|---|---------|----------------|---------|
| 1️⃣ | **Validation** | Is the input *format* correct? | Valid email? Password ≥ 8 chars? |
| 2️⃣ | **Verification** | Does the data *exist*? | Email in DB? OTP correct? |
| 3️⃣ | **Authentication** | Is this *really* the user? | Email + password match |
| 4️⃣ | **Authorization** | What is this user *allowed* to do? | Admin vs. normal user |

**Authorization roles:**

| Role | Permissions |
|------|-------------|
| 👑 Admin | Add users · Update users · Delete users |
| 👤 Normal User | View data · Update own profile |

> [!NOTE]
> Authorization always happens **after** authentication — you must know *who* someone is before deciding *what* they can do.

---

### 8. 🔑 JWT & Cookies

![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)

```bash
npm i jsonwebtoken cookie-parser
```

**Generate a token after login:**
```javascript
const jwt = require('jsonwebtoken')

const token = jwt.sign(
    { id: user._id },            // payload
    process.env.JWT_SECRET       // secret key
)
```

**Set token as a cookie:**
```javascript
res.cookie("token", token)       // browser auto-sends this on every request
```

**Full token auth flow:**
```
👤 User  →  Login (email + password)
                │
                ▼
         🔍 Server verifies credentials
                │
                ▼
         🪙 Generate JWT Token
                │
                ▼
         📤 Send Token to User
                │
         🍪 User stores in cookie / localStorage
                │
                ▼
         📨 Token sent with every request
                │
                ▼
         🔍 Server verifies token
                │
         ┌──────┴──────┐
         ✅ Valid       ❌ Invalid
     Access Granted   Access Denied
```

**⚠️ JWT Disadvantages:**

| Risk | Detail |
|------|--------|
| 🚫 Hard to revoke | Token stays valid until expiry unless a blacklist is maintained |
| 🦹 Token theft | Stolen token = full account access until expiry |
| 📦 Size | JWTs are heavier than session IDs |
| ⏰ Expiry | Expired token requires re-login or a refresh token |
| 🔒 Storage | Must use `HttpOnly` cookies to prevent XSS attacks |

---

## 💡 Key Concepts

<details>
<summary><b>📦 package.json vs package-lock.json</b></summary>
<br/>

**`package.json`** — describes your project, lists dependencies, and defines scripts. This is what you share with collaborators.

**`package-lock.json`** — auto-generated by npm. Locks the **exact version** of every installed package and its sub-dependencies, so everyone on the team gets identical installs.

```
express                ← package.json lists "express": "^4.18.0"
│
├── body-parser        ← package-lock.json pins exact versions
│   └── bytes@3.1.2
├── cookie@0.5.0
└── send@0.18.0
```

</details>

<details>
<summary><b>⚡ nodemon — auto-restart dev server</b></summary>
<br/>

```bash
npx nodemon server.js
```

Watches your files and automatically restarts the server on every save. No more `Ctrl+C` → `node server.js` on every change.

</details>

<details>
<summary><b>🔧 express.json() middleware</b></summary>
<br/>

```javascript
app.use(express.json())
```

Parses incoming JSON request bodies so `req.body` is usable. Without it, `req.body` is `undefined`.

</details>

<details>
<summary><b>🔒 .env file — environment variables</b></summary>
<br/>

```javascript
require("dotenv").config()

// Then access anywhere:
process.env.DATABASE_URL
process.env.JWT_SECRET
```

Keeps passwords, API keys, and database URLs out of your source code. Always add `.env` to `.gitignore`.

</details>

---

## 🔗 Resources

<div align="center">

| Resource | Link |
|----------|------|
| ![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white) | [npmjs.com](https://www.npmjs.com/) |
| ![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white) | [expressjs.com](https://expressjs.com/) |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) | [mongodb.com/atlas](https://www.mongodb.com/atlas) |
| ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white) | [mongoosejs.com](https://mongoosejs.com/) |
| ![ImageKit](https://img.shields.io/badge/ImageKit-00AAFF?style=flat-square) | [docs.imagekit.io](https://docs.imagekit.io/) |
| ![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white) | [jwt.io](https://jwt.io/) |
| 🔑 | [JWT Secret Generator](https://jwtsecrets.com/) |

</div>

---

<div align="center">

Built with ❤️ while learning backend development

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)

</div>
