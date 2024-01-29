import { create } from "zustand";

type CartItem = ProductData & { quantity: number };

type Store = {
  decreaseQuantity: any;
  increaseQuantity: any;
  cart: CartItem[];
  addToCart: (product: ProductData) => void;
  removeFromCart: (productId: string) => void;
};
function getInitialCart() {
  try {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error("Error parsing cart data from localStorage:", error);
    return [];
  }
}
export const useStore = create<Store>((set) => {
  const initialCart = getInitialCart();

  return {
    cart: initialCart,
    addToCart: (product) =>
      set((state) => {
        const productExists = state.cart.find((item) => item.id === product.id);
        if (productExists) {
          return {
            cart: state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        } else {
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }
      }),
    removeFromCart: (productId) =>
      set((state) => ({
        cart: state.cart.filter((product) => product.id !== productId),
      })),
    increaseQuantity: (id: string) =>
      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      })),
    decreaseQuantity: (id: string) =>
      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === id && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      })),
  };
});
