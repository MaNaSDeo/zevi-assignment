import { createContext, useState } from "react";
import productsData from '../FakerData/fakerData'
// console.log(productsData)

export const ProductContext = createContext({
    productsData: []
})

export default function ProductContextProvider({children}){
    const [products, setProducts] = useState([...productsData]);

    const ctxValue = {
        productsData: products,
    }

    return <ProductContext.Provider value={ctxValue}>
        {children}
    </ProductContext.Provider>
}