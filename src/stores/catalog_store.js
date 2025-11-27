import { create } from 'zustand'

const useCatalog = create((set) => ({
    catalog: [],
    setCatalog: (newCatalog) => set({ catalog: newCatalog}),
}))

export default useCatalog;