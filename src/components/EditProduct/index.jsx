import React, { useState } from 'react'
import { Input } from 'rsuite';
import Button from '../Button';
import { GlobalContext } from '../../GlobalContext/GlobalContext'
function EditProduct() {
    const { loading, editProduct, getProducts, productDetails } = React.useContext(GlobalContext)
    const [productName, setProductName] = useState("")
    const [customerName, setCustomerName] = useState("")
    const [productLocation, setProductLocation] = useState("")
    const [customerEmail, setCustomerEmail] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [status, setStatus] = useState("")

    React.useEffect(() => {
        setProductName(productDetails.productName)
        setCustomerName(productDetails.customerName)
        setProductLocation(productDetails.productLocation)
        setCustomerEmail(productDetails.customerEmail)
        setProductDescription(productDetails.productDescription)
        setStatus(productDetails.status)
    }, [productDetails])

    return (
        <div>

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
                            editProduct({
                                productName: productName,
                                customerName: customerName,
                                customerEmail: customerEmail,
                                productLocation: productLocation,
                                productDescription: productDescription,
                                status: status
                            })
                        }}
                    >{loading ? 'Updating...' : 'Update'}</Button>
                </div>
            </div>
        </div>
    )
}

export default EditProduct