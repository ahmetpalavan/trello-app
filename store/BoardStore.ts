import { getTodosGroupedByColumn } from "@/lib/getTodosGroupedByStatus";
import { create } from "zustand";

interface BoardStore {
  board: Board;
  getBoard: () => void;
}

export const useBoardStore = create<BoardStore>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },
  getBoard: async () => {
    const board = await getTodosGroupedByColumn();
    set({ board: board });
  },
}));
