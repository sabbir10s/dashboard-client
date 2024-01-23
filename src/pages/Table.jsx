import React from 'react';
import CustomerTable from '../components/Table/CustomerTable';
import OrderTable from '../components/Table/OrderTable';
import ProductTable from '../components/Table/ProductTable';

const Table = () => {
    return (
        <div>
            <h2 className='text-xl pb-4'>Table For Products</h2>
            <ProductTable/>
            <h2 className='text-xl py-6'>Table For Customer</h2>
            <CustomerTable/>
            <h2 className='text-xl py-6'>Table For Orders</h2>
            <OrderTable/>
        </div>
    );
};

export default Table;