import style from "./shopitemmodify.module.scss";
import { useRef } from "react";

const ShopItemModify = ({ prod }) => {
  const titleInput = useRef(null);
  const priceInput = useRef(null);
  const descriptionInput = useRef(null);
  const imagesInput = useRef(null);

  const handleModifyItem = async () => {
    await fetch(`/api/products/${prod._id}`, {
      method: "PATCH",

      body: JSON.stringify({
        title: titleInput.current.value,
        price: priceInput.current.value,
        description: descriptionInput.current.value,
        images: imagesInput.current.value,
      }),
    });

    titleInput.current.value = "";
    priceInput.current.value = "";
    descriptionInput.current.value = "";
    window.location.reload();
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

        <button type="button" onClick={handleModifyItem}>
          Fatto!
        </button>
      </form>
    </div>
  );
};

export default ShopItemModify;
