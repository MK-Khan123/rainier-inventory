import React, { useState } from 'react';

const Modal = ({ showModal, setShowModal, onClose, cartItems, cartTotal, handleEmptyCart }) => {

    const [confirmMessage, setConfirmMessage] = useState(false); //A state that is used to show/hide confirmation of the supply request

    const handleCloseMessage = (e) => {
        if (e.target.id === 'order-confirmed') {
            setConfirmMessage(false);
        }
    };

    return (
        <>
            <button
                className="bg-indigo-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Confirm
            </button>
            {
                showModal ? (
                    cartItems.length ? (

                        // If there are cart items, then this block of code will appear showing the relevant info of the products added on cart

                        <div onClick={onClose} id='confirmation-modal' className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center modal'>
                            <div className="bg-white px-24 py-6 rounded-lg">
                                <div className='mb-8'>
                                    <p className='text-lg font-bold mb-2'>Are you sure?</p>
                                    <p className='text-gray-600 text-sm font-bold'>Items below will be confirmed</p>
                                </div>
                                <table className="[border-spacing:1.5rem_0.5rem] border-separate table-auto mx-auto">
                                    <thead>
                                        <tr>
                                            <th>Items</th>
                                            <th>Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItems?.map(item => {
                                                const { name, quantity, id } = item;
                                                return (
                                                    <tr key={id}>
                                                        <td className="text-start text-sm">{name}</td>
                                                        <td className="text-center text-sm">{quantity}</td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                </table>
                                <hr />
                                <p className='text-end mt-2 mr-4 font-bold'>Total: ${cartTotal}</p>
                                <button onClick={onClose} id='cancel-button' className="w-1/3 mt-8 mr-2 mx-auto p-1 text-sm border border-transparent text-violet-700 font-medium rounded-md bg-violet-200 hover:bg-violet-300 hover:text-white">
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {                                        
                                        setShowModal(false);
                                        handleEmptyCart();
                                        setConfirmMessage(true);
                                    }}
                                    className="w-1/3 mt-8 mx-auto p-1 text-sm border border-transparent text-violet-700 font-medium rounded-md bg-violet-200 hover:bg-violet-300 hover:text-white">
                                    Confirm
                                </button>
                            </div>
                        </div>
                    ) : (
                        // If there are no cart items then this block of code will appear asking the user to add items first

                        <div onClick={onClose} id='modal' className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center'>
                            <div className="bg-white px-24 py-6 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-6 mx-auto py-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Please add items first
                            </div>
                        </div>
                    )
                ) : null
            }
            {/* This block of code appears when the user confirms the supply request */}
            {
                confirmMessage && (
                    <div onClick={handleCloseMessage} id='order-confirmed' className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center'>
                        <div className="bg-white px-24 py-6 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-6 mx-auto py-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Supply request confirmed
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Modal;