import React from 'react';
import InventoryItem from './InventoryItem/InventoryItem';
import './Inventory.css';
import Preloader from '../Preloader/Preloader';

const Inventory = ({ inventory, isLoading, setInventory }) => {

    return (
        isLoading ? (
            <Preloader />
        ) : (
            <div className='grid grid-cols-2 gap-3 inventory-item-container px-2'>
                {
                    inventory?.map((inventoryItem, index) => (<InventoryItem
                        index={index}
                        key={inventoryItem.id}
                        inventoryItem={inventoryItem}
                        inventory={inventory}
                        setInventory={setInventory}
                    />)
                    )
                }
            </div>
        )
    );
};

export default Inventory;