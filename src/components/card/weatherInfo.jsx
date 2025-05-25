import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import useWeather from '../../hooks/useWeather';
import useLocale from '../../hooks/useLocale';
import { CircularProgress } from "@mui/material";

export default function WeatherInfo() {

const{
  weather,
  isLoading
}=useWeather();

const{t}=useLocale();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      dir="rtl"
      sx={{ gap: 2, mt: 4 }}
    >
      {/* Temperature */}
<div className='flex justify-center items-center'>


      <Typography variant="h1" textAlign="right" alignItems="end">

{isLoading?<CircularProgress style={{color:"white"}}/>:weather.number
}
      </Typography>

{weather.icon && <img src={weather.icon} alt="weather icon" />}

</div>




      {/* Clouds State */}
      <Typography variant="h6" textAlign="center">
{weather.description}
      </Typography>

<div className='flex justify-between items-center'>
  {/* Min Temperature */}
      <Typography variant="h6" textAlign="center">
{t("min"+" :")} {weather.min}
      </Typography>
    
     <Typography variant="h6" textAlign="center" margin="0px 5px" >
         |
      </Typography>
    
{/* Max Temperature */}
      <Typography variant="h6" textAlign="center">
{t("max"+" :")} {weather.max}
      </Typography>

</div>
    
    </Box>
  );
}
