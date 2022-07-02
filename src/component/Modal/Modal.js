import React from 'react';

const Modal = ({ showModal, setShowModal, onClose, cartItems, cartTotal }) => {

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
                                <button className="w-1/3 mt-8 mx-auto p-1 text-sm border border-transparent text-violet-700 font-medium rounded-md bg-violet-200 hover:bg-violet-300 hover:text-white">
                                    Confirm
                                </button>
                            </div>
                        </div>
                    ) : (
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
            {
                // showModal ? (
                //     <>
                //         <div
                //             className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                //         >
                //             <div className="relative w-auto my-6 mx-auto max-w-3xl">
                //                 {/*content*/}
                //                 <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                //                     {/*header*/}
                //                     <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                //                         <h3 className="text-3xl font-semibold">
                //                             Please add items first!
                //                         </h3>

                //                         <button
                //                             className="p-1 ml-auto bg-transparent border-0 text-red opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                //                             onClick={() => setShowModal(false)}
                //                         >
                //                             <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                //                                 ×
                //                             </span>
                //                         </button>
                //                     </div>
                //                     {/*body*/}
                //                     <div className="relative p-6 flex-auto">
                //                         <ExclamationCircleIcon className='h-12 w-12 mx-auto' />
                //                     </div>
                //                     {/*footer*/}
                //                     <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                //                         <button
                //                             className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                //                             type="button"
                //                             onClick={() => setShowModal(false)}
                //                         >
                //                             Close
                //                         </button>
                //                         <button
                //                             className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                //                             type="button"
                //                             onClick={() => setShowModal(false)}
                //                         >
                //                             Save Changes
                //                         </button>
                //                     </div>
                //                 </div>
                //             </div>
                //         </div>
                //         <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                //     </>
                // ) : null
            }
        </>
    );
}

export default Modal;