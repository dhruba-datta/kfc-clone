<template>
  <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 flex flex-col items-center relative overflow-hidden">
    <!-- Background Decoration -->
    <div class="absolute top-0 left-0 w-1/2 h-1/2 bg-red-500 opacity-10 transform -rotate-45"></div>
    <div class="absolute bottom-0 right-0 w-1/2 h-1/2 bg-white opacity-20 transform rotate-45"></div>

    <!-- Product Image -->
    <div class="w-full h-40 bg-gray-200 rounded mb-3 flex items-center justify-center relative z-10">
      <span class="text-gray-400">Image</span>
    </div>

    <!-- Product Details -->
    <h3 class="text-lg font-bold text-center mb-1 relative z-10">{{ item.name }}</h3>
    <p class="text-red-600 font-semibold mb-2 relative z-10">$ {{ item.price.toFixed(2) }}</p>

    <!-- Add to Cart / Counter -->
    <div class="w-full relative z-10">
      <div v-if="itemCount > 0" class="flex items-center justify-center space-x-2 mb-2">
        <button @click="decreaseCount" class="bg-gray-200 text-red-600 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 transition">-</button>
        <span class="text-lg font-semibold">{{ itemCount }}</span>
        <button @click="addToCart" class="bg-gray-200 text-red-600 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 transition">+</button>
      </div>
      <button
        v-else
        @click="addToCart"
        class="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition flex items-center justify-center"
      >
        <span>+ Add</span>
      </button>
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue';

export default {
  props: {
    item: Object
  },
  setup(props) {
    const cartStore = inject('cartStore');

    // Compute the number of this item in the cart
    const itemCount = computed(() => {
      return cartStore.getItems().filter(cartItem => cartItem.id === props.item.id).length;
    });

    // Add item to cart
    const addToCart = () => {
      cartStore.addItem(props.item);
    };

    // Decrease item count (remove one instance)
    const decreaseCount = () => {
      const items = cartStore.getItems();
      const index = items.findIndex(cartItem => cartItem.id === props.item.id);
      if (index !== -1) {
        cartStore.removeItem(index);
      }
    };

    return { itemCount, addToCart, decreaseCount };
  }
}
</script>

<style scoped>
@media (max-width: 767px) {
  .w-full {
    width: 100%;
  }
}

/* Ensure text and elements are above the background decoration */
.relative.z-10 {
  position: relative;
  z-index: 10;
}

/* Style the background decoration to match the image's red/white theme */
.absolute {
  z-index: 0;
}
</style>