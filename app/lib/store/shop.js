import { create } from "zustand";

export const useShop = create((set) => ({
  cart: [],
  setCart: (value) => set((state) => ({ cart: [...state.cart, value] })),
  setRemoveCart: (index) =>
    set((state) => ({ cart: state.cart.filter((_, i) => i !== index) })),

  totalPrice: 0,
  setTotalPrice: () =>
    set((state) => ({
      totalPrice: state.cart
        .reduce((sum, item) => sum + item.price, 0)
        .toFixed(2),
    })),

  resetShop: () => set(() => ({ totalPrice: 0, cart: [] })),
}));

export const useAction = create((set) => ({
  loading: false,
  setLoading: (value) => set(() => ({ loading: value })),

  disabled: false,
  setDisabled: (value) => set(() => ({ disabled: value })),

  payment: "Credit Card",
  setPayment: (value) => set(() => ({ payment: value })),

  bank: "",
  setBank: (value) => set(() => ({ bank: value })),
}));
