import React from 'react';
import OrderOverview from '../components/dashboard/OrderOverview';
import Chart from '../components/dashboard/Chart';
import OrderTable from '../components/Table/OrderTable';

const Dashboard = () => {
    return (
        <div>
            <h2 className='text-xl font-medium pb-6'>Dashboard Overview</h2>
            <OrderOverview/>
            
            {/* <Chart/> */}
            <h2 className='text-xl font-medium pb-6'>Recent Order</h2>
            <OrderTable/>
        </div>
    );
};

export default Dashboard;