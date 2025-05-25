import { useEffect,useState } from 'react';

import moment from 'moment';

import "moment/min/locales"
moment.locale('ar'); 


export default function useTime(){
const[time,setTime]=useState("");

useEffect(()=>{
setTime(moment().format("MMM Do YYY, h:mm:ss a"));},[])

return{
    time
}
}