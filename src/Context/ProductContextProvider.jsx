import { createContext, useState } from "react";
import productsData from '../FakerData/fakerData';

export const ProductContext = createContext({
    productsData: [],
    wishlist: [],
    updateWishList: () => {},
})

export default function ProductContextProvider({children}){
    const [products, setProducts] = useState([...productsData]);
    const [wishlist, setWishlist] = useState([]);

    function handleUpdateWishList(id){
        if(wishlist.includes(id)){
            // remove this id
            setWishlist(prevData => prevData.filter(item => item !== id))
        }else{
            setWishlist(prevData => {
                return[...prevData, id] //Add the id
            })
        }
    }

    console.log(wishlist)

    const ctxValue = {
        productsData: products,
        wishlist: wishlist,
        updateWishList: handleUpdateWishList,
    }

    return <ProductContext.Provider value={ctxValue}>
        {children}
    </ProductContext.Provider>
}