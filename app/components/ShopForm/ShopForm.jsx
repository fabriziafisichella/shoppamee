"use client";
import style from "./shopform.module.scss";
import { useRef } from "react";

const ShopForm = () => {
  const titleInput = useRef(null);
  const priceInput = useRef(null);
  const descriptionInput = useRef(null);
  const imagesInput = useRef(null);

  const addNewProduct = async () => {
    const newProduct = {
      title: titleInput.current.value,
      price: priceInput.current.value,
      description: descriptionInput.current.value,
      images: imagesInput.current.value,
    };
    await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
    });
  };
  return (
    <div className={style.container}>

      <form type="submit" className={style.form}>
        <input
          type="text"
          className={style.halfInput}
          placeholder="Title"
          ref={titleInput}
        />
        <input
          type="text"
          className={style.halfInput}
          placeholder="Price"
          ref={priceInput}
        />
        <textarea
          type="text"
          className={style.wholeInput}
          placeholder="Description"
          ref={descriptionInput}
        />
        <input
          type="text"
          className={style.wholeInputURL}
          placeholder="URL Image"
          ref={imagesInput}
        />

        <button type="submit" onClick={addNewProduct}>
          ADD PRODUCT
        </button>
      </form>
    </div>
  );
};

export default ShopForm;
