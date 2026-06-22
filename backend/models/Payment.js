const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Payment = sequelize.define('Payment', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  saleId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  method: {
    type: DataTypes.ENUM('cash', 'card', 'digital_wallet', 'check', 'bank_transfer'),
    allowNull: false
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  reference: DataTypes.STRING,
  cardLast4: DataTypes.STRING,
  cardType: DataTypes.STRING,
  status: {
    type: DataTypes.ENUM('pending', 'approved', 'declined', 'refunded'),
    defaultValue: 'pending'
  },
  notes: DataTypes.TEXT
}, {
  timestamps: true
});

module.exports = Payment;
