import {configureStore} from '@reduxjs/toolkit';
import favouriteColorsSlice from "./state/favouriteColorsSlice";

const store = configureStore({
    reducer: {
        favouriteColors: favouriteColorsSlice
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;