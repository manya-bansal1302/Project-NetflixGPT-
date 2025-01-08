import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang : "en"
  },
  reducers: {
    changeLanguage: (state , action) => {
      state.lang = action.payload;
    },
  },
});

const configReducer = configSlice.reducer;
export {configReducer};


export  const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;