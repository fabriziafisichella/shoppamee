"use client";
import style from "./page.module.scss"
import ProductList from "@/app/components/ProductList/ProductList";
import SearchBar from "@/app/components/SearchBar/SearchBar";
import { useContext } from "react";
import { globalContext } from "@/app/(context)/Context";
export default function Search() {
  const { searchResult, isListEmpty } = useContext(globalContext);
  return (
    <main>
      <SearchBar />

      {isListEmpty ? (
        <div className={style.center}>Nothing matches!</div>
      ) : (
        <ProductList list={searchResult} />
      )}
    </main>
  );
}
