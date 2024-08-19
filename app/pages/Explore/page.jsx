"use client";
import { useContext } from "react";
import { globalContext } from "@/app/(context)/Context";
import ProductList from "@/app/components/ProductList/ProductList";
import { GoBackButton } from "@/app/components/GoBackButton/GoBackButton";

export default function Explore() {
  const { newProducts } = useContext(globalContext);

  return (
    <main>
      <GoBackButton />
      <ProductList name="Explore" list={newProducts} />
    </main>
  );
}
