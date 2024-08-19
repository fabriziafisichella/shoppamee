"use client";
import ShopForm from "@/app/components/ShopForm/ShopForm";
import ShopItemList from "@/app/components/ShopItemList/ShopItemList";
import { useContext } from "react";
import { globalContext } from "@/app/(context)/Context";
import { GoBackButton } from "@/app/components/GoBackButton/GoBackButton";
const shop = () => {
  const { userShop } = useContext(globalContext);
  return (
    <main>
      <GoBackButton />
      <ShopForm />
      <ShopItemList list={userShop} />
      
    </main>
  );
};

export default shop;
