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
    url: "https://github.com/ArpitMaurya15/",
    icon: <LuGithub size={20} color="#FFFFFF" />,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/arpit-maurya-27292133b/",
    icon: <FaLinkedinIn size={20} color="#FFFFFF" />,
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/arpitkm15",
    icon: <FaXTwitter size={20} color="#FFFFFF" />,
  },
  
];

export default socialLinks;
