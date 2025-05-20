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
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { cartStore } from "./store/cart";
import { createI18n } from "vue-i18n";
import enMessages from "./locales/en.json";
import bnMessages from "./locales/bn.json";
import hiMessages from "./locales/hi.json";

// Add icons to library
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

// Create i18n instance
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("lang") || "en",
  fallbackLocale: "en",
  messages: {
    en: enMessages,
    bn: bnMessages,
    hi: hiMessages,
  },
});

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.provide("cartStore", cartStore);
app.use(router);
app.use(i18n);
app.mount("#app");
