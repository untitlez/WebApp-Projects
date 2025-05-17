import { create } from "zustand";

export const useAction = create((set) => ({
  alert: "",
  setAlert: (value) => set(() => ({ alert: value })),

  edit: true,
  setEdit: (value) => set(() => ({ edit: value })),

  select: "",
  setSelect: (value) => set(() => ({ select: value })),

  loading: false,
  setLoading: (value) => set(() => ({ loading: value })),
}));
