import React, { useState } from 'react'
import Button from '../Button';
import { Modal, Input, InputGroup, MaskedInput } from 'rsuite';
import { getAuth } from 'firebase/auth'
import { doc, collection, addDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase';

function Products() {
    const [open, setOpen] = useState(false)
    const [productName, setProductName] = useState("")
    const [customerName, setCustomerName] = useState("")
    const [productLocation, setProductLocation] = useState("")
    const [customerEmail, setCustomerEmail] = useState("")
    const [productDescription, setProductDescription] = useState("")

    const handleClose = () => {
        setOpen(!open)
    }
    const addProduct = async () => {
        addDoc(collection(db, 'Products'), {
            productName: productName,
            customerName: customerName,
            productLocation: productLocation,
            customerEmail: customerEmail,
            productDescription: productDescription,
        })
            .then(res => {
                updateDoc(doc(db, 'Products', res.id), {
                    productId: res.id,
                })
                alert("Product Added")
            })
    }


    const RenderModal = () => {
        return (
            <div className="modal-container">
                <Modal open={open} onClose={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Add Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Input value={customerEmail} onChange={e => { setCustomerEmail(e.target.value); }} className="my-5" placeholder="Customer Email" />
                        <Input value={customerName} onChange={e => { setCustomerName(e.target.value); }} className="my-5" placeholder="Customer Name" />
                        <Input value={productName} onChange={e => { setProductName(e.target.value); }} className="my-5" placeholder="Product Name" />
                        <Input value={productLocation} onChange={e => { setProductLocation(e.target.value); }} className="my-5" placeholder="Product Location" />
                        <Input value={productDescription} onChange={e => { setProductDescription(e.target.value) }} as="textarea" placeholder="Product Description" rows={3} />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="mx-2" onClick={handleClose} appearance="primary">
                            Add Product
                        </Button>

                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className='flex items-center m-4 justify-between '>
                <h1>PRODUCTS</h1>
                <Button
                    onClick={() => {
                        setOpen(true)
                    }}

                >ADD PRODUCT</Button>
            </div>
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
                            Description
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
                    <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Apple MacBook Pro 17"
                        </th>
                        <td class="px-6 py-4">
                            Sliver
                        </td>
                        <td class="px-6 py-4">
                            Laptop
                        </td>
                        <td class="px-6 py-4">
                            $2999
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Microsoft Surface Pro
                        </th>
                        <td class="px-6 py-4">
                            White
                        </td>
                        <td class="px-6 py-4">
                            Laptop PC
                        </td>
                        <td class="px-6 py-4">
                            $1999
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Magic Mouse 2
                        </th>
                        <td class="px-6 py-4">
                            Black
                        </td>
                        <td class="px-6 py-4">
                            Accessories
                        </td>
                        <td class="px-6 py-4">
                            $99
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Google Pixel Phone
                        </th>
                        <td class="px-6 py-4">
                            Gray
                        </td>
                        <td class="px-6 py-4">
                            Phone
                        </td>
                        <td class="px-6 py-4">
                            $799
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Apple Watch 5
                        </th>
                        <td class="px-6 py-4">
                            Red
                        </td>
                        <td class="px-6 py-4">
                            Wearables
                        </td>
                        <td class="px-6 py-4">
                            $999
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            {open && <RenderModal />}
        </div>
    )
}

export default Products;