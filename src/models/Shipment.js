const mongoose = require('mongoose');

const ShipmentSchema = new mongoose.Schema({
  shipmentId: {
    type: String,
    required: true,
    unique: true,
  },
  containerId: {
    type: String,
    required: true,
  },
  route: {
    type: [String],
    required: true,
  },
  currentLocation: {
    type: String,
    required: true,
  },
  eta: {
    type: Date,
  },
  status: {
    type: String,
    required: true,
    enum: ['Pending', 'In Transit', 'Delivered'],
    default: 'Pending',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Shipment', ShipmentSchema);
