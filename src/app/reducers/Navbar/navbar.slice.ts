import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../../src/app/styles/store';

export interface NavbarState {
    isOpen: boolean;
}

const initialState: NavbarState = {
    isOpen: false,
};

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        setOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        },
    },
});

export const selectAddNavbar = (state: RootState) => state.navbar.isOpen;

export const { setOpen } = navbarSlice.actions;

export default navbarSlice.reducer;
