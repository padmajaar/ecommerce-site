'use client';

import { useState } from "react";
import { products } from "../product-data";
import Link from 'next/link';

export default function CartPage() {
    const [cartIds, setCartIds] = useState(['123', '345']);

    const cartProducts = cartIds.map(id => products.find(p => p.id === id));

    return (
        <>
            <h1>Shopping Cart</h1>
            {cartProducts?.length > 0 ? (
                cartProducts.map(product => {
                    if (!product) return null;
                    return (
                        <Link key={product.id} href={"/products/" + product.id}>
                            <h2>{product.name}</h2>
                            <p>${product.price}</p>
                        </Link>

                    )
                })
            ) : (
                <p>Your cart is empty.</p>
            )}
        </>
    )
}