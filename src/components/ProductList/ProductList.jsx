import React from "react";
import { useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import { ProductItem } from "../ProductItem/ProductItem";

const products = [
    {id : '1', title : 'jeans', price : 322, description : 'about'},
    {id : '2', title : 'shirt', price : 1222, description : 'about'},
    {id : '3', title : 'pants', price : 162, description : 'about'},
    {id : '4', title : 'jeans', price : 312, description : 'about'},
]

export const ProductList = ( ) => {
    const [addedItems, setaddedItems] = useState([]);
    const {tg} = useTelegram()
    const onAdd = ( product ) => {
         const arleadyAdded = addedItems.find(item => item.id === product.id)
         let newItems = [];
         
         if (arleadyAdded) {
             newItems = addedItems.filter(item => item.id !== product.id)
         }
         else { 
             newItems = [...addedItems, product]
         }
         setaddedItems(newItems)
         if (newItems.length === 0 ) {
                tg.MainButton.hide()
             
         }
         else {
            tg.MainButton.show()
            tg.MainButton.setParams({
                text: 'buy a clothes'
            })


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