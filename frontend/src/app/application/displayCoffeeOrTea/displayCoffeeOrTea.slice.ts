import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface initialState {
  coffeeOrTea: 'coffee' | 'tea';
}

const initialState: initialState = {
  coffeeOrTea: 'coffee',
};

const coffeeOrTeaSlice = createSlice({
  name: 'coffeeOrTeaSlice',
  initialState,
  reducers: {
    setCoffeeOrTea: (state, action: PayloadAction<'coffee' | 'tea'>) => {
      state.coffeeOrTea = action.payload;
    },
  },
});

export const { setCoffeeOrTea } = coffeeOrTeaSlice.actions;

export default coffeeOrTeaSlice.reducer;
