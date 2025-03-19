import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  completed: {
    type: DataTypes.BOOLEAN, 
    defaultValue: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW, 
  },
}, {
  timestamps: true, 
  createdAt: 'createdAt',
  updatedAt: false,
});

export default Task;
