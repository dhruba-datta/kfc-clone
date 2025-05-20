<template>
  <div :class="isPopup ? 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 lg:bg-none lg:static lg:flex lg:flex-col' : 'container mx-auto p-4'">
    <div :class="isPopup ? 'bg-kfcWhite rounded-lg w-full max-w-lg p-6 relative' : ''">
      <!-- Close Button (Mobile) -->
      <button 
        v-if="isPopup" 
        @click="$emit('close-cart')" 
        class="absolute top-4 right-4 text-gray-600 hover:text-gray-800 lg:hidden"
      >
        <font-awesome-icon icon="fa-solid fa-times" class="h-5 w-5" />
      </button>
      <h2 class="text-xl font-bold mb-4 text-gray-800">Your Cart</h2>
      <div v-if="cartItems.length === 0" class="text-gray-500">
        Your cart is empty.
      </div>
      <div v-else class="space-y-4">
        <div
          v-for="(item, index) in cartItems"
          :key="`${item.id}-${index}`"
          class="flex items-center justify-between bg-kfcWhite p-3 rounded shadow"
        >
          <div>
            <h4 class="font-semibold text-gray-800">{{ item.name }}</h4>
            <p class="text-sm text-gray-500">$ {{ item.price.toFixed(2) }}</p>
          </div>
          <button @click="removeItem(index)" class="text-kfcRed hover:text-red-700">
            <font-awesome-icon icon="fa-solid fa-trash" />
          </button>
        </div>
        <div class="border-t pt-3 text-right font-bold text-gray-800">
          Total: $ {{ totalPrice.toFixed(2) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  props: {
    isPopup: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const cartStore = inject('cartStore');
    return {
      cartItems: cartStore.getItems(),
      totalPrice: cartStore.getTotalPrice(),
      removeItem: cartStore.removeItem
    };
  }
};
</script>