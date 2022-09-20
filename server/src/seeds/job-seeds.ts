import { Job } from '../models/job';

const jobData = [
    {
        service_date: 09202022,
        starting_address: '123 test st, philadelphia, pa, 19125',
        inbetween_address:'',
        ending_address: '456 test st, philadelphia, pa, 19125',
        hourly_rate: 169,
        tolls: 10,
        fuel: 10,
        elevator: 'yes',
        servicing_emploees: 'Emp1, Emp2, Emp3',
        misc_info: 'Test misc info',
        customer_id: 1
    },
]

const seedJobTable = () => Job.bulkCreate(jobData);

export default seedJobTable;