import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../redux/api/instance";
import { setCookie } from "../../shared/cookie";

const initialState = {
  userinfo: {},
  isLoading: true,
  error: true,
  auth: false,
};

export const __postSignin = createAsyncThunk(
  "userSlice/__postSignin",
  async (arg, thunkAPI) => {
    try {
      const signInData = await instance.post(`/user/login`, arg);
      /**************************************************
       * response의 '응답' 탭의 access_token을            *
       * "auth"라는 이름으로                              *
       * 쿠키에 저장해주는 setCookie                       *
       **************************************************/
      setCookie("auth", signInData.data.access_token);
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

export const __editUser = createAsyncThunk(
  "userSlice/__editUser",
  async (arg, thunkAPI) => {
    try {
      const editUser = await instance.patch(`/me`, arg);

      return thunkAPI.fulfillWithValue(editUser.data);
      // if (editUser.status === 201) {
      //   return thunkAPI.fulfillWithValue(editUser.data);
      // } else if (editUser.status === 412) {
      //   return thunkAPI.rejectWithValue(412);
      // } else if (editUser.status === 400) {
      //   return thunkAPI.rejectWithValue(400);
      // } else {
      //   return thunkAPI.rejectWithValue(403);
      // }
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __editpass = createAsyncThunk(
  "userSlice/__editpass",
  async (arg, thunkAPI) => {
    try {
      const editUser = await instance.patch(`/me/updatePassword`, arg);

      return thunkAPI.fulfillWithValue(editUser.data);
      // if (editUser.status === 201) {
      //   return thunkAPI.fulfillWithValue(editUser.data);
      // } else if (editUser.status === 412) {
      //   return thunkAPI.rejectWithValue(412);
      // } else if (editUser.status === 400) {
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

export const __myNick = createAsyncThunk(
  "userSlice/__nickItem",
  async (payload, thunkAPI) => {
    try {
      const checkNick = await instance.post(`me/myNickname`, {
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
      })

      .addCase(__editUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__editUser.fulfilled, (state, action) => {
        state.userinfo = action.payload;
        state.error = false;
        state.isLoading = true;
      })
      .addCase(__editUser.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      }),
});

export default userSlice.reducer;
