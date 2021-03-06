import { useEffect, useState } from 'react';
import axios from 'axios';
import Cart from '../Cart/Cart';
import Inventory from '../Inventory/Inventory';

const Dashboard = () => {

    const [productData, setProductData] = useState([]); //This state carries all the product related data

    const [isLoading, setIsLoading] = useState(false); //This state is used to display Preloader while fetching the data from database

    useEffect(() => {

        setIsLoading(true);
        const productUrl = `https://fec-inventory-api.herokuapp.com/product-info`;
        const inventoryUrl = `https://fec-inventory-api.herokuapp.com/inventory-info`;

        const fetchInventory = async () => {
            const product = await axios.get(productUrl);
            const inventory = await axios.get(inventoryUrl);

            const productData = product.data;
            const inventoryData = inventory.data;

            const combinedData = productData.map(pd => {
                const product_inventory_data = inventoryData.find(item => item.product_id === pd.id);
                const { qty, box_no, unit, unit_price, note } = product_inventory_data;
                const data = { ...pd, qty, box_no, unit, unit_price, note };
                return data;
            });

            setProductData(combinedData);
            setIsLoading(false);
        }

        fetchInventory();

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
                {/* To display the products on Dashboard */}
                <div className='w-3/5'>
                    <Inventory
                        isLoading={isLoading}
                        productData={productData}
                        setProductData={setProductData}
                    />
                </div>

                {/* To display the products added on cart */}
                <div className='w-2/5'>
                    <Cart productData={productData} setProductData={setProductData} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;