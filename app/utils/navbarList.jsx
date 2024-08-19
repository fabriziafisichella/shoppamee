import {
  RiShoppingCart2Fill,
  RiShoppingCart2Line,
} from "react-icons/ri";
import { TbLayoutList, TbLayoutListFilled } from "react-icons/tb";
import { BiSearchAlt2, BiSolidSearchAlt2 } from "react-icons/bi";
import {
  FaRegHeart,
  FaHeart,
} from "react-icons/fa";

export const navbarList = [
  {
    name: "Search",
    icon: <BiSearchAlt2 />,
    active: <BiSolidSearchAlt2 />,
    src: "/pages/Search",
  },
  {
    name: "Catalog",
    icon: <TbLayoutList />,
    active: <TbLayoutListFilled />,
    src: "/pages/Categories",
  },
  {
    name: "Faves",
    icon: <FaRegHeart />,
    active: <FaHeart />,
    src: "/pages/Favorites",
  },
  {
    name: "Cart",
    icon: <RiShoppingCart2Line />,
    active: <RiShoppingCart2Fill />,
    src: "/pages/Cart",
  },
];
