import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './slices/favorite';
import movieReducer from './slices/movies';

const StoredFavorites = JSON.parse(localStorage.getItem('favorites')) || [];


const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        movies: movieReducer,
    },
    preloadedState: {
        favorites: { favorites: StoredFavorites },
    },
});

export default store;
