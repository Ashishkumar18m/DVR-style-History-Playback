# 🎥 DVR History Playback – Smart Surveillance Playback System

**Live Demo:** [[https://dvr-playback.onrender.com](https://dvr-playback.onrender.com)]

DVR History Playback is a responsive surveillance playback system that allows users to browse, navigate, and review historical CCTV footage through an interactive DVR-style interface.  
Built using Node.js, Express.js, and Vanilla JavaScript, the platform supports multi-camera playback, clickable timelines, continuous clip navigation, drawing annotations, and responsive controls for both desktop and mobile devices.

---

## 🖼️ Project Screenshots

Below are some screenshots of the DVR History Playback system:
<img width="1902" height="915" alt="Screenshot_10-5-2026_81943_dvr-playback onrender com" src="https://github.com/user-attachments/assets/441e1695-77d6-4d7a-929f-cf5997f79570" />

---

<img width="1909" height="915" alt="Screenshot_10-5-2026_83730_dvr-playback onrender com" src="https://github.com/user-attachments/assets/72e8f975-bc03-49f2-966f-9f7d361da426" />


---

<img width="564" height="807" alt="Screenshot_10-5-2026_83537_dvr-playback onrender com" src="https://github.com/user-attachments/assets/27a6f703-46a8-41f7-92c9-3da6707b0df8" />

---

## ✨ Platform Features

* 🎥 Multi-camera DVR playback system
* 📅 Historical footage browsing by date
* ⏱️ Interactive clickable playback timeline
* ▶️ Seamless auto-play between clips
* ⏩ Playback speed controls (0.5x – 2x)
* ⏪ Skip forward/backward controls
* 📱 Fully responsive mobile & desktop UI
* ✏️ Video annotation & drawing tools
* 🧽 Eraser and clear-canvas support
* 🎬 Clip chips for quick navigation
* ⌨️ Keyboard shortcuts support
* 📂 Dynamic filesystem-based video loading

### 🎬 Playback Features

```text
Continuous clip navigation

Auto-play mode

Timeline-based seeking

Previous / Next clip controls

Real-time playback indicator

Clip highlighting
```

### ✏️ Annotation Features

```text
Brush drawing on video

Multiple brush colors

Eraser tool

Adjustable brush size

Canvas clearing
```

---

## 🧑‍💻 Tech Stack

* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Backend Runtime:** Node.js + Express.js
* **Video Playback:** HTML5 Video API
* **Drawing Layer:** HTML5 Canvas API
* **File Handling:** Node.js File System (fs)
* **Deployment:** Render 

---

## 📁 Project Structure

```text
DVR-style-History-Playback/
│
├── backend/
│   ├── server.js                 # Main Express server
│   ├── package.json              # Backend dependencies & scripts
│   └── .env                      # Environment variables
│
├── frontend/
│   ├── index.html                # Main DVR playback UI
│   └── logo                      # Application logo
│
├── videos/
│   ├── camera1/                  # Camera 1 footage
│   │
│   │   ├── 2026-05-08/
│   │   │   ├── 08-00.mp4
│   │   │   └── 09-00.mp4
│   │   │
│   │   └── 2026-05-09/
│   │       ├── 07-00.mp4
│   │       ├── 08-00.mp4
│   │       └── 11-00.mp4
│   │
│   └── camera2/
│       ├── 2026-05-08/
│       │   ├── 02-00.mp4
│       │   └── 03-00.mp4
│       │
│       └── 2026-05-09/
│           ├── 01-00.mp4
│           └── 04-00.mp4
│
└── README.md
```

---

## ⚙️ Environment Variables

Create the following environment variables in the `backend/.env` file:

```env
PORT=3000
```

> The application automatically falls back to port `3000` if no environment variable is provided.

The backend uses:

```js
const PORT = process.env.PORT || 3000;
```

---

## 🛠️ Installation & Local Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Ashishkumar18m/DVR-style-History-Playback.git
cd DVR-style-History-Playback
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=3000
```

Start the server:

```bash
npm start
```

---

You should see the following output in the terminal:

```text
=============================================
🚀 DVR Playback Server Running
📍 Port: 3000
📂 Videos: ../videos
🌐 http://localhost:3000
=============================================
```

---

After this, open the following URL in your browser:

## 🌐 Local URL

```text
http://localhost:3000
```

---

## 🔌 Available API Endpoints

### 🎥 Get All Cameras

```http
GET /api/cameras
```

---

### 📂 Get Videos for a Camera

```http
GET /api/videos/:camera
```

Example:

```http
GET /api/videos/camera1
```
---

## 🎮 Keyboard Shortcuts

| Key | Action |
|---|---|
| Space | Play / Pause |
| ← Arrow | Skip Backward 10s |
| → Arrow | Skip Forward 10s |

---

## 📱 Responsive Design

The application supports:

```text
Desktop Mode

Tablet Mode

Mobile Portrait

Mobile Landscape

Touch Drawing Support
```

---

## ☁️ Deployment (Render)

### Render Configuration

* **Environment:** Node
* **Branch:** main
* **Root Directory:** backend
* **Build Command:** npm install
* **Start Command:** npm start

---

## 🚀 Future Improvements

```text
Live CCTV stream support

Cloud video storage integration

AI-based motion detection

Full-day continuous DVR timeline

Snapshot export feature

User authentication & roles
```

---

## 👨‍💻 Author

**Ashish Kumar**

DVR History Playback Project

---

Built with ❤️ for surveillance playback and video review systems.

⭐ If you found this project helpful, consider giving it a star on GitHub!
