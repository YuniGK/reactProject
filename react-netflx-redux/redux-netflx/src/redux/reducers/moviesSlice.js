import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/api";

let initialState = {
    movieList : []
    , selectedItem : null
    , isLoading : false
    , error : null
};

export const popularMovies = createAsyncThunk('movies/popular', async (thunkAPI)=> {
    try {
        let data = await api.get(`/movie/popular?language=ko-KR&page=1`);
        console.log('pop', data)
        return data.data.results;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message);
    }
});

export const topMovies = createAsyncThunk('movies/top', async (thunkAPI)=> {
    try {
        let data = api.get(`/movie/top_rated?language=ko-KR&page=1`);

        return data.data.results;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message);
    }
});

export const upcomingMovies = createAsyncThunk('movies/upcoming', async (thunkAPI)=> {
    try {
        let data = api.get(`/movie/upcoming?language=ko-KR&page=1`); 
        return data.data.results;
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
            .addCase(popularMovies.pending, (state)=>{
                //대기
                state.isLoading = true;
            })
            .addCase(popularMovies.fulfilled, (state, action)=>{
                //성공
                state.isLoading = false;
                state.movieList = action.payload;
            })
            .addCase(popularMovies.rejected, (state, action)=>{
                //에러
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(topMovies.pending, (state)=>{
                //대기
                state.isLoading = true;
            })
            .addCase(topMovies.fulfilled, (state, action)=>{
                //성공
                state.isLoading = false;
                state.movieList = action.payload;
            })
            .addCase(topMovies.rejected, (state, action)=>{
                //에러
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(upcomingMovies.pending, (state)=>{
                //대기
                state.isLoading = true;
            })
            .addCase(upcomingMovies.fulfilled, (state, action)=>{
                //성공
                state.isLoading = false;
                state.movieList = action.payload;
            })
            .addCase(upcomingMovies.rejected, (state, action)=>{
                //에러
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export default movieSlice.reducer;