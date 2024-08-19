"use client";
import style from "./category.module.scss";
import { categoryList } from "@/app/utils/categoryList";
import { globalContext } from "@/app/(context)/Context";
import { useContext } from "react";
import { useRouter } from "next/navigation";

const Category = () => {

  const router = useRouter();
  const {setCategory} = useContext (globalContext);
 
   return (
     <div className={style.categoryList}>
       {categoryList.map((item, index) => (
         <div key={index} className={style.categoryItem}>
           <div className={style.categoryInfo}>
             <p className={style.title}>{item.name}</p>
             <p
               className={style.seeAll}
               onClick={() => {
                 setCategory(item.id);
                 router.push("/pages/Category");
               }}
             >
               See all »
             </p>
           </div>
           <div className={style.categoryImage}>
             <img
               src={item.image}
               onClick={() => {
                 setCategory(item.id);
                 router.push("/pages/Category");
               }}
               alt={`${item.name} category`}
             />
           </div>
         </div>
       ))}

     </div>
   );
};

export default Category;