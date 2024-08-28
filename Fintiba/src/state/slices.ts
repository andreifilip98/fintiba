import { createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
  name: "updateUser",
  initialState: {
    name: "",
    email: "",
    picture: "",
  },
  reducers: {
    setProfile(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.picture = action.payload.picture;
    },
    deleteProfile(state) {
      state.name = "";
      state.email = "";
      state.picture = "";
    }
  }
})

export const { setProfile, deleteProfile } = profileSlice.actions
export default profileSlice.reducer