"use client";

import Link from "next/link";
import style from "./topbar.module.scss";
import { topbarList } from "@/app/utils/topbarList.jsx";
import { useState } from "react";

const TopBar = () => {
  const [navElement, setNavElement] = useState(topbarList[0].name);

  const handleActive = (e) => {
    setNavElement(e.target.innerHTML);
  };



  return (
    <div className={style.container}>
      {topbarList.map((item, index) => (
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
                <p className={style.active}>{item.name}</p>
              </>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TopBar;
