"use client";

import ProductList from "@/app/components/ProductList/ProductList";
import { globalContext } from "@/app/(context)/Context";
import { useContext } from "react";
import { GoBackButton } from "@/app/components/GoBackButton/GoBackButton";
export default function TopRated() {
  const { topRated } = useContext(globalContext);
  return (
    <main>
      <GoBackButton />
      <ProductList list={topRated} name='Top Rated'/>
    </main>
  );
}
