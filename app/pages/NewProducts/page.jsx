"use client";

import ProductList from "@/app/components/ProductList/ProductList";
import { globalContext } from "@/app/(context)/Context";
import { useContext } from "react";
import { GoBackButton } from "@/app/components/GoBackButton/GoBackButton";
export default function NewProducts() {
  const { allProducts } = useContext(globalContext);
  return (
    <main>
      <GoBackButton  />
      <ProductList list={allProducts} name='New Products'/>
    </main>
  );
}
