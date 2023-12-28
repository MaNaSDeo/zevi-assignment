import { createContext, useState,useEffect } from "react";
import productsData from '../FakerData/fakerData';
import { brands } from '../FakerData/fakerData'

export const ProductContext = createContext({
    productsData: [],
    wishlist: [],
    updateWishList: () => {},
    handleChange: () => {},
})

export default function ProductContextProvider({children}){
    const [products, setProducts] = useState([...productsData]);
    const [wishlist, setWishlist] = useState([]);
    const [brandCheckedValues, setBrandCheckedValues] = useState([]);
    const [priceCheckedValues, setPriceCheckedValues] = useState([]);
    const [ratingCheckedValues, setRatingCheckedValues] = useState([]);

    // Use useEffect to call the filter function when the checked values change
    useEffect(() => {
        filterProducts();
    }, [brandCheckedValues, priceCheckedValues, ratingCheckedValues]);
  

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

    const handleChange = (event, filterType) => {
        const value = event.target.value;
        const checked = event.target.checked;

        if(filterType==='brand'){
            if (checked) {
                setBrandCheckedValues([...brandCheckedValues, value]);
              } else {
                setBrandCheckedValues(brandCheckedValues.filter((v) => v !== value));
              }
        }else if(filterType==='price'){
            if (checked) {
                setPriceCheckedValues([...priceCheckedValues, value]);
              } else {
                setPriceCheckedValues(priceCheckedValues.filter((v) => v !== value));
              }
        }else if(filterType==='rating'){
            if (checked) {
                setRatingCheckedValues([...ratingCheckedValues, Number(value)]);
              } else {
                setRatingCheckedValues(ratingCheckedValues.filter((v) => v !== Number(value)));
              }
        }
    };

    const filterProducts = () => {
        let filteredProducts = [...productsData];
        let priceRanges = [];
        for (let value of priceCheckedValues) {
          let [lower, upper] = value.split(",");
          lower = parseInt(lower);
          upper = parseInt(upper);
          priceRanges.push(lower);
          priceRanges.push(upper);
        }
        priceRanges.sort((a, b) => a - b);

        if(brandCheckedValues.length > 0){
            filteredProducts = filteredProducts.filter(product => brandCheckedValues.includes(product.brand))
        }

        if(priceCheckedValues.length > 0){
            let priceRangeProduct = [];
            for (let i = 0; i < priceRanges.length; i += 2) {
                let lower = priceRanges[i];
                let upper = priceRanges[i + 1];

                priceRangeProduct = filteredProducts.filter(
                    (product) => product.price >= lower && product.price <= upper
                );
            }
            filteredProducts = priceRangeProduct;
        }
        if(ratingCheckedValues.length >0){
            filteredProducts = filteredProducts.filter(product => ratingCheckedValues.includes(Number(product.rating)))
        }

        setProducts(filteredProducts)
    }

    const ctxValue = {
        productsData: products,
        wishlist: wishlist,
        updateWishList: handleUpdateWishList,
        handleChange: handleChange,
    }

    return <ProductContext.Provider value={ctxValue}>
        {children}
    </ProductContext.Provider>
}