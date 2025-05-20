<template>
  <div class="flex flex-col lg:flex-row min-h-screen bg-yandexLight">
    <!-- Modern Sticky Menu Sidebar (Desktop) -->
    <aside class="hidden lg:block lg:w-[14%] sticky top-20 h-screen overflow-y-auto z-40">
      <nav class="bg-gradient-to-br from-white via-gray-100 to-gray-200 p-6 rounded-r-3xl shadow-xl h-full">
        <h3 class="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-300 pb-3 tracking-wide">Menu</h3>
        <ul class="space-y-3">
          <li v-for="cat in categories" :key="cat">
            <button
              @click="scrollToSection(cat)"
              :class="[
                'flex items-center gap-3 w-full text-left font-semibold px-4 py-3 rounded-xl transition-all duration-300',
                activeSection === cat 
                  ? 'bg-kfcRed text-white shadow-lg scale-[1.03]' 
                  : 'text-gray-700 hover:bg-gray-300/60 hover:text-black'
              ]"
            >
              <font-awesome-icon :icon="getCategoryIcon(cat)" class="w-5 h-5" />
              <span>{{ cat }}</span>
            </button>
          </li>
        </ul>
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
      categories: ['Chicken', 'Deals', 'Burgers', 'Box Meals', 'Snacks', 'Beverages', 'Dips'],
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
    },
    getCategoryIcon(category) {
      const icons = {
        Chicken: 'drumstick',
        Deals: 'tags',
        Burgers: 'hamburger',
        'Box Meals': 'box-open',
        Snacks: 'cookie-bite',
        Beverages: 'glass-water',
        Dips: 'bowl-spoon'
      };
      return ['fas', icons[category] || 'utensils'];
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
s