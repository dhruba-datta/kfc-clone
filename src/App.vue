<template>
  <div class="min-h-screen flex flex-col bg-yandexLight">
    <Header />
    <main class="flex-1 pt-20">
      <router-view @open-cart="showCartPopup = true" />
    </main>
    <Footer />
    <Cart v-if="showCartPopup" is-popup @close-cart="showCartPopup = false" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Cart from './views/Cart.vue';
import { useI18n } from 'vue-i18n';

export default {
  components: {
    Header,
    Footer,
    Cart
  },
  setup() {
    const { locale } = useI18n()
    // Set initial language from localStorage or browser preference
    const savedLang = localStorage.getItem('lang')
    if (savedLang) {
      locale.value = savedLang
    } else {
      const browserLang = navigator.language.substring(0, 2)
      if (['en', 'bn', 'hi'].includes(browserLang)) {
        locale.value = browserLang
      }
    }
  },
  data() {
    return {
      showCartPopup: false
    }
  }
}
</script>