import { createSlice } from "@reduxjs/toolkit";

interface IUiState {
  isScrolled: boolean;
  isSideMenuOpen: boolean;
  isReviewDialogOpen: boolean;
  isDescriptionDialogOpen: boolean;
  inView: string;
  windowHeight: number;
}

const initialState: IUiState = {
  isScrolled: false,
  isSideMenuOpen: false,
  isReviewDialogOpen: false,
  isDescriptionDialogOpen: false,
  inView: "hero",
  windowHeight: 0,
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
    setIsDescriptionDialogOpen: (state, action) => {
      state.isDescriptionDialogOpen = action.payload;
    },
    setInView: (state, action) => {
      state.inView = action.payload;
    },
    setWindowHeight: (state, action) => {
      state.windowHeight = action.payload;
    },
  },
});

export const {
  setIsScrolled,
  setIsSideMenuOpen,
  setIsReviewDialogOpen,
  setIsDescriptionDialogOpen,
  setInView,
  setWindowHeight,
} = uiNavigationSlice.actions;
export default uiNavigationSlice.reducer;
