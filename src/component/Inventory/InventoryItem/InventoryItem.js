import { useEffect, useState } from 'react';
import axios from 'axios';
import useReduxState from '../../../hooks/useReduxState';
import medic from '../../../images/medicine.png';

const InventoryItem = ({ inventoryItem, inventory, setInventory, index }) => {

    const { handleAddToCart } = useReduxState();
    const { name, description, category, id } = inventoryItem; //Information of a particular product
    const [itemPrice, setItemPrice] = useState(0); //To store price per unit

    useEffect(() => {
        const url = `https://fec-inventory-api.herokuapp.com/inventory-info?product_id=${id}`; //This API is used to fetch unit price of a particular product

        const fetchItemPrice = async () => {
            const res = await axios.get(url);
            setItemPrice(res.data[0].unit_price);
        }

        fetchItemPrice();

    }, []);

    return (
        <div className="grid grid-cols-3 gap-2 bg-slate-100 rounded-xl mb-2 p-4">
            <img className="block w-48 h-auto mx-auto" src={medic} alt="" />
            <div className="pt-6 md:p-1 text-left space-y-4">
                <div className="font-medium">
                    <div className="text-base capitalize text-sky-500 dark:text-sky-400">
                        {name}
                    </div>
                    <div className="text-sm text-slate-700 dark:text-slate-500">
                        Category: <span className='uppercase'>{category}</span>
                    </div>
                </div>
                <p className="text-xs font-medium">
                    {description}
                </p>
            </div>
            <div className='flex flex-col justify-center'>
                <button
                    onClick={() => {
                        //Two things happening here,
                        //1. The product is added on the cart
                        //2. Once the product is added to the cart, the inventory state is being updated.
                        handleAddToCart(inventoryItem, itemPrice, index);
                        const remainingInventory = inventory.filter(inventoryItem => inventoryItem.id !== id);
                        setInventory(remainingInventory);
                    }}
                    className="w-3/4 flex items-center justify-center my-2 mx-auto py-1 border border-transparent text-xs text-violet-700 font-medium rounded-md bg-violet-200 hover:bg-violet-300 hover:text-white"
                >
                    Add to list
                </button>
                <button className="w-3/4 flex items-center justify-center mt-2 mx-auto py-1 border border-transparent text-xs text-violet-700 font-medium rounded-md bg-violet-200 hover:bg-violet-300 hover:text-white">
                    Details
                </button>
            </div>
        </div>
    );
};

export default InventoryItem;