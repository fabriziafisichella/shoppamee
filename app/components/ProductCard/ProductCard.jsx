"use client";
import style from "./productcard.module.scss";
import { IoHeartCircleOutline, IoCloseCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { useContext } from "react";
import { globalContext } from "@/app/(context)/Context";

const ProductCard = ({
  product,
  refProp,
  showIcon = true,
  isOnCart = false,
  
}) => {

  const { setFavourites, favourites, setCartList, cartList } =
    useContext(globalContext);

  const handleClick = (e) => {
    setFavourites((prev) => {
      const newFavorites = [...prev, product.id];
      localStorage.setItem("favourites", JSON.stringify(newFavorites));
      
      return newFavorites ;   
    });
  };

  const handleClickCart = () => {
    setCartList((prev) => {
      const newCart = [...prev, product.id];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeFavourites = () => {
    setFavourites(favourites.filter((id) => id !== product.id));
    localStorage.setItem(
      "favourites",
      JSON.stringify(favourites.filter((id) => id !== product.id))
    );
    
  };
  const removeFromCart = () => {
    setCartList(cartList.filter((id) => id !== product.id));
    localStorage.setItem(
      "cart",
      JSON.stringify(cartList.filter((id) => id !== product.id))
    );
  };

  ;
  
  return (
      <div className={style.container} ref={refProp}>
      <Link className={style.links} href={`/pages/DetailProduct/${product.id}`}>
        <img
          src={product.images?.[0]}
          alt={product.title}
          className={style.image}
        />
      </Link>

      
      {showIcon ? (
        <IoHeartCircleOutline
          className={style.productIcon}
          onClick={handleClick}
        />
      ) : (
        <IoCloseCircleOutline
          className={style.productIcon}
          onClick={removeFavourites}
        />
      )}

      <Link className={style.links} href={`/pages/DetailProduct/${product.id}`}>
        <p className={style.productTitle}>
          {product.title} <b>${product.price}</b>
        </p>
      </Link>
      {isOnCart ? (
        <button className={style.productButton} onClick={removeFromCart}>
          Remove
        </button>
      ) : (
        <button className={style.productButton} onClick={handleClickCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
