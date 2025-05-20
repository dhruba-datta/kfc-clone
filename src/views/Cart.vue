<template>
  <div>
    <h2 class="text-xl font-bold mb-4">Your Cart</h2>
    <div v-if="cartItems.length === 0" class="text-gray-500">
      Your cart is empty.
    </div>
    <div v-else class="space-y-4">
      <div
        v-for="(item, index) in cartItems"
        :key="index"
        class="flex items-center justify-between bg-white p-3 rounded shadow"
      >
        <div>
          <h4 class="font-semibold">{{ item.name }}</h4>
          <p class="text-sm text-gray-500">${{ item.price.toFixed(2) }}</p>
        </div>
        <button @click="removeItem(index)" class="text-red-500 hover:text-red-700">🗑️</button>
      </div>
      <div class="border-t pt-3 text-right font-bold">
        Total: ${{ totalPrice.toFixed(2) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: []
    }
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + item.price, 0)
    }
  },
  methods: {
    loadCart() {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]')
      this.cartItems = cart
    },
    removeItem(index) {
      this.cartItems.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(this.cartItems))
    }
  },
  mounted() {
    this.loadCart()
    window.addEventListener('storage', this.loadCart) // listen for localStorage updates
  },
  beforeUnmount() {
    window.removeEventListener('storage', this.loadCart)
  }
}
</script>
