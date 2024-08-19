import style from './shopitemlist.module.scss'
import ShopItemCard from "../ShopItemCard/ShopItemCard";

const ShopItemList = ({ list = [] }) => {
  return (
    <>
      <div className={style.container}>
        {list.map((product, index) => {
          return <ShopItemCard key={index} product={product} />;
        })}
      </div>
    </>
  );
};

export default ShopItemList;
