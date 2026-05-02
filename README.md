# TradeSphere — Full Stack Stock Trading Platform

TradeSphere is a full-stack stock trading and portfolio management platform inspired by modern trading applications. It provides a seamless experience for users to explore stocks, manage portfolios, and interact with a trading dashboard.

---

## Frontend

![React](https://skillicons.dev/icons?i=react) ![Vite](https://skillicons.dev/icons?i=vite) ![JavaScript](https://skillicons.dev/icons?i=javascript) ![Tailwind CSS](https://skillicons.dev/icons?i=tailwind) ![Chart.js](https://cdn.simpleicons.org/chartdotjs/FF6384)

---

## Backend

![Node.js](https://skillicons.dev/icons?i=nodejs) ![Express.js](https://skillicons.dev/icons?i=express) ![MongoDB](https://skillicons.dev/icons?i=mongodb) ![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge)

---

## Deployment

### AWS (EC2 / Amplify / Cloud Services)
![AWS](https://skillicons.dev/icons?i=aws)

---

## Project Description

TradeSphere is a full-stack web application that simulates a real-world stock trading ecosystem. It consists of:

- Frontend Website – A user-facing platform for browsing stocks and core features  
- Trading Dashboard – A dedicated interface for managing trades, portfolios, and analytics  
- Backend API – Handles business logic, API requests, and database operations  

The platform is designed with a focus on performance, scalability, and clean user experience.

---

## Project Structure

```
TradeSphere/
│
├── frontend/     # Main landing and user-facing React app (Vite)
├── dashboard/    # Trading dashboard (React)
├── backend/      # Node.js and Express backend
```

---

## Tech Stack

### Frontend
- React (Vite)
- JavaScript
- Tailwind CSS
- Material UI
- Axios
- Chart.js

### Dashboard
- React (Create React App)
- Chart.js

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Features

- Interactive stock data visualization using Chart.js  
- Portfolio management system  
- Buy and sell stock simulation  
- Trading dashboard with analytics  
- RESTful API integration  
- Responsive UI using Tailwind CSS and Material UI  
- Optimized frontend performance with Vite  

---

## Installation and Setup

### Clone the Repository
```bash
git clone https://github.com/soumya007github/TradeSphere.git
cd TradeSphere
```

### Backend Setup
```bash
cd backend
npm install
npm start
```

Create a `.env` file in the backend directory:
```
MONGO_URL=your_mongodb_connection_string
PORT=8080
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Dashboard Setup
```bash
cd dashboard
npm install
npm start
```

---

## API Endpoints (Sample)

- GET /allpositions — Fetch all positions  
- POST /buy — Buy stocks  
- POST /sell — Sell stocks  

---

## Deployment

- Frontend and Dashboard: AWS Amplify, Vercel, or Netlify  
- Backend: Render, Railway, or AWS EC2  

---

## Future Improvements

- Authentication (JWT or OAuth)  
- Integration with live stock market APIs  
- Advanced analytics and insights  
- Mobile application support  

---

## License

This project is licensed under the MIT License.

---

## Author

Soumya Ranjan Tripathy
