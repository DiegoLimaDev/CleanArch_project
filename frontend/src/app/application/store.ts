import { configureStore } from '@reduxjs/toolkit';
import teaSlice from './tea/tea.slice';
import coffeeSlice from './coffee/coffee.slice';
import coffeeOrTeaSlice from './displayCoffeeOrTea/displayCoffeeOrTea.slice';

export const store = configureStore({
  reducer: {
    teaSlice,
    coffeeSlice,
    coffeeOrTeaSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
