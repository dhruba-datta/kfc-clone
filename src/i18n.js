import { createI18n } from "vue-i18n";

// Translation messages
const messages = {
  en: {
    header: {
      searchPlaceholder: "Find in the restaurant",
      addressPlaceholder: "Enter address",
      login: "Login",
      language: "Language",
    },
    // Add all other English translations here
  },
  bn: {
    header: {
      searchPlaceholder: "রেস্তোরাঁয় খুঁজুন",
      addressPlaceholder: "ঠিকানা লিখুন",
      login: "লগইন",
      language: "ভাষা",
    },
    // Add all other Bengali translations here
  },
  hi: {
    header: {
      searchPlaceholder: "रेस्तरां में खोजें",
      addressPlaceholder: "पता दर्ज करें",
      login: "लॉग इन",
      language: "भाषा",
    },
    // Add all other Hindi translations here
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "en", // default language
  fallbackLocale: "en",
  messages,
});

export default i18n;
