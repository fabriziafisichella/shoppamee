import style from "./gobackbutton.module.scss";

import { RxDoubleArrowLeft } from "react-icons/rx";
import { useRouter } from "next/navigation";

export function GoBackButton() {
  const router = useRouter();

  return (
    <div className={style.goBack} onClick={() => router.back()}>
      <RxDoubleArrowLeft className={style.icon} />
      <p className={style.back}>Back</p>
    </div>
  );
}
