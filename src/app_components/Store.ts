import { create } from "zustand";

interface StoreQuery {
  activeNav: string;
  setActiveNav: (activeNav: string) => void;
}

const useStoreQuery = create<StoreQuery>((set) => ({
  activeNav: "Home",
  setActiveNav: (activeNav) =>
    set(() => ({
      activeNav: activeNav,
    })),
}));


export default useStoreQuery