"use client";
import style from "./page.module.scss";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { globalContext } from "@/app/(context)/Context";
import { FaRegHeart } from "react-icons/fa6";
import ProductList from "@/app/components/ProductList/ProductList";
import { GoBackButton } from "@/app/components/GoBackButton/GoBackButton";

export default function DetailProduct({ params }) {
  const [productDetail, setProductDetail] = useState([]);
  const { setCartList, setFavourites, allProducts } = useContext(globalContext);

  const handleClickCart = () => {
    setCartList((prev) => {
      const newCart = [...prev, productDetail.id];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const handleClick = () => {
    setFavourites((prev) => {
      const newFavorites = [...prev, productDetail.id];
      localStorage.setItem("favourites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };
  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetail(data)
      });
  }, [params.id]);

  if (!productDetail) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <GoBackButton />

      <div className={style.container}>
        <img className={style.image} src={productDetail.images} />

        <div className={style.infoBox}>
          <div className={style.info}>
            <p className={style.title}>{productDetail.title}</p>
            <p className={style.price}>${productDetail.price}</p>
          </div>
          <div className={style.addFav} onClick={handleClick}>
            <FaRegHeart className={style.iconHeart} />
          </div>
        </div>
        <div className={style.description}>{productDetail.description}</div>
        <button onClick={handleClickCart}>Add to cart</button>
      </div>

      <ProductList name="You may also like..." list={allProducts} />
    </main>
  );
}
