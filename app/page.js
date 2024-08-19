"use client";
import style from "./page.module.scss";
import Login from "@/app/components/Login/Login";

export default function user() {
  return (
    <main className={style.container}>
      <p className={style.image}>
        <img src="https://i.imgur.com/uvdZfdL.gif" />
      </p>
      <Login />
      <div className={style.userButtons}>
        Register New Account
      </div>
    </main>
  );
}
