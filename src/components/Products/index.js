import React, { useState, useContext } from 'react'
import Button from '../Button';
import { Input } from 'rsuite';

import { GlobalContext } from '../../GlobalContext/GlobalContext';
import EditProduct from '../EditProduct';

function Products() {
    const {setProductDetails, productId, setProductId, editProduct, addProduct, getProducts, products, user, loading, setVisible, visible } = React.useContext(GlobalContext)
    const [productName, setProductName] = useState("")
    const [customerName, setCustomerName] = useState("")
    const [productLocation, setProductLocation] = useState("")
    const [customerEmail, setCustomerEmail] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [status, setStatus] = useState("")

    const handleClose = () => {
        setVisible(!visible)
    }

    React.useEffect(() => {
        getProducts()
    }, [user])


    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className='flex items-center m-4 justify-between '>
                <h1>
                    {visible && 'PRODUCT'}
                    {productId !== null && 'EDIT PRODUCT'}
                    {!visible && productId === null && 'PRODUCTS'}
                </h1>

                <Button
                    onClick={() => {
                        setVisible(true)
                        setProductId(null)
                    }}

                >ADD PRODUCT</Button>
            </div>
            {!visible && productId === null
                &&
                <table class="w-full text-sm text-left mt-2 text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Location
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Customer Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Tracking ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {product?.productName}
                                </th>
                                <td class="px-6 py-4">
                                    {product?.productLocation}
                                </td>
                                <td class="px-6 py-4">
                                    {product?.customerEmail}

                                </td>
                                <td class="px-6 py-4">
                                    {product?.productId}
                                </td>
                                <td class="px-6 py-4">
                                    {product?.status}
                                </td>
                                <td
                                    onClick={() => {
                                        setProductId(product?.productId)
                                        setProductDetails(product)
                                    }}
                                    class="px-6 py-4 text-right">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        ))}




                    </tbody>
                </table>
            }
            {productId === null && visible &&
                <div>
                    <div className="my-5 mx-3">
                        <label>Product Name</label>
                        <Input
                            value={productName}
                            onChange={e => {
                                setProductName(e)
                            }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" placeholder="Customer Email" />
                    </div>
                    <div className="my-5 mx-3">
                        <label>Customer Name</label>

                        <Input value={customerName} onChange={e => { setCustomerName(e); }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" placeholder="Customer Name" />


                    </div>
                    <div className="my-5 mx-3">
                        <label>Customer Email</label>
                        <Input value={customerEmail} onChange={e => { setCustomerEmail(e); }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" placeholder="Customer Email" />

                    </div>
                    <div className="my-5 mx-3">
                        <label>Product Location</label>
                        <Input value={productLocation} onChange={e => { setProductLocation(e); }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" placeholder="Product Location" />

                    </div>
                    <div className="my-5 mx-3">
                        <label>Product Status</label>
                        <Input value={status} onChange={e => { setStatus(e); }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" placeholder="Product Status" />

                    </div>

                    <div className="my-5 mx-3">
                        <label>Product Description</label>
                        <Input value={productDescription} onChange={e => { setProductDescription(e) }} as="textarea" placeholder="Product Description" rows={3} />

                    </div>
                    <div className="my-5 mx-3 flex ">

                        <Button
                            disabled={loading ? true : false}
                            onClick={() => {
                                addProduct({
                                    productName: productName,
                                    customerName: customerName,
                                    customerEmail: customerEmail,
                                    productLocation: productLocation,
                                    productDescription: productDescription,
                                    status: status
                                })
                            }}
                        >{loading ? 'Submitting...' : 'Submit'}</Button>
                        <Button
                            onClick={() => {
                               setVisible(!visible)
                            }}
                        >Cancel</Button>
                    </div>

                </div>
            }

            {productId !== null && <EditProduct />}
        </div>
    )
}

export default Products;