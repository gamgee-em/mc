import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/user';
import { Customer } from '../models/customer';
import { Job } from '../models/job';

require('dotenv').config();

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    benchmark: true,
    logging: (query, time) => {
        console.log(
            `\x1b[37m\n\nQuery:`, 
            `\x1b[35m${query}`, 
            `\n\x1b[37mTime:`, 
            `\x1b[35m${time}ms\n` )
    },
    models: [User, Customer, Job]
});

export default sequelize;
