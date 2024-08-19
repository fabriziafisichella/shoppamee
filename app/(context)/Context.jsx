"use client";
import { createContext, useEffect, useState } from "react";
import fixingImages from "../utils/fixingImages";

export const globalContext = createContext();

const Context = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isListEmpty, setIsListEmpty] = useState(false);
  const [isFavEmpty, setIsFavEmpty] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const [topRated, setTopRated] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);

  const [prod, setProd] = useState([]);
  const [userShop, setUserShop] = useState([]);
  const [id, setId] = useState(null);
  const [selectProd, setSelectProd] = useState({});
  useEffect(() => {
    fetch("/api/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setUserShop(data.data));
  }, []);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = fixingImages(data);
        const pureProducts = filteredData.filter((_, index) => index < 35);
        const orderSortedData = pureProducts.reverse();

        setAllProducts(pureProducts);
        setNewProducts(orderSortedData);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/?title=${search}`)
      .then((res) => res.json())
      .then((data) => {
        const filteredData = fixingImages(data);

        const pureProducts = filteredData.filter((_, index) => index < 35);

        setSearchResult(pureProducts);

        if (pureProducts.length === 0) {
          setIsListEmpty(true);
        } else {
          setIsListEmpty(false);
        }
      });
  }, [search]);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${category}`)
      .then((res) => res.json())
      .then((data) => {
        const filteredData = fixingImages(data);
        const pureProducts = filteredData.filter((_, index) => index < 35);
        setCategoryProducts(pureProducts);
      });
  }, [category]);

  useEffect(() => {
    if (favourites.length === 0) {
      setIsFavEmpty(true);
    } else {
      setIsFavEmpty(false);
    }
  }, [favourites]);

  useEffect(() => {
    if (cartList.length === 0) {
      setIsCartEmpty(true);
    } else {
      setIsCartEmpty(false);
    }
  }, [cartList]);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/?price_min=10&price_max=98`)
      .then((res) => res.json())
      .then((data) => {
        const filteredData = fixingImages(data);
        const pureProducts = filteredData.filter((_, index) => index < 35);
        const sortedData = pureProducts.sort((a, b) => a.price - b.price);
        const orderSorterData = sortedData
          .map((e) => ({
            price: e.price,
            title: e.title,
            images: e.images,
            id: e.id,
            description: e.description,
          }))
          .reverse();
        setTopRated(orderSorterData);
      });
  }, []);

  const value = {
    allProducts,
    favourites,
    setFavourites,
    cartList,
    setCartList,
    setSearch,
    searchResult,
    isListEmpty,
    isFavEmpty,
    isCartEmpty,
    topRated,
    newProducts,
    prod,
    setProd,
    userShop,
    selectProd,
    setSelectProd,
    id,
    setId,
    setCategory,
    categoryProducts,
  };
  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
};

export default Context;
