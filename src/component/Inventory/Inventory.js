import React from 'react';
import InventoryItem from './InventoryItem/InventoryItem';
import './Inventory.css';

const Inventory = ({ inventory, isLoading }) => {

    return (
        <div className='grid grid-cols-2 gap-3 inventory-item-container px-2'>
            {
                isLoading ? (
                    <button type="button" class="bg-indigo-500 ..." disabled>
                        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                            {'<!-- ... -->'}
                        </svg>
                        Loading...
                    </button>
                ) : (
                    inventory?.map(inventoryItem => <InventoryItem key={inventoryItem.id} inventoryItem={inventoryItem} />)
                )
            }
        </div>
    );
};

export default Inventory;