import React, { useContext, createContext, useState, useLayoutEffect } from 'react'
import { collection, deleteDoc, limit, increment, collectionGroup, getDocs, getDoc, doc, setDoc, updateDoc, onSnapshot, serverTimestamp, query, where, addDoc, orderBy } from 'firebase/firestore';
import { db, auth } from '../firebase'
import { getAuth, sendPasswordResetEmail, sendEmailVerification, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, signOut, RecaptchaVerifier, updateProfile, signInWithPhoneNumber, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
export const GlobalContext = createContext()


export default function GlobalContextProvider({ children }) {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    const [productId, setProductId] = useState(null)

    useLayoutEffect(() => {
        onAuthStateChanged(auth, authUser => {
            if (authUser) {
                navigate('/dashboard')
                setUser(authUser)
            }
        })
    }, [user])

    const addProduct = async (newProduct) => {
        setLoading(true)
        addDoc(collection(db, 'Products'), {
            productName: newProduct.productName,
            customerName: newProduct.customerName,
            productLocation: newProduct.productLocation,
            customerEmail: newProduct.customerEmail,
            productDescription: newProduct.productDescription,
            status: newProduct.status,
        })
            .then(res => {
                updateDoc(doc(db, 'Products', res.id), {
                    productId: res.id,
                })
                setLoading(false)

                setVisible(false)                // handleClose()
            })
            .catch(error => {
                setLoading(false)

                console.log(error)
            })
    }
    const trackProduct = async(trackingId)=>{
        console.log("id",trackingId)
        getDoc(doc(db, 'Products', trackingId))
        .then(results=>{
            setProductDetails(results.data())
        })
        .catch(error => {
            console.log(error)
        })

    }
    const editProduct = async (newProduct) => {
        setLoading(true)
        updateDoc(doc(db, 'Products', productId), {
            productName: newProduct?.productName,
            customerName: newProduct?.customerName,
            productLocation: newProduct?.productLocation,
            customerEmail: newProduct?.customerEmail,
            productDescription: newProduct?.productDescription,
            status: newProduct?.status,
        })
            .then(res => {
                setProductId(null)
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)

                console.log(error)
            })
    }

    const [productDetails, setProductDetails] = useState(null)
    const getProductDetails = () => {

        if (productId) {
            getDoc(doc(db, 'Products', productId))
                .then(res => {
                    setProductDetails(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    const loginWithGoogle = async () => {

        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                //   const credential = GoogleAuthProvider.credentialFromResult(result);
                //   const token = credential.accessToken;
                // The signed-in user info.
                setUser(result.user)
                console.log("Google Data", result.user)
                navigate('/dashboard')
                // localStorage.setItem('@user', JSON.stringify(user))
                // ...
            }).catch((error) => {
                // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.code;
                // The email of the user's account used.
                // const email = error.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    const [products, setProducts] = useState([])
    const getProducts = () => {
        onSnapshot(collection(db, 'Products'), snapshot => {
            let data = []
            snapshot.forEach(doc => {
                data.push(doc.data())
            })
            setProducts(data)
        })
    }


    return (
        <GlobalContext.Provider
            value={{
                user,
                addProduct,
                loginWithGoogle,
                products,
                getProducts,
                visible,
                loading,
                setVisible,
                editProduct,
                productId,
                setProductId,
                productDetails,
                setProductDetails,
                getProductDetails,
                trackProduct
            }} >
            {children}
        </GlobalContext.Provider>
    )
}