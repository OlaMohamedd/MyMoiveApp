import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from './../../Config/instance';


export const movieAction=createAsyncThunk("movies/getall", async () => {
    const res = await axiosInstance.get(`/movie/popular`)
    return res.data.results;
})


const movieSlice = createSlice({
    name: "movies",
    initialState: { movies: []},
    extraReducers:(wee)=>{

        wee.addCase(movieAction.fulfilled,(state,action)=>{
          state.movies=action.payload
       })
    }
})


export default movieSlice.reducer