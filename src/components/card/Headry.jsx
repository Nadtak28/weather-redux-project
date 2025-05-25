
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import useLocale from '../../hooks/useLocale';
import useTime from '../../hooks/useTime';



export default function Headery(){

const{t}=useLocale();
const{time}=useTime();

return(
<div dir='rtl' className=' flex justify-start items-end'> 

<Typography variant='h2' style={{justifyContent:"center",
        alignItems:"center",fontWeight:"200",marginRight:20
    }}  >
{t("ryiad")}
 </Typography>

<Typography variant='h5' style={{justifyContent:"center",
        alignItems:"center",fontWeight:"200",marginRight:20
    }}  >
{time}       </Typography>


</div>
   

);

}