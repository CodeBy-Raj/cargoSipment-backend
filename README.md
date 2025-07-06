# Cargo Shipment Tracker Backend

A RESTful API backend for managing cargo shipments, built with Node.js and Express. Handles shipment data, status updates, and integrates with a frontend dashboard.

---

## 🚀 Tech Stack

- **Node.js** (JavaScript runtime)
- **Express.js** (web framework)
- **MongoDB** (database, via Mongoose)
- **Mongoose** (MongoDB ODM)
- **CORS** (Cross-Origin Resource Sharing)
- **dotenv** (environment variable management)
- **Jest** & **Supertest** (testing)

---

## 📁 Project Structure

```
backend/
├── src/
│   ├── controllers/
│   │   └── shipmentController.js
│   ├── models/
│   │   └── Shipment.js
│   ├── routes/
│   │   └── shipmentRoutes.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── app.js
│   └── server.js
├── tests/
│   └── shipment.test.js
├── .env
├── package.json
└── README.md
```

---

## 🛠️ Setup & Development

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Variables

Create a `.env` file in `backend/`:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/cargo-shipment
```

### 3. Start the Server

```bash
npm start
```

- API runs at [http://localhost:5000/api](http://localhost:5000/api)

---

## 🧑‍💻 Available Scripts

- `npm start` — Start the server
- `npm run dev` — Start server with nodemon (development)
- `npm test` — Run tests

---

## 🌟 API Endpoints

- `GET /api/shipments` — List all shipments
- `GET /api/shipments/:id` — Get shipment by ID
- `POST /api/shipments` — Create a new shipment
- `PUT /api/shipments/:id` — Update shipment details
- `DELETE /api/shipments/:id` — Delete a shipment

---

## 🧪 Testing

- Tests are written with Jest and Supertest.
- Run tests with:

```bash
npm test
```

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Commit and push your changes
4. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License.