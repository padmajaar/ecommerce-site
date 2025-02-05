'use client';

import { useState } from "react";
import Link from 'next/link';
import { Product } from "../product-data";

export default function ShoppingCartList({ initialCartProducts }: { initialCartProducts: Product[] }) {
    const [cartProducts, setCartProducts] = useState(initialCartProducts);

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