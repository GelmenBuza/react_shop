import useUser from '../stores/user_store.js';

const normalize = (likedProduct, id) => {
    if (likedProduct.includes(id)) {
        return [...likedProduct.filter(item => item !== id)];
    } else {
        return [...likedProduct, id];
    }
}

function useLike () {
    const likedProduct = useUser(state => state.favorite_product);
    const setLikedProduct = useUser(state => state.setFavoriteProduct);
    const toggleLike = (id) => {
        setLikedProduct(normalize(likedProduct, id))
    };
    const isLike = (id) => likedProduct.includes(id);

    return [isLike, toggleLike];
}

export default useLike;
