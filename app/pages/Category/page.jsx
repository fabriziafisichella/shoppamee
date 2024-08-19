"use client";
import ProductList from "@/app/components/ProductList/ProductList";

import { useContext } from "react";
import { globalContext } from "@/app/(context)/Context.jsx";
import { GoBackButton } from "@/app/components/GoBackButton/GoBackButton";

export default function Category() {
  const { categoryProducts } = useContext(globalContext);
  return (
    <main>
      
      <GoBackButton />
      <ProductList list={categoryProducts} />
      
    </main>
  );
}
