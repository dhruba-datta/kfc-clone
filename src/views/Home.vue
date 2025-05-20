<template>
  <div class="flex flex-col lg:flex-row min-h-screen bg-yandexLight">
    <!-- Sticky Category Menu (Desktop) -->
    <aside class="hidden lg:block lg:w-1/5 sticky top-20 h-screen overflow-y-auto shadow-lg z-40">
      <nav class="bg-gradient-to-br from-kfcWhite to-gray-100 p-6 rounded-r-2xl h-full">
        <h3 class="text-xl font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-2">Categories</h3>
        <div class="space-y-3">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="scrollToSection(cat)"
            :class="[
              'block w-full text-left font-medium text-gray-700 px-4 py-2 rounded-lg transition-all duration-200',
              activeSection === cat ? 'bg-kfcRed text-kfcWhite shadow-md transform scale-105' : 'hover:bg-gray-200 hover:text-gray-900'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-4 space-y-12 pt-24 lg:pt-4">
      <section v-for="category in categories" :key="category" :id="category" class="scroll-mt-20">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">{{ category }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          <MenuItem
            v-for="item in filteredItems(category)"
            :key="item.id"
            :item="item"
          />
        </div>
      </section>
    </main>

    <!-- Sticky Cart Sidebar (Desktop) -->
    <Cart class="hidden lg:block lg:w-1/4 sticky top-20 h-screen overflow-y-auto bg-kfcWhite shadow-inner p-4 z-40" />

    <!-- Mobile Cart Button -->
    <button
      class="lg:hidden fixed bottom-4 right-4 bg-kfcRed text-kfcWhite p-4 rounded-full shadow-lg hover:bg-red-700 transition z-50"
      @click="$emit('open-cart')"
    >
      <font-awesome-icon icon="fa-solid fa-shopping-cart" class="h-6 w-6" />
      <span v-if="cartItems.length" class="absolute -top-2 -right-2 bg-kfcWhite text-kfcRed rounded-full px-2 text-sm">{{ cartItems.length }}</span>
    </button>
  </div>
</template>

<script>
import MenuItem from '../components/MenuItem.vue';
import Cart from './Cart.vue';
import { menuItems } from '../data/menuItems';
import { inject } from 'vue';

export default {
  components: {
    MenuItem,
    Cart
  },
  data() {
    return {
      activeSection: '',
      categories: ['Buckets', 'Burgers', 'Fries', 'Drinks', 'Desserts'],
      menuItems: menuItems
    };
  },
  setup() {
    const cartStore = inject('cartStore');
    return {
      cartItems: cartStore.getItems()
    };
  },
  methods: {
    filteredItems(category) {
      return this.menuItems.filter(item => item.category === category);
    },
    scrollToSection(category) {
      const el = document.getElementById(category);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    handleScroll() {
      const scrollY = window.scrollY;
      let current = '';
      for (const cat of this.categories) {
        const section = document.getElementById(cat);
        if (section && section.offsetTop <= scrollY + 100) {
          current = cat;
        }
      }
      this.activeSection = current;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.scroll-mt-20 {
  scroll-margin-top: 80px;
}
</style>