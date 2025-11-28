import useUser from '../stores/user_store.js';

const normalize = (cartProduct, id, type) => {
    const newProduct = { id, count: 0 };

    for (const product of cartProduct) {
        if (product.id === id) {
            newProduct.count = product.count
        }
    }
    switch (type) {
        case 'add':
            newProduct.count = newProduct.count + 1;
            break;
        case 'minus':
            newProduct.count -= 1;
            break;
        default:
            newProduct.count = 0;
            break;
    }
    const newCart = [...cartProduct.filter(product => product.id !== id), newProduct].filter(product => product.count > 0);
    return newCart;
}

function useCart() {
    const cartProduct = useUser(state => state.cart_product);
    const setCart = useUser(state => state.setCart);
    const toggleCart = (id, type) => {
        setCart(normalize(cartProduct, id, type));
    };
    const isCart = (id) => cartProduct.some((product) => product.id === id);

    return [isCart, toggleCart];
}

export default useCart;
