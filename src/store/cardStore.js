import create from "zustand";

const useCardStore = create((set) => ({
  cards: [],
  setCards: (cards) => set({ cards }),
}));

export default useCardStore;
