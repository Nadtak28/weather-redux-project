import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchWeather } from "../features/weatherSlice";



export default function useWeather(){

const isLoading=useSelector((state)=>{
    return state.weather.isLoading;
})

const weather=useSelector((state)=>{
    return state.weather.weather;
})

const dispatch=useDispatch();


 useEffect(()=>{

dispatch(fetchWeather());

},[])

return{
    weather,
    isLoading
}
}