import { products } from "@/app/product-data";
import { NextRequest } from "next/server";

type ShoppingCart = Record<string, string[]>;
type Params = {
  id: string;
};

const carts: ShoppingCart = {
  "1": ["123", "345"],
  "2": ["345", "456"],
  "3": ["234"],
};

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const userId = params.id;
  const productIds = carts[userId];
  const cartProducts = productIds.map((id) =>
    products.find((p) => p.id === id)
  );

  if (productIds === undefined) {
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify(cartProducts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
