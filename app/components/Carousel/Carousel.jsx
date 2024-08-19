"use client";
import styles from "./carousel.module.scss";
import { FaCircleArrowLeft } from "react-icons/fa6"; 
import { FaCircleArrowRight } from "react-icons/fa6"; 
import ProductCard from "../ProductCard/ProductCard";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const Carousel = ({ list = [], name, path }) => {
  const router  = useRouter();
  const carouselContainerRef = useRef();
  const ProductCardRef = useRef([]);

  const HandleArrowClick = (type) => {
    const ProductCardWidth = ProductCardRef.current?.offsetWidth;
    type === "left"
      ? carouselContainerRef.current?.scroll({
          top: 0,
          left: carouselContainerRef.current.scrollLeft - ProductCardWidth,
          behavior: "smooth",
        })
      : carouselContainerRef.current?.scroll({
          top: 0,
          left: carouselContainerRef.current.scrollLeft + ProductCardWidth,
          behavior: "smooth",
        });
  };

  const handleSeeAllClick = () => {
    router.push(`/pages/${path}`);
  };

  return (
    <section className={styles.carouselWrapper}>
      <div className={styles.carouselInfo}>
        <p className={styles.carouselTitle}>{name}</p>
        <p className={styles.carouselMore} onClick={handleSeeAllClick}>See all »</p>
      </div>
      <div className={styles.carouselArrowsWrapper}>
        <FaCircleArrowLeft
          className={styles.carouselArrow}
          onClick={() => {
            HandleArrowClick("left");
          }}
        />
        <FaCircleArrowRight
          className={styles.carouselArrow}
          onClick={() => {
            HandleArrowClick("right");
          }}
        />
      </div>
      <section className={styles.carouselContainer} ref={carouselContainerRef}>
        {list.map((product, index) => (
          <ProductCard refProp={ProductCardRef} key={index} product={product} />
        ))}
      </section>
    </section>
  );
};

export default Carousel;
