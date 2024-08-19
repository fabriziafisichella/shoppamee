"use client";
import style from "./page.module.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function user() {
  const router = useRouter();


  const [name, setName] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setName(localStorage.getItem("username"));
    }
  });


  return (
    <main className={style.container}>
      <h1>
        Hello, <span className={style.altCol}>{name}</span>!
      </h1>
      <img
        className={style.image}
        src="https://images.pexels.com/photos/972804/pexels-photo-972804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <div className={style.buttonContainer}>
        <button
          className={style.userButtons}
          onClick={() => {
            router.push("/pages/user/shop");
          }}
        >
          Go to your Shop
        </button>
        <button
          className={style.userButtons}
          onClick={() => {
            router.push("/pages/Cart");
          }}
        >
          Go to your Cart
        </button>

        <button
          className={style.button}
          onClick={() => {
            router.push("/");
          }}
        >
          Logout
        </button>
      </div>
    </main>
  );
}
