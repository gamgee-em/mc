import { useEffect, useState } from 'react';

const Dashboard: React.FC = () => {

     const [customerData, setCustomerData] = useState([] as any[]);

    const getCustomers = async () => {
        const customersRes = await fetch('/api/customers');
        const json = await customersRes.json();
        setCustomerData(json);
        return json;
    };

    useEffect(() => {
        return () => {
            getCustomers();
        }
      }, []);
      
      console.log(customerData.map((customer, i) => {
        return customer.f_name;
      }));

    return (
        <div className='container'>
            <h2>Dashboard</h2>
        {!customerData ? (
            <p>Loading...</p>
        ) : (
            customerData.map((customer, i) => {
                return <p key={i}>{`${customer.f_name} ${customer.l_name}`}</p>
            })
        )} 
        </div>
    );
}

export default Dashboard;
