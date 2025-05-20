<template>
  <div class="min-h-screen flex flex-col bg-yandexLight">
    <Header />
    <main class="flex-1 pt-20">
      <router-view @open-cart="showCartPopup = true" />
    </main>
    <Footer />
    <!-- Cart Popup (Mobile) -->
    <Cart v-if="showCartPopup" is-popup @close-cart="showCartPopup = false" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Cart from './views/Cart.vue';

export default {
  components: {
    Header,
    Footer,
    Cart
  },
  data() {
    return {
      showCartPopup: false
    };
  }
};
</script>