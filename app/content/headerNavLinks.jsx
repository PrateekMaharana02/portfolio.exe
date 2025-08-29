import { LuBook, LuUser, LuTarget, LuLayout } from "react-icons/lu";

const headerNavLinks = [
  { title: "About", url: "/", icon: <LuUser color="#FFFFFF" /> },
  {
    title: "Projects",
    url: "/projects",
    icon: <LuTarget color="#FFFFFF" />,
  },
  { title: "Achievement", url: "/achievement", icon: <LuLayout color="#FFFFFF" /> },
  
];

export default headerNavLinks;
