import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            const movie = action.payload;
            state.favorites.push(movie);
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        },
        removeFavorite: (state, action) => {
            const movieId = action.payload;
            state.favorites = state.favorites.filter((movie) => movie.id !== movieId);
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        },
        REMOVE_ITEM: (state, action) => {
            const itemId = action.payload;
            state.favorites = state.favorites.filter((movie) => movie.id !== itemId);
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        },
    },
});

export const { addFavorite, removeFavorite ,REMOVE_ITEM} = favoritesSlice.actions;

export default favoritesSlice.reducer;