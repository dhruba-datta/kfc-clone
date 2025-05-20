<template>
  <div class="flex flex-col lg:flex-row min-h-screen bg-yandexLight">
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

    <main class="flex-1 p-4 space-y-12 pt-24 lg:pt-24 overflow-y-auto"> 
      <section class="relative w-full h-[200px] md:h-[300px] rounded-xl overflow-hidden shadow-lg scroll-mt-20">
        <img
          src="../assets/hero.jpg"
          alt="KFC Hero Banner"
          class="w-full h-full object-cover object-center"
        />
        <div class="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
          <h1 class="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight">Craving KFC?</h1>
          <p class="text-base md:text-lg text-white max-w-md">
            Satisfy your hunger with our delicious chicken, burgers, and more!
          </p>
        </div>
      </section>

      <section v-if="searchQuery && filteredSearchResults.length > 0">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Search Results for "{{ searchQuery }}"</h2>
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          <MenuItem
            v-for="item in filteredSearchResults"
            :key="item.id"
            :item="item"
          />
        </div>
      </section>

      <section v-else-if="searchQuery && filteredSearchResults.length === 0" class="text-center py-10">
        <font-awesome-icon icon="fa-solid fa-face-sad-tear" class="text-gray-400 text-6xl mb-4" />
        <h2 class="text-2xl font-bold text-gray-700 mb-2">No results found for "{{ searchQuery }}"</h2>
        <p class="text-gray-500">Please try a different search term or browse our categories.</p>
      </section>

      <section v-else v-for="category in categories" :key="category" :id="category" class="scroll-mt-20">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">{{ category }}</h2>
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          <MenuItem
            v-for="item in filteredItems(category)"
            :key="item.id"
            :item="item"
          />
        </div>
      </section>
    </main>

    <Cart class="hidden lg:block lg:w-1/4 sticky top-20 h-screen overflow-y-auto bg-kfcWhite shadow-inner p-4 z-40" />

    <button
      class="lg:hidden fixed bottom-4 right-4 bg-kfcRed text-kfcWhite p-4 rounded-full shadow-lg hover:bg-red-700 transition z-50"
      @click="showMobileCart = true"
    >
      <font-awesome-icon icon="fa-solid fa-shopping-cart" class="h-6 w-6" />
      <span v-if="cartItems.length" class="absolute -top-2 -right-2 bg-kfcWhite text-kfcRed rounded-full px-2 text-sm">{{ cartItems.length }}</span>
    </button>

    <div 
      v-if="showMobileCart" 
      class="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-end lg:hidden"
      @click.self="showMobileCart = false"
    >
      <div class="bg-kfcWhite w-full h-3/4 rounded-t-xl shadow-lg p-4 relative flex flex-col">
        <button 
          @click="showMobileCart = false" 
          class="absolute top-4 right-4 text-gray-600 hover:text-gray-800 z-10"
        >
          <font-awesome-icon icon="fa-solid fa-times" class="h-6 w-6" />
        </button>
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>
        <Cart class="flex-1 overflow-y-auto" /> 
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from '../components/MenuItem.vue';
import Cart from './Cart.vue'; // Assuming Cart.vue is in the same directory or correctly imported
import { menuItems } from '../data/menuItems';
import { inject } from 'vue';

export default {
  components: {
    MenuItem,
    Cart
  },
  // Props received from parent (e.g., App.vue)
  props: {
    searchQuery: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      activeSection: '',
      categories: ['Chicken', 'Deals', 'Burgers', 'Box Meals', 'Snacks', 'Beverages', 'Dips'],
      menuItems: menuItems,
      showMobileCart: false // New data property for mobile cart visibility
    };
  },
  setup() {
    const cartStore = inject('cartStore');
    return {
      cartItems: cartStore.getItems()
    };
  },
  computed: {
    // Computed property to filter menu items based on the search query
    filteredSearchResults() {
      if (!this.searchQuery) {
        return []; // Return empty if no search query
      }
      const query = this.searchQuery.toLowerCase();
      return this.menuItems.filter(item =>
        item.name.toLowerCase().includes(query)
      );
    }
  },
  methods: {
    // Filters items by category when no search query is active
    filteredItems(category) {
      return this.menuItems.filter(item => item.category === category);
    },
    scrollToSection(category) {
      const el = document.getElementById(category);
      // Adjusted scroll-margin-top to account for header height
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    handleScroll() {
      const scrollY = window.scrollY;
      let current = '';
      for (const cat of this.categories) {
        const section = document.getElementById(cat);
        // Adjust offset for sticky header
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
    this.handleScroll(); // Call on mount to set initial active section
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.scroll-mt-20 {
  scroll-margin-top: 80px; /* Adjust for fixed header height */
}
</style>
