import { createSlice } from "@reduxjs/toolkit";

interface IUiState {
  isScrolled: boolean;
  isSideMenuOpen: boolean;
  inView: string;
}

const initialState: IUiState = {
  isScrolled: false,
  isSideMenuOpen: false,
  inView: "hero",
};

const uiNavigationSlice = createSlice({
  name: "uiNavigation",
  initialState,
  reducers: {
    setIsScrolled: (state, action) => {
      state.isScrolled = action.payload;
    },
    setIsSideMenuOpen: (state, action) => {
      state.isSideMenuOpen = action.payload;
    },
    setInView: (state, action) => {
      state.inView = action.payload;
    },
  },
});

export const { setIsScrolled, setIsSideMenuOpen, setInView } =
  uiNavigationSlice.actions;
export default uiNavigationSlice.reducer;
