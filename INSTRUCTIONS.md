# 🚀 Cargo Shipment Tracker - Running Instructions

## Quick Start

### Prerequisites
1. **Node.js** (v14+) - Install from [nodejs.org](https://nodejs.org/)
2. **MongoDB** - Install from [mongodb.com](https://www.mongodb.com/try/download/community)
3. **Git** (optional) - For version control

### 📁 Project Structure
```
cargoShipmentTracker/
├── backend/          # Node.js + Express + MongoDB
├── frontend/         # React + Redux + Leaflet
├── start-all.ps1     # Start both servers
├── test-api.ps1      # Test API endpoints
└── README.md         # Project documentation
```

## 🏃‍♂️ Running the Application

### Option 1: Start Everything at Once (Recommended)
```powershell
# From the root directory
.\start-all.ps1
```

### Option 2: Start Services Manually

#### 1. Start MongoDB
```bash
# Windows (if not running as service)
mongod --dbpath C:\data\db

# Or if installed as service
net start MongoDB
```

#### 2. Start Backend
```powershell
cd backend
npm install
npm run dev
```

#### 3. Start Frontend
```powershell
cd frontend
npm install  
npm start
```

## 🌐 Access Points

- **Frontend Application**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/health

## 🧪 Testing the API

### Automated Testing
```powershell
# Run API tests
.\test-api.ps1
```

### Manual Testing with PowerShell

#### 1. Health Check
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/health" -Method GET
```

#### 2. Get All Shipments
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/shipments" -Method GET
```

#### 3. Create a Test Shipment
```powershell
$shipment = @{
    shipmentId = "SHIP-001"
    containerId = "CONT-001"
    route = @("New York", "Philadelphia", "Atlanta", "Miami")
    currentLocation = "New York"
    status = "Pending"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/shipment" -Method POST -Body $shipment -ContentType "application/json"
```

#### 4. Update Shipment Location
```powershell
$update = @{
    currentLocation = "Philadelphia"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/shipment/SHIP-001/update-location" -Method POST -Body $update -ContentType "application/json"
```

#### 5. Get ETA
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/shipment/SHIP-001/eta" -Method GET
```

## 🎯 Frontend Features to Test

### Dashboard View
1. **Open Browser**: Navigate to http://localhost:3000
2. **View Shipments**: Check the shipments table
3. **Add New Shipment**: Click "Add New Shipment" button
4. **Filter Shipments**: Use the status dropdown filter
5. **Sort Columns**: Click on column headers to sort

### Map View
1. **Switch to Map**: Click "Map View" button
2. **Select Shipment**: Click "View on Map" for any shipment
3. **View Route**: See the route visualization on map
4. **Current Location**: Check current location marker

### Form Testing
1. **Create Shipment**: Fill out the form with:
   - Shipment ID: "SHIP-002"
   - Container ID: "CONT-002"  
   - Route: "Los Angeles, Phoenix, Denver, Chicago"
   - Current Location: "Los Angeles"
   - Status: "In Transit"

## 📊 Sample Data for Testing

```json
[
  {
    "shipmentId": "SHIP-001",
    "containerId": "CONT-001",
    "route": ["New York", "Philadelphia", "Atlanta", "Miami"],
    "currentLocation": "New York",
    "status": "Pending"
  },
  {
    "shipmentId": "SHIP-002", 
    "containerId": "CONT-002",
    "route": ["Los Angeles", "Phoenix", "Denver", "Chicago"],
    "currentLocation": "Phoenix",
    "status": "In Transit"
  },
  {
    "shipmentId": "SHIP-003",
    "containerId": "CONT-003", 
    "route": ["Seattle", "Portland", "San Francisco"],
    "currentLocation": "San Francisco",
    "status": "Delivered"
  }
]
```

## 🔧 Troubleshooting

### MongoDB Connection Issues
```bash
# Check if MongoDB is running
netstat -an | findstr :27017

# Start MongoDB service
net start MongoDB

# Or start manually
mongod --dbpath C:\data\db
```

### Port Already in Use
```bash
# Check what's using port 5000
netstat -ano | findstr :5000

# Kill process if needed
taskkill /PID <process_id> /F
```

### Backend Not Starting
```bash
# Check Node.js version
node --version

# Reinstall dependencies
cd backend
rm -rf node_modules
npm install
```

### Frontend Not Loading
```bash
# Check React dependencies
cd frontend  
rm -rf node_modules
npm install

# Clear cache
npm start -- --reset-cache
```

## 📝 API Endpoints Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Server health check |
| GET | `/api/shipments` | Get all shipments |
| GET | `/api/shipment/:id` | Get specific shipment |
| POST | `/api/shipment` | Create new shipment |
| POST | `/api/shipment/:id/update-location` | Update location |
| GET | `/api/shipment/:id/eta` | Get ETA |

## 🎉 Expected Results

- **Backend**: Console shows "Server running in development mode on port 5000" and "MongoDB Connected"
- **Frontend**: Browser opens to http://localhost:3000 with the dashboard
- **API**: All endpoints return proper JSON responses
- **Map**: Interactive map displays with route visualization
- **CRUD**: Create, read, update operations work seamlessly

Happy testing! 🚢📦
