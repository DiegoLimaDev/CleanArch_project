import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Tea } from '../../domain/entities/tea';
import { TeaServiceImpl } from '../../domain/useCases/tea.service';
import { TeaRepositoryImpl } from '../../infra/tea.repository';

interface initialState {
  teaLoading: boolean;
  teas: Tea[];
}

const initialState: initialState = {
  teaLoading: false,
  teas: [],
};

export const fetchTeas = createAsyncThunk('teaSlice/fetchTeas', async () => {
  const teaRepo = new TeaRepositoryImpl();
  const teaService = new TeaServiceImpl(teaRepo);
  const teas = await teaService.getAll();
  return teas;
});

export const teaSlice = createSlice({
  name: 'teaSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeas.fulfilled, (state, action) => ({
      ...state,
      teas: action.payload,
      teaLoading: false,
    }));
    builder.addCase(fetchTeas.pending, (state) => ({
      ...state,
      teaLoading: true,
    }));
    builder.addCase(fetchTeas.rejected, (state) => ({
      ...state,
      teaLoading: false,
    }));
  },
});

export default teaSlice.reducer;
