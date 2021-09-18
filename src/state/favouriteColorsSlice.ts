import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface FavouriteColorsState {
    favouritesColorsIds: number[];
}

const saveFavouriteColorsInLocalStorage = (state: number[]): void => {
    localStorage.setItem('favouritesColorsIds', JSON.stringify(state));
};


const loadFavouriteColorsFromLocalStorage = (): number[] => {
    return JSON.parse(localStorage.getItem('favouritesColorsIds') || '[]');
};

const initialState: FavouriteColorsState = {
    favouritesColorsIds: loadFavouriteColorsFromLocalStorage()
};


export const favouriteColorsSlice = createSlice({
    name: 'favouriteColors',
    initialState,
    reducers: {
        toggleLike: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const index = state.favouritesColorsIds.indexOf(id);
            state.favouritesColorsIds.includes(id) ? state.favouritesColorsIds.splice(index, 1) : state.favouritesColorsIds.push(id);
            state.favouritesColorsIds = [...state.favouritesColorsIds];
            saveFavouriteColorsInLocalStorage(state.favouritesColorsIds);
        }

    }
});

export const {toggleLike} = favouriteColorsSlice.actions;
export default favouriteColorsSlice.reducer;