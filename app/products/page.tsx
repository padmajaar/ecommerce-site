import ProductsList from "../ProductsList";

export default async function ProductsPage() {
    const response = await fetch('http://localhost:3000/api/products', {
        cache: 'no-cache',
    });
    const products = await response.json();
    const cartResponse = await fetch('http://localhost:3000/api/users/2/cart', {
        cache: 'no-cache',
    });
    const cartProducts = await cartResponse.json();

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">Products</h1>
            <ProductsList products={products} initialCartProducts={cartProducts} />
        </div>
    )
}