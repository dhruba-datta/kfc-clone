import { reactive } from "vue";
import Cookies from "js-cookie";

export const cartStore = reactive({
  items: Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [],
  addItem(item) {
    this.items.push(item);
    Cookies.set("cart", JSON.stringify(this.items), { expires: 7 });
  },
  removeItem(index) {
    this.items.splice(index, 1);
    Cookies.set("cart", JSON.stringify(this.items), { expires: 7 });
  },
  getItems() {
    return this.items;
  },
  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0);
  },
});
