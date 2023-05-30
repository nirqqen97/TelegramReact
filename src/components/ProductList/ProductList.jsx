import React from "react";
import { useState } from "react";
import { ProductItem } from "../ProductItem/ProductItem";

const products = [
    {id : '1', title : 'jeans', price : 322, description : 'about'},
    {id : '2', title : 'shirt', price : 1222, description : 'about'},
    {id : '3', title : 'pants', price : 162, description : 'about'},
    {id : '4', title : 'jeans', price : 312, description : 'about'},
]

export const ProductList = ( ) => {
    const [addedItems, setaddedItems] = useState([]);
    
    const onAdd = ( product ) => {
         const arleadyAdded = addedItems.find(item => item.id === product.id)
         let newItems = [];
         
         if (arleadyAdded) {
             
         }
    }
    return (
            products.map(product => {
                return <ProductItem 
                key={product.id}
                product = {product}
                onAdd = {onAdd}/>
            })
    )
}