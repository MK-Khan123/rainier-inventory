import Preloader from '../Preloader/Preloader';
import useReduxState from '../../hooks/useReduxState';
import medic from '../../images/medicine.png';
import './Inventory.css';

const Inventory = ({ isLoading, productData, setProductData }) => {

    const { handleAddToCart } = useReduxState();

    return (
        isLoading ? (
            <Preloader />
        ) : (
            <div className='grid grid-cols-2 gap-3 inventory-item-container px-2'>
                {
                    productData?.map((product, index) => {

                        const { id, name, description, category, unit_price } = product; //Information of a particular product

                        return (
                            <div key={id} className="grid grid-cols-3 gap-2 bg-slate-100 rounded-xl mb-2 p-4">
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
                                            //2. Once the product is added to the cart, the inventory is being updated.

                                            handleAddToCart(product, unit_price, index);
                                            const remainingProduct = productData.filter(pd => pd.id !== id);
                                            setProductData(remainingProduct);
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
                    })
                }
            </div>
        )
    );
};

export default Inventory;