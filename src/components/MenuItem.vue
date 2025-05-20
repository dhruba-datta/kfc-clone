<template>
  <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100">
    <!-- Product Image -->
    <div class="relative aspect-square overflow-hidden">
      <img 
        :src="item.image" 
        :alt="item.name" 
        class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      >
    </div>

    <!-- Product Content -->
    <div class="p-4 flex flex-col flex-grow">
      <!-- Price at the top -->
      <div class="mb-2">
        <span class="text-2xl font-extrabold text-kfcRed">৳{{ item.price.toFixed(2) }}</span>
        <span v-if="item.originalPrice" class="text-sm text-gray-400 line-through ml-2">৳{{ item.originalPrice.toFixed(2) }}</span>
      </div>

      <!-- Product Name and Description -->
      <div class="mb-4">
        <h3 class="text-lg font-bold text-gray-900">{{ item.name }}</h3>
        <p class="text-gray-500 text-sm mt-1 line-clamp-2">{{ item.description }}</p>
      </div>

      <!-- Add to Cart Button at Bottom -->
      <div class="mt-auto pt-2">
        <transition name="fade" mode="out-in">
          <button
            v-if="itemCount === 0"
            key="add"
            @click.stop="addToCart"
            class="w-full py-2 px-4 bg-kfcRed hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
          >
            Add to Cart
          </button>

          <div
            v-else
            key="quantity"
            class="flex items-center justify-between bg-gray-100 rounded-lg p-1"
          >
            <button
              @click.stop="decreaseCount"
              class="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors"
            >
              <span class="text-kfcRed text-lg font-bold">−</span>
            </button>
            
            <span class="text-gray-700 font-medium mx-1 min-w-[20px] text-center">
              {{ itemCount }}
            </span>
            
            <button
              @click.stop="addToCart"
              class="w-9 h-9 flex items-center justify-center rounded-full bg-kfcRed hover:bg-red-700 transition-colors"
            >
              <span class="text-white text-lg font-bold">+</span>
            </button>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue';

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const cartStore = inject('cartStore');

    const itemCount = computed(() => {
      return cartStore.getItems().filter(cartItem => cartItem.id === props.item.id).length;
    });

    const addToCart = () => {
      cartStore.addItem(props.item);
    };

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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(5px);
}

/* Smooth transitions for interactive elements */
button {
  transition: all 0.15s ease;
}

/* Consistent rounded corners */
.rounded-xl {
  border-radius: 0.75rem;
}

/* Image hover effect */
img {
  backface-visibility: hidden;
  transform: translateZ(0);
}

/* Price emphasis */
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
</style>