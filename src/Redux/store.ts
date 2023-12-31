import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Features/Counter/counterSlice';
import logger from './Middlewares/logger';

const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	// devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
