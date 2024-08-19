import style from "./shopitemcard.module.scss";
import Link from "next/link";

const ShopItemCard = ({ product }) => {
  const { title, price, description, images, _id } = product;
  const deleteProduct = async () => {
    const res = await fetch(`/api/products/${_id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    console.log(data);
    window.location.reload();
  };
  return (
    <div>
      <div className={style.container}>
        <button className={style.deleteButton} onClick={deleteProduct}>Delete Product</button>
        <img src={images} alt={title} className={style.image} />
        <div className={style.productTitle}>
          <p>{title}</p>
          <p><b>${price}</b></p>
        </div>
        <Link href={`/pages/user/shop/detail/${_id}`}>
          <button className={style.productButton}>Go to Detail Page</button>
        </Link>
      </div>
    </div>
  );
};

export default ShopItemCard;
