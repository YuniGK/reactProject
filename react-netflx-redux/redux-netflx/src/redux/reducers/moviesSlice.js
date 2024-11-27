import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
    movieList : []
    , selectedItem : null
    , isLoading : false
    , error : null
};

export const fetchMovies = createAsyncThunk('movies', async (searchQuery, thunkAPI)=> {
    try {
        
    } catch (error) {
        thunkAPI.rejectWithValue(error.message);
    }
});

const movieSlice = createSlice({
    name : "movies"
    , initialState
    , reducers : {},
    extraReducers : (builder)=>{
        builder
            .addCase(fetchMovies.pending, (state)=>{
                //대기
                state.isLoading = true;
            })
            .addCase(fetchMovies.fulfilled, (state, action)=>{
                //성공
                state.isLoading = false;
                state.movieList = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action)=>{
                //에러
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export default movieSlice.reducer;