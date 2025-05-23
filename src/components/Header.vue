<template>
  <header class="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <div class="flex items-center md:space-x-6 space-x-2 w-full max-w-3xl">
          <div class="flex items-center space-x-2 flex-shrink-0">
            <font-awesome-icon icon="fa-solid fa-utensils" class="text-red-600 text-xl" />
            <span class="text-red-600 font-bold text-2xl">KFC</span>
          </div>

          <button 
            @click="openSearchPopup"
            class="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-50 hover:bg-red-50 transition-colors duration-150"
          >
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="h-4 w-4 text-gray-400" />
          </button>

          <div class="relative flex-1 hidden md:block">
            <input
              v-model="searchQuery"
              type="text"
              :placeholder="$t('header.searchPlaceholder')"
              class="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
              @input="debouncedSearch"
            >
            <font-awesome-icon 
              icon="fa-solid fa-magnifying-glass" 
              class="absolute left-3 top-3.5 h-4 w-4 text-gray-400"
            />
            </div>

          <button 
            @click="openAddressPopup"
            class="flex items-center space-x-1 text-sm text-gray-800 hover:text-red-600 bg-gray-50 hover:bg-red-50 px-2 py-2 md:px-4 md:py-2.5 rounded-lg transition-colors duration-150 w-[140px] md:w-[200px]"
          >
            <font-awesome-icon icon="fa-solid fa-location-dot" class="h-4 w-4 text-red-600 flex-shrink-0" />
            <span class="truncate text-xs md:text-sm">{{ deliveryAddress || $t('header.addressPlaceholder') }}</span>
          </button>
        </div>

        <div class="flex items-center space-x-2">
          <div class="relative">
            <button 
              @click="showLanguageDropdown = !showLanguageDropdown"
              class="flex items-center space-x-2 text-sm text-gray-800 hover:text-red-600 bg-gray-50 hover:bg-red-50 p-2 md:px-4 md:py-2.5 rounded-lg transition-colors duration-150"
            >
              <font-awesome-icon icon="fa-solid fa-globe" class="h-4 w-4 text-red-600" />
              <span class="hidden md:inline">{{ $t('header.language') }}</span>
            </button>

            <div 
              v-show="showLanguageDropdown"
              class="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-200"
            >
              <a href="#" @click.prevent="changeLanguage('en')" class="flex items-center px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                <font-awesome-icon icon="fa-solid fa-language" class="mr-2 h-4 w-4 text-red-600" />
                {{ $t('languages.english') }}
              </a>
              <a href="#" @click.prevent="changeLanguage('bn')" class="flex items-center px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                <font-awesome-icon icon="fa-solid fa-language" class="mr-2 h-4 w-4 text-red-600" />
                {{ $t('languages.bengali') }}
              </a>
              <a href="#" @click.prevent="changeLanguage('hi')" class="flex items-center px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                <font-awesome-icon icon="fa-solid fa-language" class="mr-2 h-4 w-4 text-red-600" />
                {{ $t('languages.hindi') }}
              </a>
            </div>
          </div>

          <button 
            @click="showUnderDevelopmentPopup = true"
            class="flex items-center space-x-2 text-sm text-gray-800 hover:text-red-600 bg-gray-50 hover:bg-red-50 p-2 md:px-4 md:py-2.5 rounded-lg transition-colors duration-150"
          >
            <font-awesome-icon icon="fa-solid fa-user" class="h-4 w-4 text-red-600" />
            <span class="hidden sm:inline">{{ $t('header.login') }}</span>
          </button>
        </div>
      </div>

      <div 
        v-if="showSearchPopup" 
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div class="bg-white rounded-lg w-full max-w-lg p-6 relative">
          <button 
            @click="closeSearchPopup" 
            class="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          >
            <font-awesome-icon icon="fa-solid fa-times" class="h-5 w-5" />
          </button>

          <h2 class="text-xl font-semibold mb-2">{{ $t('searchPopup.title') }}</h2>
          <p class="text-sm text-gray-600 mb-4">{{ $t('searchPopup.subtitle') }}</p>

          <div class="relative mb-4">
            <input
              v-model="searchQuery"
              type="text"
              :placeholder="$t('header.searchPlaceholder')"
              class="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
              @input="debouncedSearch"
            >
            <font-awesome-icon 
              icon="fa-solid fa-magnifying-glass" 
              class="absolute left-3 top-3.5 h-4 w-4 text-gray-400"
            />
          </div>

          </div>
      </div>

      <div 
        v-if="showAddressPopup" 
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div class="bg-white rounded-lg w-full max-w-lg p-6 relative">
          <button 
            @click="closeAddressPopup" 
            class="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          >
            <font-awesome-icon icon="fa-solid fa-times" class="h-5 w-5" />
          </button>

          <h2 class="text-xl font-semibold mb-2">{{ $t('addressPopup.title') }}</h2>
          <p class="text-sm text-gray-600 mb-4">{{ $t('addressPopup.subtitle') }}</p>

          <div class="relative mb-4">
            <input
              v-model="tempAddress"
              type="text"
              :placeholder="$t('addressPopup.inputPlaceholder')"
              class="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
              @input="debouncedSearchAddress"
            >
            <font-awesome-icon 
              icon="fa-solid fa-magnifying-glass" 
              class="absolute left-3 top-3.5 h-4 w-4 text-gray-400"
            />
          </div>

          <div id="map" class="w-full h-64 rounded-lg mb-4"></div>

          <button 
            @click="saveAddress"
            class="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2.5 rounded-lg transition-colors duration-150"
          >
            {{ $t('general.ok') }}
          </button>
        </div>
      </div>

      <div 
        v-if="showUnderDevelopmentPopup" 
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div class="bg-white rounded-lg w-full max-w-sm p-6 text-center relative">
          <button 
            @click="showUnderDevelopmentPopup = false" 
            class="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          >
            <font-awesome-icon icon="fa-solid fa-times" class="h-5 w-5" />
          </button>
          <font-awesome-icon icon="fa-solid fa-hourglass-half" class="text-red-600 text-5xl mb-4" />
          <h2 class="text-xl font-semibold mb-2">{{ $t('underDevelopmentPopup.title') }}</h2>
          <p class="text-sm text-gray-600 mb-4">{{ $t('underDevelopmentPopup.message') }}</p>
          <button 
            @click="showUnderDevelopmentPopup = false"
            class="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-150"
          >
            {{ $t('general.ok') }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Cookies from 'js-cookie';
// Removed menuItems import as filtering is now handled in Home.vue
import L from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import { useI18n } from 'vue-i18n';

export default {
  name: 'Header',
  setup() {
    const { locale } = useI18n()
    return { locale }
  },
  data() {
    return {
      showLanguageDropdown: false,
      showAddressPopup: false,
      showSearchPopup: false,
      showUnderDevelopmentPopup: false,
      tempAddress: '',
      deliveryAddress: '',
      searchQuery: '', // This will hold the search term
      debounceTimeout: null,
      addressDebounceTimeout: null,
      // Removed filteredItems as search results are displayed on Home page
      map: null,
      marker: null
    };
  },
  methods: {
    changeLanguage(lang) {
      this.locale = lang
      localStorage.setItem('lang', lang)
      this.showLanguageDropdown = false
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.showLanguageDropdown = false;
      }
    },
    openSearchPopup() {
      this.showSearchPopup = true;
      this.searchQuery = ''; // Clear search query when opening popup
      this.$emit('update-search', ''); // Emit empty search to clear results on Home page
    },
    closeSearchPopup() {
      this.showSearchPopup = false;
      this.searchQuery = ''; // Clear search query when closing popup
      this.$emit('update-search', ''); // Emit empty search to clear results on Home page
    },
    openAddressPopup() {
      this.showAddressPopup = true;
      this.tempAddress = this.deliveryAddress || '';
      this.$nextTick(() => {
        this.initMap();
      });
    },
    closeAddressPopup() {
      this.showAddressPopup = false;
      if (this.map) {
        this.map.remove();
        this.map = null;
        this.marker = null;
      }
    },
    saveAddress() {
      this.deliveryAddress = this.tempAddress;
      Cookies.set('deliveryAddress', this.deliveryAddress, { expires: 7 });
      this.closeAddressPopup();
    },
    // Debounced function to emit search query to parent
    debouncedSearch() {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(() => {
        this.$emit('update-search', this.searchQuery); // Emit the search query to parent
      }, 300); // 300ms debounce time
    },
    debouncedSearchAddress() {
      clearTimeout(this.addressDebounceTimeout);
      this.addressDebounceTimeout = setTimeout(() => {
        if (this.tempAddress) {
          this.searchAddress(this.tempAddress);
        }
      }, 500);
    },
    initMap() {
      if (this.map) return;
      this.map = L.map('map').setView([43.238949, 76.889709], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
      this.marker = L.marker([43.238949, 76.889709]).addTo(this.map);
    },
    async searchAddress(query) {
      try {
        const response = await axios.get('https://nominatim.openstreetmap.org/search', {
          params: {
            q: query,
            format: 'json',
            limit: 1
          }
        });

        if (response.data && response.data.length > 0) {
          const result = response.data[0];
          const lat = parseFloat(result.lat);
          const lon = parseFloat(result.lon);
          this.tempAddress = result.display_name;

          this.map.setView([lat, lon], 13);
          if (this.marker) {
            this.marker.setLatLng([lat, lon]);
          } else {
            this.marker = L.marker([lat, lon]).addTo(this.map);
          }
        }
      } catch (error) {
        console.error('Error searching address:', error);
      }
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
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  }
};
</script>

<style scoped>
body {
  padding-top: 80px;
}

.relative .absolute {
  position: absolute;
}

.leaflet-marker-icon {
  background-image: url('https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png');
}

.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 767px) {
  .w-full.max-w-3xl {
    flex-grow: 1;
  }
  .flex.items-center.space-x-2:last-child {
    flex-shrink: 0;
  }
}
</style>
