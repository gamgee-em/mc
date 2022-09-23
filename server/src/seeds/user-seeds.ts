import { User } from '../models/user';

const userData: any = [
    {
        f_name: 'Sam',
        l_name: 'Gamgee',
        admin: true,
        email: 'gamgee.em@gmail.com',
        password: 'test1234'
    },
    {
        f_name: 'Bernadette',
        l_name: 'Knowles',
        admin: false,
        email: 'bernk@hmail.com',
        password: 'test456'
    },
];

const seedUserTable = () => User.bulkCreate(userData);

export default seedUserTable;