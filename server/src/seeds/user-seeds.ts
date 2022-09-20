import { User } from '../models/user';

const userData: any = [
    {
        f_name: 'Sam',
        l_name: 'Gamgee',
        admin: true,
        email: 'gamgee.em@gmail.com'
    },
    {
        f_name: 'Bernadette',
        l_name: 'Knowles',
        admin: false,
        email: 'bernk@hmail.com'
    },
];

const seedUserTable = () => User.bulkCreate(userData);

export default seedUserTable;