import style from "./banner.module.scss";
import { useRouter } from "next/navigation";

const Banner = ({}) => {
  const router = useRouter();

  return (
    <>
      <div className={style.exploreContainer}>
        <div className={style.exploreImage}>
          <div className={style.exploreText}>
            <p>
              shop <span className={style.exploreAlt}>smart</span>
            </p>
            <p>
              <span className={style.exploreAlt}>live</span> better
            </p>
          </div>
          <div
            className={style.exploreButton}
            onClick={() => router.push("/pages/Explore")}
          >
            Explore »
          </div>
        </div>
      </div>

      <div className={style.mottoContainer}>
        <div className={style.mottoSections}>
          <div className={style.motto}>
            <p>quality,</p>
            <p className={style.altCol}>convenience,</p>
            <p>satisfaction.</p>
          </div>
          <div className={style.mottoImage}></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
