import { NextResponse } from "next/server";
import Product from "@/app/model/product.js";

export async function GET() {
  try {
    const products = await Product.find();

    return NextResponse.json({ data: products });
  } catch (error) {
    console.log(error);
  }
}

/// per aggiungere prodotto
export async function POST(req) {
  const newProduct = await req.json();

  console.log(newProduct);

  try {
    const product = new Product({
      title: newProduct.title,
      price: newProduct.price,
      description: newProduct.description,
      images: newProduct.images,
    });
    product.save();

    return NextResponse.json({ message: "Added!" });
  } catch (error) {
    console.log(error);
  }
}
