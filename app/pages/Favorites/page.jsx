"use client";
import style from "./page.module.scss";
import ProductList from "@/app/components/ProductList/ProductList";
import { useContext, useEffect, useState } from "react";
import { globalContext } from "@/app/(context)/Context";
import fixingImages from "@/app/utils/fixingImages";
import { GoBackButton } from "@/app/components/GoBackButton/GoBackButton";

export default function Favorite() {
  const [listFavourites, setListFavourites] = useState([]);
  const { favourites, setFavourites, isFavEmpty } = useContext(globalContext);

  useEffect(() => {
    const favouritesFromStorage = localStorage.getItem("favourites");

    if (favouritesFromStorage) {
      if (JSON.parse(favouritesFromStorage).length && !favourites.length) {
        const favoriteFromStorageParsed = JSON.parse(favouritesFromStorage);
        const favoriteFromStorageFiltered = favoriteFromStorageParsed.filter(
          (item) => item !== null
        );
        localStorage.setItem(
          "favourites",
          JSON.stringify(favoriteFromStorageFiltered)
        );
        setFavourites(favoriteFromStorageFiltered);
        return;
      }
    }
    setListFavourites([]);
    favourites.forEach((favouriteId) => {
      if (favouriteId) {
        fetch(`https://api.escuelajs.co/api/v1/products/${favouriteId}`)
          .then((res) => res.json())
          .then((product) =>
            setListFavourites((prev) => {
              return fixingImages([...prev, product]);
            })
          );
      }
    });
  }, [favourites]);

  return (
    <>
      <GoBackButton />
      <main className={style.container}>
        <h1>Your Favorites</h1>

        {isFavEmpty ? (
          <div className={style.message}>Your list is empty!</div>
        ) : (
          <ProductList showIcon={false} list={listFavourites} />
        )}
      </main>
      </>
  );
}
