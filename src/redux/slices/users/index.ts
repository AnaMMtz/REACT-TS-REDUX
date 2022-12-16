import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UsersState {
  firstName: string | null;
}

const initialState: UsersState = {
  firstName: null
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<string | null>) => {
      state.firstName = action.payload;
    }
  }
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
