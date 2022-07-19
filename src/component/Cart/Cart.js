import { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon, XCircleIcon } from '@heroicons/react/solid';
import useReduxState from '../../hooks/useReduxState';
import Modal from '../Modal/Modal';

const Cart = ({ productData, setProductData }) => {

    const [showModal, setShowModal] = useState(false);

    //All the necessary functions required to use Redux
    const {
        cartItems,
        handleAddQuantity,
        handleReduceQuantity,
        handleRemoveFromCart,
        cartTotal,
        handleEmptyCart
    } = useReduxState();

    //These if statements were used to prevent event-bubble effect
    const handleOnClose = (e) => {
        if (
            (e.target.id === 'confirmation-modal') ||
            (e.target.id === 'modal') ||
            (e.target.id === 'cancel-button')
        ) {
            setShowModal(false);
        }
    };

    const updateInventory = (arr, index, newItem) => [
        // part of the array before the specified index
        ...arr.slice(0, index),
        // inserted item
        newItem,
        // part of the array after the specified index
        ...arr.slice(index)
    ];

    return (
        <div className='p-2 m-2 bg-slate-100'>
            <div className="p-6">
                List of items that have been selected
            </div>
            <table className="[border-spacing:1.5rem_0.5rem] border-separate table-auto mx-auto">
                <thead>
                    <tr>
                        <th>SL No.</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems?.map((item, index) => {
                            const { name, price, quantity, id } = item; //Information of a particular cart item
                            return (
                                <tr key={id} className="text-center">
                                    <td className="text-sm">{index + 1}</td>
                                    <td className="text-sm">{name}</td>
                                    <td className="flex items-center text-sm">
                                        <MinusCircleIcon onClick={() => handleReduceQuantity(id)} className="mr-1 h-5 w-5 cursor-pointer text-red-500" />
                                        {quantity}
                                        <PlusCircleIcon onClick={() => handleAddQuantity(id)} className="ml-1 h-5 w-5 cursor-pointer text-green-500" />
                                    </td>
                                    <td className="text-sm">$ {price}</td>
                                    <td>
                                        <XCircleIcon
                                            onClick={() => {
                                                //Three things happening here, 
                                                //1. Identifying the product to be removed from the cart
                                                //2. Putting the removed product back to the inventory
                                                //3. Finally removing the identified product from the cart store (Redux)

                                                const removedProduct = cartItems.find(item => item.id === id);
                                                const index = removedProduct.index;
                                                const newInventory = updateInventory(productData, index, removedProduct);
                                                setProductData(newInventory);
                                                handleRemoveFromCart(id);
                                            }}
                                            className="mx-auto h-5 w-5 cursor-pointer text-red-500"
                                        />
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <hr />
            <p className='text-end mt-4 mr-4 font-bold text-sm'>Total: ${cartTotal}</p>
            <div className="text-center">
                <Modal
                    cartItems={cartItems}
                    cartTotal={cartTotal}
                    onClose={handleOnClose}
                    handleEmptyCart={handleEmptyCart}
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            </div>
        </div>
    );
};

export default Cart;