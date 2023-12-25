import { configureStore } from '@reduxjs/toolkit';
import { dishReducer } from './DishSlice';

export const store = configureStore({ reducer: { dish: dishReducer } });