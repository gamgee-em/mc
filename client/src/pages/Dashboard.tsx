import { useEffect, useState } from 'react';

const Dashboard: React.FC = () => {
    
    interface isCustomer {
        id: string;
        f_name: string;
        l_name: string;
        email: string;
        phone: number;
    }

    const [customerData, setCustomerData] = useState<isCustomer[]>();

    const getCustomers = async ():Promise<isCustomer[]> => {
        const customersRes = await fetch('/api/customers');
        const json:isCustomer[] = await customersRes.json();
        setCustomerData(json);
        console.log(json);
        return json;
    };

    useEffect(() => {
        return () => {
            getCustomers();
        }
    }, []);

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
