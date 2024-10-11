import { createSlice } from "@reduxjs/toolkit";

interface IUiState {
  isScrolled: boolean;
  isSideMenuOpen: boolean;
  isReviewDialogOpen: boolean;
  inView: string;
}

const initialState: IUiState = {
  isScrolled: false,
  isSideMenuOpen: false,
  isReviewDialogOpen: false,
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
    setIsReviewDialogOpen: (state, action) => {
      state.isReviewDialogOpen = action.payload;
    },
    setInView: (state, action) => {
      state.inView = action.payload;
    },
  },
});

export const {
  setIsScrolled,
  setIsSideMenuOpen,
  setIsReviewDialogOpen,
  setInView,
} = uiNavigationSlice.actions;
export default uiNavigationSlice.reducer;
