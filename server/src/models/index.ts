import { User } from './user';
import { Job } from './job';
import { Customer } from './customer';

User.hasMany(Job, {
    foreignKey: 'user_id'
});

Job.belongsTo(Customer, {
    foreignKey: 'customer_id',
    onDelete: 'CASCADE'
});

Customer.hasMany(Job, {
    foreignKey: 'customer_id'
});

export default { User, Customer, Job };