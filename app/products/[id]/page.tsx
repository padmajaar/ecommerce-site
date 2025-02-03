import { products } from "@/app/product-data";

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
    const product = products.find(item => item.id === params.id);
    return (
        <>
            <h1>{product!.name}</h1>
            <p>{product!.price}</p>
            <h3>Description</h3>
            <p>{product!.description}</p>
        </>
    )
}