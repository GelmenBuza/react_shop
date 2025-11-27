import useUser from '../stores/user_store.js';

const normalize = (cartProduct, id) => {
    if (cartProduct.includes(id)) {
        return [...cartProduct.filter(item => item !== id)];
    } else {
        return [...cartProduct, id];
    }
}

function useCart () {
    const cartProduct = useUser(state => state.cart_product);
    const setLikedProduct = useUser(state => state.setFavoriteProduct);
    const toggleCart = (id) => {
        setLikedProduct(normalize(cartProduct, id))
    };
    const isCart = (id) => cartProduct.includes(id);

    return [isCart, toggleCart];
}

export default useCart;
