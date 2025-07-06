const Shipment = require('../models/Shipment');
const { calculateETA } = require('../services/etaService');

// @desc    Get all shipments
// @route   GET /api/shipments
// @access  Public
const getAllShipments = async (req, res) => {
  try {
    const shipments = await Shipment.find();
    res.json(shipments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single shipment
// @route   GET /api/shipment/:id
// @access  Public
const getShipment = async (req, res) => {
  try {
    const shipment = await Shipment.findOne({ shipmentId: req.params.id });
    if (!shipment) {
      return res.status(404).json({ message: 'Shipment not found' });
    }
    res.json(shipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create new shipment
// @route   POST /api/shipment
// @access  Public
const createShipment = async (req, res) => {
  try {
    const { shipmentId, containerId, route, currentLocation, status } = req.body;
    
    // Calculate initial ETA
    const eta = await calculateETA(currentLocation, route);
    
    const shipment = new Shipment({
      shipmentId,
      containerId,
      route,
      currentLocation,
      eta,
      status: status || 'Pending',
    });

    const savedShipment = await shipment.save();
    res.status(201).json(savedShipment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update shipment location
// @route   POST /api/shipment/:id/update-location
// @access  Public
const updateShipmentLocation = async (req, res) => {
  try {
    const { currentLocation } = req.body;
    
    const shipment = await Shipment.findOne({ shipmentId: req.params.id });
    if (!shipment) {
      return res.status(404).json({ message: 'Shipment not found' });
    }

    // Update location
    shipment.currentLocation = currentLocation;
    
    // Recalculate ETA
    shipment.eta = await calculateETA(currentLocation, shipment.route);
    
    // Update status if needed
    if (shipment.status === 'Pending') {
      shipment.status = 'In Transit';
    }
    
    const updatedShipment = await shipment.save();
    res.json(updatedShipment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get shipment ETA
// @route   GET /api/shipment/:id/eta
// @access  Public
const getShipmentETA = async (req, res) => {
  try {
    const shipment = await Shipment.findOne({ shipmentId: req.params.id });
    if (!shipment) {
      return res.status(404).json({ message: 'Shipment not found' });
    }

    const eta = await calculateETA(shipment.currentLocation, shipment.route);
    res.json({ eta, currentLocation: shipment.currentLocation });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllShipments,
  getShipment,
  createShipment,
  updateShipmentLocation,
  getShipmentETA,
};
