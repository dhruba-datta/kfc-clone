<template>
  <header class="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50">
    <div class="container mx-auto px-4">
      <!-- Main Header Row -->
      <div class="flex items-center justify-between h-20">
        <!-- Left - Logo, Search, Address -->
        <div class="flex items-center space-x-6 w-full max-w-3xl">
          <!-- Logo -->
          <div class="flex items-center space-x-2">
            <font-awesome-icon icon="fa-solid fa-utensils" class="text-red-600 text-xl" />
            <span class="text-red-600 font-bold text-2xl">KFC</span>
          </div>

          <!-- Search -->
          <div class="relative flex-1 hidden md:block">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Find in the restaurant"
              class="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
              @input="debouncedSearch"
            >
            <font-awesome-icon 
              icon="fa-solid fa-magnifying-glass" 
              class="absolute left-3 top-3.5 h-4 w-4 text-gray-400"
            />
            <!-- Search Results Dropdown -->
            <div v-if="filteredItems.length > 0" class="absolute top-full left-0 w-full bg-white border border-gray-200 mt-1 rounded-lg shadow-lg z-50">
              <ul>
                <li v-for="item in filteredItems" :key="item.id" class="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                  {{ item.name }} - ${{ item.price }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Address Button -->
          <button 
            @click="openAddressPopup"
            class="hidden md:flex items-center space-x-2 text-sm text-gray-800 hover:text-red-600 bg-gray-50 hover:bg-red-50 px-4 py-2.5 rounded-lg transition-colors duration-150"
          >
            <font-awesome-icon icon="fa-solid fa-location-dot" class="h-4 w-4 text-red-600" />
            <span>{{ deliveryAddress || 'Enter delivery address' }}</span>
          </button>
        </div>

        <!-- Right - Language & Login -->
        <div class="flex items-center space-x-4">
          <!-- Language Selector -->
          <div class="relative">
            <button 
              @click="showLanguageDropdown = !showLanguageDropdown"
              class="flex items-center space-x-2 text-sm text-gray-800 hover:text-red-600 bg-gray-50 hover:bg-red-50 px-4 py-2.5 rounded-lg transition-colors duration-150"
            >
              <font-awesome-icon icon="fa-solid fa-globe" class="h-4 w-4 text-red-600" />
              <span>EN</span>
              <font-awesome-icon icon="fa-solid fa-chevron-down" class="h-3 w-3 ml-1 text-gray-400" />
            </button>

            <!-- Dropdown -->
            <div 
              v-show="showLanguageDropdown"
              class="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-100"
            >
              <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                <font-awesome-icon icon="fa-solid fa-language" class="mr-2 h-4 w-4 text-red-600" />
                English
              </a>
              <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                <font-awesome-icon icon="fa-solid fa-language" class="mr-2 h-4 w-4 text-red-600" />
                Bengali
              </a>
              <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                <font-awesome-icon icon="fa-solid fa-language" class="mr-2 h-4 w-4 text-red-600" />
                Hindi
              </a>
            </div>
          </div>

          <!-- Login Button -->
          <button class="flex items-center space-x-2 text-sm text-gray-800 hover:text-red-600 bg-gray-50 hover:bg-red-50 px-4 py-2.5 rounded-lg transition-colors duration-150">
            <font-awesome-icon icon="fa-solid fa-user" class="h-4 w-4 text-red-600" />
            <span>Login</span>
          </button>
        </div>
      </div>

      <!-- Mobile - Search and Address -->
      <div class="md:hidden pb-3 space-y-2">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Find in the restaurant"
            class="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
            @input="debouncedSearch"
          >
          <font-awesome-icon 
            icon="fa-solid fa-magnifying-glass" 
            class="absolute left-3 top-3.5 h-4 w-4 text-gray-400"
          />
          <!-- Search Results Dropdown -->
          <div v-if="filteredItems.length > 0" class="absolute top-full left-0 w-full bg-white border border-gray-200 mt-1 rounded-lg shadow-lg z-50">
            <ul>
              <li v-for="item in filteredItems" :key="item.id" class="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                {{ item.name }} - ${{ item.price }}
              </li>
            </ul>
          </div>
        </div>
        <button 
          @click="openAddressPopup"
          class="flex items-center space-x-2 text-sm text-gray-800 hover:text-red-600 w-full pl-3 py-2.5 bg-gray-50 hover:bg-red-50 rounded-lg transition-colors duration-150"
        >
          <font-awesome-icon icon="fa-solid fa-location-dot" class="h-4 w-4 text-red-600" />
          <span>{{ deliveryAddress || 'Enter delivery address' }}</span>
        </button>
      </div>

      <!-- Address Popup -->
      <div 
        v-if="showAddressPopup" 
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div class="bg-white rounded-lg w-full max-w-lg p-6 relative">
          <!-- Close Button -->
          <button 
            @click="closeAddressPopup" 
            class="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          >
            <font-awesome-icon icon="fa-solid fa-times" class="h-5 w-5" />
          </button>

          <!-- Popup Content -->
          <h2 class="text-xl font-semibold mb-2">Enter delivery address</h2>
          <p class="text-sm text-gray-600 mb-4">Or else how will we know where to deliver?</p>

          <!-- Address Input -->
          <div class="relative mb-4">
            <input
              v-model="tempAddress"
              type="text"
              placeholder="Enter street and address number"
              class="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
            >
            <font-awesome-icon 
              icon="fa-solid fa-magnifying-glass" 
              class="absolute left-3 top-3.5 h-4 w-4 text-gray-400"
            />
          </div>

          <!-- Map Placeholder -->
          <div class="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
            <p class="text-gray-500">Map Placeholder (Centered on Almaty, Kazakhstan)</p>
          </div>

          <!-- OK Button -->
          <button 
            @click="saveAddress"
            class="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2.5 rounded-lg transition-colors duration-150"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Cookies from 'js-cookie';
import { menuItems } from '../data/menuItems.js';

export default {
  name: 'Header',
  data() {
    return {
      showLanguageDropdown: false,
      showAddressPopup: false,
      tempAddress: '',
      deliveryAddress: '',
      searchQuery: '',
      debounceTimeout: null,
      menuItems: menuItems,
      filteredItems: []
    };
  },
  methods: {
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.showLanguageDropdown = false;
      }
    },
    openAddressPopup() {
      this.showAddressPopup = true;
      this.tempAddress = this.deliveryAddress || '';
    },
    closeAddressPopup() {
      this.showAddressPopup = false;
    },
    saveAddress() {
      this.deliveryAddress = this.tempAddress;
      Cookies.set('deliveryAddress', this.deliveryAddress, { expires: 7 });
      this.closeAddressPopup();
    },
    debouncedSearch() {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(() => {
        if (this.searchQuery) {
          this.filteredItems = this.menuItems.filter(item =>
            item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
          console.log('Search triggered. Filtered Items:', this.filteredItems);
        } else {
          this.filteredItems = [];
        }
      }, 300); // 300ms debounce delay
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
    const savedAddress = Cookies.get('deliveryAddress');
    if (savedAddress) {
      this.deliveryAddress = savedAddress;
    }
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }
};
</script>

<style scoped>
/* Ensure content below header doesn't go behind it */
body {
  padding-top: 80px;
}

/* Ensure dropdown is positioned correctly */
.relative .absolute {
  position: absolute;
}
</style>