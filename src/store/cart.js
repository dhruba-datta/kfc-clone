// File: src/store/cart.js
import { reactive } from "vue";
import Cookies from "js-cookie";

// Initialize cart from cookies or empty array
const cart = reactive({
  items: JSON.parse(Cookies.get("cart") || "[]"),
});

// Save cart to cookies with 7-day expiry
const saveCart = () => {
  Cookies.set("cart", JSON.stringify(cart.items), { expires: 7 });
};

export const cartStore = {
  // Add item to cart
  addItem(item) {
    cart.items.push({ ...item });
    saveCart();
  },
  // Remove item at index
  removeItem(index) {
    cart.items.splice(index, 1);
    saveCart();
  },
  // Clear cart
  clearCart() {
    cart.items = [];
    saveCart();
  },
  // Get cart items
  getItems() {
    return cart.items;
  },
  // Get total price
  getTotalPrice() {
    return cart.items.reduce((sum, item) => sum + item.price, 0);
  },
};
