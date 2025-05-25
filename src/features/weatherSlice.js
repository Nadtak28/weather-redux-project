


import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios';
let cancelAxios=null;

export const fetchWeather=createAsyncThunk("weatherApi/fetchWeather",async()=>{

const response= await 
axios.get(

    "https://api.openweathermap.org/data/2.5/weather?lat=44.2&lon=10.99&appid=c6e1d347d027c64952dbf76fd472eec8",
    {cancelToken:new axios.CancelToken((c)=>{
cancelAxios=c;
    })}
)
console.log(response);
const teampnumber=Math.round(response.data.main.temp-272.15);
const min=Math.round(response.data.main.temp_min-272.15);
const max=Math.round(response.data.main.temp_max-272.15);
const description=response.data.weather[0].description;
const icon=response.data.weather[0].icon;

// setWeather({
//     number:teampnumber,
//     min,
//     max,
//     description,
//     icon:`http://openweathermap.org/img/wn/${icon}@2x.png`
// })

  return {
    number: teampnumber,
    min,
    max,
    description,
    icon: `http://openweathermap.org/img/wn/${icon}@2x.png`,
  };


})


const weatherSlice=createSlice({

name:"weather",
initialState:{
    result:null,
    isLoading:false,
    weather:{}
},

reducers:{

changeResult:(state,action)=>{
state.result="change";
}

},

extraReducers(builder){
    builder.addCase(fetchWeather.pending,(state,action)=>{
state.isLoading=true;
    }).addCase(fetchWeather.fulfilled,(state,action)=>{


state.isLoading=false;
state.weather=action.payload;
    }).addCase(fetchWeather.rejected,(state,action)=>{
state.isLoading=false;
    })
}
 

}
)

export const{changeResult}=weatherSlice.actions;

export default weatherSlice.reducer;