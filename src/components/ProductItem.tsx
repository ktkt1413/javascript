import { useState } from "react";
import { ProductItemProps } from "../interface";

const ProductItem = ({product,onDelete, onUpdate}: ProductItemProps) => {
    const {id, name, price, explanation} = product;
    const [isEditMode, setIsEditMode] = useState(false);
    const [editName, setEditName] = useState(product.name);
    const [editExplanation, setEditExplanation] = useState(product.explanation);
    const [editPrice, setEditPrice] = useState(product.price);

    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{explanation}</div>
            <div>{price}</div>
            <button type="button" onClick={()=> onDelete(id)}>삭제</button>
            <button type="button" onClick={()=> setIsEditMode(prev => !prev)}>수정</button>
        </div>
    );
}

export default ProductItem;

export {};