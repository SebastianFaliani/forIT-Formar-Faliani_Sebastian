import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/tasks.db',  
});

export default sequelize;
