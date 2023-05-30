import { Button } from "../Button/Button"
import "./ProductItem.css";


export const ProductItem = ({product, onAdd}) => {

    const onAddHandler = ( ) => {
        onAdd(product)
    }
    return (
        <div className="product" key={product.id}>
            <div className="img"/>
        <h1>{product.title}</h1>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <Button onClick = {onAddHandler}>
            Add
        </Button>
        </div>

    )
}