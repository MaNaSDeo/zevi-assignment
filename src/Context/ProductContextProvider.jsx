import { createContext, useState } from "react";
import productsData from '../FakerData/fakerData';
import { brands } from '../FakerData/fakerData'

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

    const brandFilter = [];
    brands.map(ele => brandFilter.push({key: ele, value: ele}));

    // const filterData = [
    //     {
    //         id: 1,
    //         filterName: 'BRAND',
    //         filterValue: brandFilter
    //     },{
    //         id: 2,
    //         filterName: 'PRICE RANGE',
    //         filterValue: [
    //             {key: 'Under 500', value: 500}, 
    //             {key: '1000 to 3000', value: 3000}
    //         ]
    //     },{
    //         id: 3,
    //         filterName: 'RATINGS',
    //         filterValue: [
    //             {key: 5, value: 5},
    //             {key: 4, value: 4},
    //             {key: 3, value: 3},
    //             {key: 2, value: 2},
    //             {key: 1, value: 1}
    //         ]
    //     }
    // ]

    // console.log(filterData)

    const ctxValue = {
        productsData: products,
        wishlist: wishlist,
        updateWishList: handleUpdateWishList,
    }

    return <ProductContext.Provider value={ctxValue}>
        {children}
    </ProductContext.Provider>
}