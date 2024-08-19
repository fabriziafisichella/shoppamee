"use client";
import style from "./page.module.scss";
import ProductList from "@/app/components/ProductList/ProductList";
import { useContext, useEffect, useState } from "react";
import { globalContext } from "@/app/(context)/Context";
import fixingImages from "@/app/utils/fixingImages";
import { GoBackButton } from "@/app/components/GoBackButton/GoBackButton";
 
export default function Cart() {
  const { cartList, setCartList, isCartEmpty } = useContext(globalContext);
  const [responseCartList, setResponseCartList] = useState([]);

  useEffect(() => {
    const cartFromStorage = localStorage.getItem("cart");
    if (cartFromStorage) {
      if (JSON.parse(cartFromStorage).length && !cartList.length) {
        setCartList(JSON.parse(cartFromStorage));
        return;
      }
    }

    setResponseCartList([]);
    cartList.forEach((cartListId) => {
      if (cartListId) {
        fetch(`https://api.escuelajs.co/api/v1/products/${cartListId}`)
          .then((res) => res.json())
          .then((product) =>
            setResponseCartList((prev) => fixingImages([...prev, product]))
          );
      }
    });
  }, [cartList]);

  return (
    <main>
      <GoBackButton />

      <main className={style.container}>
        <h1>Your Cart</h1>

        {isCartEmpty ? (
          <div className={style.message}>Your list is empty!</div>
        ) : (
          <ProductList isOnCart={true} list={responseCartList} />
        )}
      </main>
    </main>
  );
}
