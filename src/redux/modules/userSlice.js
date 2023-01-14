import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../redux/api/instance";

const initialState = {
  userinfo: {},
  isLoading: true,
  error: false,
  auth: false,
};

export const __postSignin = createAsyncThunk(
  "userSlice/__postSignin",
  async (arg, thunkAPI) => {
    try {
      const signInData = await instance.post(`/user/login`, arg, {
        // withCredentials: true,
      });

      return thunkAPI.fulfillWithValue(signInData?.data.message);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postSignup = createAsyncThunk(
  "userSlice/__postSignup",
  async (arg, thunkAPI) => {
    try {
      const signupData = await instance.post(`/user/signup`, arg);

      return thunkAPI.fulfillWithValue(signupData.data);
      // if (signupData.status === 201) {
      //   return thunkAPI.fulfillWithValue(signupData.data);
      // } else if (signupData.status === 412) {
      //   return thunkAPI.rejectWithValue(412);
      // } else if (signupData.status === 400) {
      //   return thunkAPI.rejectWithValue(400);
      // } else {
      //   return thunkAPI.rejectWithValue(403);
      // }
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __emailItem = createAsyncThunk(
  `userSlice/__emailItem`,
  async (payload, thunkAPI) => {
    try {
      const checkEmail = await instance.post(`user/email`, {
        email: payload.email,
      });

      if (checkEmail.status === 200) {
        return thunkAPI.fulfillWithValue(checkEmail.data);
      } else if (checkEmail.status === 400) {
        return thunkAPI.rejectWithValue(400);
      } else {
        return thunkAPI.rejectWithValue(401);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __nickItem = createAsyncThunk(
  "userSlice/__nickItem",
  async (payload, thunkAPI) => {
    try {
      const checkNick = await instance.post(`user/nickname`, {
        nickname: payload.nickname,
      });

      if (checkNick.status === 200) {
        return thunkAPI.fulfillWithValue(checkNick.data);
      } else if (checkNick.status === 400) {
        return thunkAPI.rejectWithValue(400);
      } else {
        return thunkAPI.rejectWithValue(401);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __logOut = createAsyncThunk(
  "userSlice/__logOut",
  async (payload, thunkAPI) => {
    try {
      const logout = await instance.post(`user/logout`, {
        // withCredentials: true,
      });
      // console.log("최종", logout);

      // if (logout.status === 204) {
      //   console.log(logout);
      //   return thunkAPI.fulfillWithValue(logout.message);
      // } else {
      //   return thunkAPI.rejectWithValue(400);
      // }
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(__emailItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__emailItem.fulfilled, (state, { data }) => {
        state.isLoading = false;
        state.error = false;
        state.userinfo = data;
      })
      .addCase(__emailItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      })

      .addCase(__nickItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__nickItem.fulfilled, (state, { data }) => {
        state.isLoading = false;
        state.error = false;
        state.userinfo = data;
      })
      .addCase(__nickItem.rejected, (state, data) => {
        state.isLoading = false;
        state.error = true;
      })

      .addCase(__postSignin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__postSignin.fulfilled, (state, data) => {
        state.userinfo = data;
        state.error = false;
        state.isLoading = true;
      })
      .addCase(__postSignin.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(__postSignup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__postSignup.fulfilled, (state, action) => {
        state.userinfo = action.payload;
        state.error = false;
        state.isLoading = true;
      })
      .addCase(__postSignup.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      }),
});

export default userSlice.reducer;
