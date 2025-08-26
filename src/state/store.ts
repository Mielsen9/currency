import { configureStore } from "@reduxjs/toolkit";
import { goverlaApi } from "@/api/goverla";

export const store = configureStore({
  reducer: {
    [goverlaApi.reducerPath]: goverlaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(goverlaApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;