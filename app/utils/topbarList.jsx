import {
  RiHomeSmileLine,
  RiHomeSmileFill
} from "react-icons/ri";
import {
  FaRegUserCircle,
  FaUserCircle,
} from "react-icons/fa";

export const topbarList = [
  {
    name: "Home",
    icon: <RiHomeSmileLine />,
    active: <RiHomeSmileFill />,
    src: "/pages/Home",
  },
  {
    name: "User",
    icon: <FaRegUserCircle />,
    active: <FaUserCircle />,
    src: "/pages/user",
  },
];
