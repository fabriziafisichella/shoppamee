import ProductCard from "../ProductCard/ProductCard";
import style from "./productlist.module.scss";

const ProductList = ({
  list = [],
  showIcon = true,
  isOnCart = false,
  name,
}) => {
  return (
    <>
      <div className={style.title}>{name}</div>

      <div className={style.container}>
        {list.map((product, index) => {
          return (
            <ProductCard
              key={index}
              product={product}
              showIcon={showIcon}
              isOnCart={isOnCart}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
