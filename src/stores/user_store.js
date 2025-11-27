import { create } from 'zustand'

const getInitialEmail = () => {
    try {
        const data = localStorage.getItem('user');
        return data ? JSON.parse(data).email : '';
    } catch {
        return '';
    }
};

const getInitialPassword = () => {
    try {
        const data = localStorage.getItem('user');
        return data ? JSON.parse(data).password : '';
    } catch {
        return '';
    }
};

const getInitialLikesOrCart = (key) => {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};

const setLocal = (key, newFavorite) => {
    localStorage.setItem(key, JSON.stringify(newFavorite));
    return newFavorite;
}

const useUser = create((set) => ({
    user: {
        email: getInitialEmail(),
        password: getInitialPassword(),
    },
    favorite_product: getInitialLikesOrCart('liked'),
    cart_product: getInitialLikesOrCart('cart'),

    
    setUserEmail: (email) => set((state) => ({ 
        user: {...state.user, email}
    })),

    setUserPassword: (password) => set((state) => ({ 
        user: {...state.user, password}
    })),

    setFavoriteProduct: (newFavorite) => set(() => ({
        favorite_product: setLocal('liked', newFavorite)
    })),

    setCart: (newCart) => set(() => ({
        cart_product: setLocal('cart', newCart)
    })),


    logout: () => set({
        user: {
            email: '',
            password: '',
        },
    })
}));

export default useUser;