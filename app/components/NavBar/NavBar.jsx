"use client";

import Link from "next/link";
import style from "./navbar.module.scss";
import { navbarList } from "@/app/utils/navbarList.jsx";
import { useState } from "react";

const NavBar = () => {
  const [navElement, setNavElement] = useState("");

  const handleActive = (e) => {
    setNavElement(e.target.innerText);
  };



  return (
    <div className={style.container}>
      {navbarList.map((item, index) => (
        <div key={index} className={style.button} onClick={handleActive}>
          <Link href={item.src}>
            {item.name === navElement ? (
              <>
                <p className={style.iconActive}>{item.active}</p>
                <p className={style.active}>{item.name}</p>
              </>
            ) : (
              <>
                <p className={style.icon}>{item.icon}</p>
                <p className={style.linkBox}>{item.name}</p>
              </>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
