export interface ProductType{
    id: number;
    name: String;
    explanation: String;
    price: number;
}

export interface ProductItemProps{
    product: ProductType;
    onDelete: (id:number) => void;
    onUpdate: (product: ProductType) => void;
}