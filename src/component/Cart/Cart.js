import { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon, XCircleIcon } from '@heroicons/react/solid';
import useReduxState from '../../hooks/useReduxState';
import Modal from '../Modal/Modal';

const Cart = () => {

    const [showModal, setShowModal] = useState(false);
    const { cartItems, handleAddQuantity, handleReduceQuantity, handleRemoveFromCart, cartTotal } = useReduxState();

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
                            const { name, price, quantity, id } = item;
                            return (
                                <tr key={id} className="text-center">
                                    <td>{index + 1}</td>
                                    <td>{name}</td>
                                    <td className="flex items-center">
                                        <MinusCircleIcon onClick={() => handleReduceQuantity(id)} className="mr-1 h-5 w-5 cursor-pointer text-red-500" />
                                        {quantity}
                                        <PlusCircleIcon onClick={() => handleAddQuantity(id)} className="ml-1 h-5 w-5 cursor-pointer text-green-500" />
                                    </td>
                                    <td>$ {price}</td>
                                    <td><XCircleIcon onClick={() => handleRemoveFromCart(id)} className="mx-auto h-5 w-5 cursor-pointer text-red-500" /></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <hr />
            <p className='text-end mt-4 mr-4 font-bold'>Total: ${cartTotal}</p>
            <div className="text-center">
                <Modal showModal={showModal} setShowModal={setShowModal} />
            </div>
        </div>
    );
};

export default Cart;