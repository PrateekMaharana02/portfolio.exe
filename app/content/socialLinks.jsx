import { LuGithub } from "react-icons/lu";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaHashnode,
  FaSpotify,
} from "react-icons/fa6";
import { SiLeetcode, SiPeerlist } from "react-icons/si";

const socialLinks = [
  {
    id: "github",
    name: "Github",
    url: "https://github.com/PrateekMaharana02",
    icon: <LuGithub size={20} color="#FFFFFF" />,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/prateekm02/",
    icon: <FaLinkedinIn size={20} color="#FFFFFF" />,
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "https://x.com/PrateekM2706",
    icon: <FaXTwitter size={20} color="#FFFFFF" />,
  },
  
];

export default socialLinks;
