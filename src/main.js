import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUser,
  faLocationDot,
  faMagnifyingGlass,
  faUtensils,
  faGlobe,
  faChevronDown,
  faLanguage,
  faFlag,
  faShoppingCart,
  faTrash,
  faBars,
  faTimes,
  // Add new icons for footer
  faBuilding,
  faFileSignature,
  faAddressBook,
  faTruck,
  faQuestionCircle,
  faHandshake,
  faBicycle,
  faBriefcase,
  faRecycle,
  faMobileScreen,
  faCommentDots,
  faCopyright,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  // Add brand icons for footer
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { cartStore } from "./store/cart";
import Cookies from "js-cookie";

library.add(
  faUser,
  faLocationDot,
  faMagnifyingGlass,
  faUtensils,
  faGlobe,
  faChevronDown,
  faLanguage,
  faFlag,
  faShoppingCart,
  faTrash,
  faGithub,
  faBars,
  faTimes,
  // Add new icons to library
  faBuilding,
  faFileSignature,
  faAddressBook,
  faTruck,
  faQuestionCircle,
  faHandshake,
  faBicycle,
  faBriefcase,
  faRecycle,
  faMobileScreen,
  faCommentDots,
  faCopyright,
  faCode,
  faFacebookF,
  faInstagram,
  faTwitter
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.provide("cartStore", cartStore);
app.use(router).mount("#app");
