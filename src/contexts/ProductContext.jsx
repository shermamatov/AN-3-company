import React, { createContext, useReducer } from "react";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    orderBy,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import { db } from "../fire";
export const productContext = createContext();
let INIT_STATE = {
    data: [],
    oneData: {},
};
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCT":
            return { ...state, data: action.payload };
        case "GET_ONE_PRODUCT":
            return { ...state, oneData: action.payload };
        default:
            return state;
    }
};

const ProductContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const productRef = collection(db, "product");
    async function addProduct(product) {
        await addDoc(productRef, product);
    }
    async function getProduct() {
        let data = await getDocs(productRef);
        dispatch({
            type: "GET_PRODUCT",
            payload: data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        });
    }
    async function getOneProduct(id) {
        const oneDataRef = doc(db, "product", id);
        let oneData = await getDoc(oneDataRef);
        dispatch({
            type: "GET_ONE_PRODUCT",
            payload: oneData.data(),
        });
    }

    async function editProduct(id, product) {
        const productDocRef = doc(db, "product", id);
        await updateDoc(productDocRef, product);
        getProduct();
    }

    async function deleteProduct(id) {
        const productDocRef = doc(db, "product", id);
        await deleteDoc(productDocRef);
        getProduct();
    }
    const value = {
        addProduct,
        getProduct,
        product: state.data,
        oneProduct: state.oneData,
        getOneProduct,
        editProduct,
        deleteProduct,
    };
    return (
        <productContext.Provider value={value}>
            {children}
        </productContext.Provider>
    );
};

export default ProductContext;
