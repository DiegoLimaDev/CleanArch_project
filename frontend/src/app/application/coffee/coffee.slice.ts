import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Coffee } from '../../domain/entities/coffee';
import { CoffeeServiceImpl } from '../../domain/useCases/coffee.service';
import { CoffeeRepositoryImpl } from '../../infra/coffee.repository';

interface initialState {
  coffeeLoading: boolean;
  coffees: Coffee[];
}

const initialState: initialState = {
  coffeeLoading: false,
  coffees: [],
};

export const fetchCoffees = createAsyncThunk(
  'coffeeSlice/fetchCoffees',
  async () => {
    const coffeeRepo = new CoffeeRepositoryImpl();
    const coffeeService = new CoffeeServiceImpl(coffeeRepo);
    const coffess = await coffeeService.getAll();
    return coffess;
  },
);

export const coffeeSlice = createSlice({
  name: 'coffeeSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoffees.fulfilled, (state, action) => ({
      ...StaticRange,
      coffees: action.payload,
      coffeeLoading: false,
    }));
    builder.addCase(fetchCoffees.pending, (state) => ({
      ...state,
      coffeeLoading: true,
    }));
    builder.addCase(fetchCoffees.rejected, (state) => ({
      ...state,
      coffeeLoading: false,
    }));
  },
});

export default coffeeSlice.reducer;
