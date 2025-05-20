<template>
  <div class="container mx-auto p-4">
    <h2 class="text-xl font-bold mb-4">Your Cart</h2>
    <div v-if="cartItems.length === 0" class="text-gray-500">
      Your cart is empty.
    </div>
    <div v-else class="space-y-4">
      <div
        v-for="(item, index) in cartItems"
        :key="`${item.id}-${index}`"
        class="flex items-center justify-between bg-white p-3 rounded shadow"
      >
        <div>
          <h4 class="font-semibold">{{ item.name }}</h4>
          <p class="text-sm text-gray-500">$ {{ item.price.toFixed(2) }}</p>
        </div>
        <button @click="removeItem(index)" class="text-red-500 hover:text-red-700">
          <font-awesome-icon :icon="['fas', 'trash']" />
        </button>
      </div>
      <div class="border-t pt-3 text-right font-bold">
        Total: $ {{ totalPrice.toFixed(2) }}
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const cartStore = inject('cartStore');

    return {
      cartItems: cartStore.getItems(),
      totalPrice: cartStore.getTotalPrice(),
      removeItem: cartStore.removeItem
    };
  }
}
</script>