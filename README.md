# Cargo Shipment Tracker Backend

A robust RESTful API backend for managing cargo shipments, built with Node.js, Express, and MongoDB. Handles shipment data, real-time location updates, ETA calculations, and integrates seamlessly with the frontend dashboard.

---

## Features

- **RESTful API**: Endpoints for CRUD operations on shipments
- **Real-time Updates**: Update shipment locations and recalculate ETAs
- **Secure**: Uses Helmet, CORS, and environment-based configuration
- **Modular Structure**: Organized controllers, models, routes, and services
- **Error Handling**: Centralized error middleware
- **Ready for Production**: Easily configurable for different environments

---

## Tech Stack

- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **dotenv** for environment configuration
- **Helmet** for security headers
- **CORS** for cross-origin requests
- **Rate Limiting** (optional, for production)
- **Jest** & **Supertest** for testing

---

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── shipmentController.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── models/
│   │   └── Shipment.js
│   ├── routes/
│   │   └── shipmentRoutes.js
│   ├── services/
│   │   └── etaService.js
│   └── server.js
├── tests/
│   └── shipment.test.js
├── package.json
└── .env
```

---

## API Endpoints

### Shipments

- `GET /api/shipments` — Get all shipments
- `GET /api/shipment/:id` — Get a specific shipment by ID
- `POST /api/shipment` — Create a new shipment
- `POST /api/shipment/:id/update-location` — Update shipment location
- `GET /api/shipment/:id/eta` — Get shipment ETA
- `PUT /api/shipment/:id` — Update shipment details
- `DELETE /api/shipment/:id` — Delete a shipment

---

## Data Model

### Shipment Schema

```javascript
{
  shipmentId: String (required, unique),
  containerId: String (required),
  route: [String] (array of locations),
  currentLocation: String (required),
  eta: Date (calculated automatically),
  status: String (enum: 'Pending', 'In Transit', 'Delivered'),
  createdAt: Date,
  updatedAt: Date
}
```

---

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/cargoShipmentTracker.git
cd cargoShipmentTracker/backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the `backend/` directory:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/cargo-shipment-tracker
JWT_SECRET=your-jwt-secret-key-here
JWT_EXPIRE=30d
CORS_ORIGIN=http://localhost:3000
```

### 4. Start the Development Server

```bash
npm run dev
```

- API will be available at [http://localhost:5000](http://localhost:5000)

---

## Usage

- **View Shipments**: Use `GET /api/shipments` to fetch all shipments
- **Add Shipment**: Use `POST /api/shipment` to create a new shipment
- **Update Location**: Use `POST /api/shipment/:id/update-location` to update a shipment's current location
- **Get ETA**: Use `GET /api/shipment/:id/eta` to retrieve ETA for a shipment
- **Delete Shipment**: Use `DELETE /api/shipment/:id` to remove a shipment

---

## Testing

- Tests are written with Jest and Supertest.
- To run tests:

```bash
npm test
```

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

---

## License

This project is licensed under the ISC