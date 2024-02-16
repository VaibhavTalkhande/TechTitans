import {
  faHouseUser,
  faCircleInfo,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

export const MenuItems = [
  {
    title: "Home",
    url: "/",
    ClassName: "Nav-link",
    icon: "fa-solid fa-house-user",
  },
  {
    title: "Courses",
    url: "/about",
    ClassName: "Nav-link",
    icon: "fa-solid fa-circle-info",
  },
  {
    title: "Contact",
    url: "/contact",
    ClassName: "Nav-link",
    icon: "fa-solid fa-address-book",
  },
  {
    title: "Sign Up",
    url: "*",
    ClassName: "Nav-link-Signup",
  },
];
