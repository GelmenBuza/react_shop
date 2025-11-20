import { useCallback } from "react";

function useLike (likedProducts, setLikedProduct) {
    const toggleLike = useCallback((id) => {
        setLikedProduct((prev) => {
        if (prev.includes(id)) {
            return [...prev.filter(item => item !== id)];
        } else {
            return [...prev, id];
        }
        })
    }, []);

    const isLike = (id) => likedProducts.includes(id);

    return [isLike, toggleLike];
}

export default useLike;
