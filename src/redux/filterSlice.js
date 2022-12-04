import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: {
      reducer(_, action) {
        console.log(action);
        return action.payload;
      },
    },
    // setFilter(state, action) {
    //   console.log(state);
    //   return action.payload;
    // },
  },
});
// Експортуємо генератори екшенів та редюсер
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
