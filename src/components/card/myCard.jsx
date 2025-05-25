import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Headery from './Headry';
import WeatherInfo from './weatherInfo';
import MyCloudIcon from './cloudIcon';

function MyCard() {
 


  return (
    <div className='h-full flex justify-center items-center '>

    <Card  sx={{
        direction:'rtl',
      minWidth: 200,
      flexDirection: 'column',
      paddingLeft: 7,
      paddingRight:7,
      borderRadius:15,
    color:"white",
    background:"rgb(28 52 91/36%)"
    }}>
      <CardContent sx={{ width: '100%', textAlign: 'center', }} >

        <Headery />
        <hr />


        <div className='flex justify-around'>
 <WeatherInfo/>
 <MyCloudIcon/>

        </div>
      
      
      </CardContent>
    </Card>
    </div>

  );
}

export default MyCard;
