import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Inventory from '../Inventory/Inventory';

const Dashboard = () => {

    const [inventory, setInventory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const url = `https://fec-inventory-api.herokuapp.com/product-info`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setInventory(data);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className='container mx-auto py-4'>
            <h2 className='text-2xl mb-3'>Dashboard {'>'} Supply Room</h2>
            <input type="text" className="mt-1 w-3/5 mb-5 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="Search items" />

            <select id="tag" className='mx-2 mb-3 rounded'>
                <option defaultValue="tag1">Tag 1</option>
                <option value="tag2">Tag 2</option>
                <option value="tag3">Tag 3</option>
                <option value="tag4">Tag 4</option>
                <option value="tag5">Tag 5</option>
            </select>
            <select id="filter" className='ml-2 mb-3 rounded'>
                <option defaultValue="filter1">Filter 1</option>
                <option value="filter2">Filter 2</option>
                <option value="filter3">Filter 3</option>
                <option value="filter4">Filter 4</option>
                <option value="filter5">Filter 5</option>
            </select>

            <div className="flex">
                <div className='w-3/5'>
                    <Inventory isLoading={isLoading} inventory={inventory} />
                </div>
                <div className='w-2/5'>
                    <Cart />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;