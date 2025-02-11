'use client';

import { useState } from "react";
import Link from 'next/link';
import { Product } from "../product-data";

export default function ShoppingCartList({ initialCartProducts }: { initialCartProducts: Product[] }) {
    const [cartProducts, setCartProducts] = useState(initialCartProducts);

    async function removeFromCart(productId: string) {
        const response = await fetch('http://localhost:3000/api/users/2/cart', {
            method: 'DELETE',
            body: JSON.stringify({
                productId,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const updatedCartProducts = await response.json();
        setCartProducts(updatedCartProducts);
    }


    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
            <ul className="space-y-4">
                {cartProducts?.length > 0 ? (
                    cartProducts.map(product => {
                        if (!product) return null;
                        return (
                            <li key={product.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
                                <Link key={product.id} href={"/products/" + product.id}>
                                    <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                                    <p className="text-gray-600">${product.price}</p>
                                    <div className="flex justify-end">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                removeFromCart(product.id)
                                            }}>Remove from Cart
                                        </button>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </ul>
        </div>
    )
}