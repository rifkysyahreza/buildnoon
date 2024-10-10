import { createSlice } from "@reduxjs/toolkit";

interface IUiState {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  inView: string;
}

const initialState: IUiState = {
  isScrolled: false,
  isMobileMenuOpen: false,
  inView: "hero",
};

const uiNavigationSlice = createSlice({
  name: "uiNavigation",
  initialState,
  reducers: {
    setIsScrolled: (state, action) => {
      state.isScrolled = action.payload;
    },
    setIsMobileMenuOpen: (state, action) => {
      state.isMobileMenuOpen = action.payload;
    },
    setInView: (state, action) => {
      state.inView = action.payload;
    },
  },
});

export const { setIsScrolled, setIsMobileMenuOpen, setInView } =
  uiNavigationSlice.actions;
export default uiNavigationSlice.reducer;
