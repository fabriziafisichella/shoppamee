"use client";
import style from "./page.module.scss";
import { useEffect, useContext, useState } from "react";
import { globalContext } from "@/app/(context)/Context";
import ShopItemModify from "@/app/components/ShopItemModify/ShopItemModify";
import { GoBackButton } from "@/app/components/GoBackButton/GoBackButton";
const Detail = ({ params }) => {
  const { prod, setProd } = useContext(globalContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    fetch(`/api/products/${params.id}`)
      .then((res) => res.json())
      .then((res) => setProd(res.product));
  }, []);

  return (
    <div>
      <GoBackButton />

      <div className={style.container}>
        <img className={style.image} src={prod?.images} />

        <div className={style.infoBox}>
          <div className={style.info}>
            <p className={style.price}>${prod?.price}</p>
            <p className={style.title}>{prod?.title}</p>

            <p className={style.description}>{prod?.description} </p>
          </div>
        </div>

        <button
          onClick={() => {
            setIsActive(true);
          }}
        >
          Modifica
        </button>
        {isActive ? <ShopItemModify prod={prod} /> : null}
      </div>
    </div>
  );
};

export default Detail;
