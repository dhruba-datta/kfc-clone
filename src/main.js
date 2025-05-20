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
  faHourglassHalf, // ADDED: Import the hourglass icon
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { cartStore } from "./store/cart";
import { createI18n } from "vue-i18n";

// Import your translation files
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
  faTwitter,
  faHourglassHalf // ADDED: Add the hourglass icon to the library
);

// Create i18n instance
const i18n = createI18n({
  legacy: false, // Recommended for Vue 3
  locale: localStorage.getItem("lang") || "en", // Get language from local storage or default to 'en'
  fallbackLocale: "en", // Fallback if a translation is missing
  messages: {
    en: enMessages, // Assign imported messages
    bn: bnMessages,
    hi: hiMessages,
  },
});

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.provide("cartStore", cartStore);
app.use(router);
app.use(i18n); // Use the correctly configured i18n instance
app.mount("#app");

// REMOVED THE DUPLICATE/CONFLICTING I18N SETUP FROM HERE
