import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name:'gpt',
  initialState:{
    showGptSearch: false
  },
  reducers: {
    toggleGptSearchView : (state) =>{
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

const gptReducer = gptSlice.reducer
 export {gptReducer};

export const{ toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;