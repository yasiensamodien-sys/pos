const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Customer = sequelize.define('Customer', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  address: DataTypes.TEXT,
  city: DataTypes.STRING,
  postcode: DataTypes.STRING,
  country: DataTypes.STRING,
  loyaltyPoints: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  totalSpent: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0
  },
  numberOfPurchases: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  lastPurchaseDate: DataTypes.DATE,
  sageCustomerId: DataTypes.STRING
}, {
  timestamps: true
});

module.exports = Customer;
