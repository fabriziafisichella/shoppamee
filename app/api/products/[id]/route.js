import Product from "@/app/model/product";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const id = params.id;

  const product = await Product.findById(id);

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json({ product });
}

// per cancellare prodotto

export async function DELETE(_, { params }) {
  const id = params.id;

  const product = await Product.findById(id);

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  await product.deleteOne();

  return NextResponse.json({ message: "Product deleted" }, { status: 200 });
}

///per modificare prodotto

export async function PATCH(req, { params }) {
  try {
    const id = params.id;
    const productByBody = await req.json();

    const product = await Product.findById(id);

    if (!product) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    product.title = productByBody.title;
    product.price = productByBody.price;
    product.description = productByBody.description;
    product.images = productByBody.images;

    await product.save();

    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
