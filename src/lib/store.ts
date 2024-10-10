import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "@/lib/features/ui/uiNavigationSlice";

// export const store = configureStore({
//   reducer: {
//     ui: uiReducer,
//   },
// });

export const makeStore = () => {
  return configureStore({
    reducer: {
      uiNavigation: uiReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
