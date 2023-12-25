import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dishes: [],
    dish: {},
};

export const dishSlice = createSlice({
    name: 'dish',
    initialState,
    reducers: {
        setDishes: (state, { payload }) => {
            console.log('setDishes');
            state.dishes = payload;
        },
        setDish: (state, { payload }) => {
            console.log('setDish');
            state.dish = payload;
        },
        resetDish: (state) => {
            console.log('resetDish');
            state.dish = {};
        },
    },
});

export const dishReducer = dishSlice.reducer;

export const { setDishes, setDish, resetDish } = dishSlice.actions;
