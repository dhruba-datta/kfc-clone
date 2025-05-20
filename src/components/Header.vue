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
              type="text"
              placeholder="Find in the restaurant"
              class="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
            >
            <font-awesome-icon 
              icon="fa-solid fa-magnifying-glass" 
              class="absolute left-3 top-3.5 h-4 w-4 text-gray-400"
            />
          </div>

          <!-- Address Button -->
          <button class="hidden md:flex items-center space-x-2 text-sm text-gray-800 hover:text-red-600 bg-gray-50 hover:bg-red-50 px-4 py-2.5 rounded-lg transition-colors duration-150">
            <font-awesome-icon icon="fa-solid fa-location-dot" class="h-4 w-4 text-red-600" />
            <span>Enter delivery address</span>
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
            type="text"
            placeholder="Find in the restaurant"
            class="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
          >
          <font-awesome-icon 
            icon="fa-solid fa-magnifying-glass" 
            class="absolute left-3 top-3.5 h-4 w-4 text-gray-400"
          />
        </div>
        <button class="flex items-center space-x-2 text-sm text-gray-800 hover:text-red-600 w-full pl-3 py-2.5 bg-gray-50 hover:bg-red-50 rounded-lg transition-colors duration-150">
          <font-awesome-icon icon="fa-solid fa-location-dot" class="h-4 w-4 text-red-600" />
          <span>Enter delivery address</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showLanguageDropdown: false
    }
  },
  methods: {
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.showLanguageDropdown = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }
}
</script>

<style scoped>
/* Ensure content below header doesn't go behind it */
body {
  padding-top: 80px;
}
</style>