"use client";
import style from "./page.module.scss";
import { useContext } from "react";
import { globalContext } from "@/app/(context)/Context";
import Carousel from "@/app/components/Carousel/Carousel.jsx";
import Banner from "@/app/components/Banner/Banner.jsx";
;export default function Home() {
  const { topRated, allProducts } = useContext(globalContext);

  return (
    <main className={style.container}>
      <Banner />
      <Carousel name="Top rated" list={topRated} path="TopRated" />
      <Carousel name="New Products" list={allProducts} path="NewProducts"/>
    </main>
  );
}
