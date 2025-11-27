import { create } from 'zustand'

const useCategory = create((set) => ({
    categories: [],
    setCategories: (newCategories) => set({ categories: newCategories }),
}))

export default useCategory;