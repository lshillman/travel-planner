const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model {}

Trips.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    trip_budget: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    traveler_amount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    // TODO: Add a comment describing what this column holds information for
    // A unique ID for a "Reader", i.e., library patron
    traveler_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'traveler',
        key: 'id',
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'location',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trips',
  }
);

module.exports = Trips;
