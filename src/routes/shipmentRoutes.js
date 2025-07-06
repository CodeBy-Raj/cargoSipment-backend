const express = require('express');
const router = express.Router();
const {
  getAllShipments,
  getShipment,
  createShipment,
  updateShipmentLocation,
  getShipmentETA,
} = require('../controllers/shipmentController');

// @route   GET /api/shipments
router.get('/shipments', getAllShipments);

// @route   GET /api/shipment/:id
router.get('/shipment/:id', getShipment);

// @route   POST /api/shipment
router.post('/shipment', createShipment);

// @route   POST /api/shipment/:id/update-location
router.post('/shipment/:id/update-location', updateShipmentLocation);

// @route   GET /api/shipment/:id/eta
router.get('/shipment/:id/eta', getShipmentETA);

module.exports = router;
