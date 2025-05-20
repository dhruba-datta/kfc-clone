<template>
  <div :class="outerContainerClass">
    <div :class="innerContainerClass">
      <!-- Close Button (Mobile Modal Only) -->
      <button
        v-if="isPopup"
        @click="$emit('close-cart')"
        class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 lg:hidden"
      >
        <font-awesome-icon icon="fa-solid fa-times" class="h-5 w-5" />
      </button>

      <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-300 pb-2 tracking-wide">Your Cart</h2>

      <div v-if="cartItems.length === 0" class="text-center text-gray-500 py-10">
        <p class="text-lg">🛒 Your cart is empty.</p>
      </div>

      <div v-else class="space-y-4">
        <div
          v-for="(item, index) in cartItems"
          :key="`${item.id}-${index}`"
          class="flex items-center justify-between bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition"
        >
          <div>
            <h4 class="text-lg font-semibold text-gray-800">{{ item.name }}</h4>
            <p class="text-sm text-gray-500">$ {{ item.price.toFixed(2) }}</p>
          </div>
          <button
            @click="removeItem(index)"
            class="text-red-500 hover:text-red-700 transition"
          >
            <font-awesome-icon icon="fa-solid fa-trash" />
          </button>
        </div>

        <div class="border-t pt-4 text-right">
          <span class="text-lg font-bold text-gray-800">
            Total: $ {{ totalPrice.toFixed(2) }}
          </span>
        </div>

        <div class="pt-2 text-right">
          <button class="bg-kfcRed text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition shadow-md">
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue';
const props = defineProps({
  isPopup: {
    type: Boolean,
    default: false
  }
});

const cartStore = inject('cartStore');
const cartItems = cartStore.getItems();
const totalPrice = cartStore.getTotalPrice();
const removeItem = cartStore.removeItem;

// Computed classes
const outerContainerClass = computed(() =>
  props.isPopup
    ? 'fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 lg:bg-transparent lg:static lg:flex lg:flex-col'
    : 'container mx-auto p-6'
);

const innerContainerClass = computed(() =>
  props.isPopup
    ? 'bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-2xl rounded-3xl w-full max-w-xl p-6 relative'
    : 'bg-white p-6 rounded-2xl shadow-md w-full'
);
</script>
