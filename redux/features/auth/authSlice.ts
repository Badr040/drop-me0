import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setCookie, getCookie, deleteCookie } from "cookies-next";

export interface IAuthState {
  token: string | null;
}

const initialState: IAuthState = {
  token:
    typeof window !== "undefined"
      ? getCookie("token")?.toString() || null
      : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;

      if (typeof window !== "undefined") {
        setCookie("token", action.payload.token, {
          maxAge: 60 * 60 * 24 * 7,
          path: "/",
        });
      }
    },
    logout: (state) => {
      state.token = null;

      if (typeof window !== "undefined") {
        deleteCookie("token", { path: "/" });
      }
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
