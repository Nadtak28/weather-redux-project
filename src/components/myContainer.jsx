import Container from '@mui/material/Container';
import MyCard from './card/myCard';
import MyButton from './button/myButton';




function MyContainer (){

    return(

        <Container maxWidth="sm"    
       className="flex-col  items-center rounded-xl  p-4 "
        >


<MyCard/>
<MyButton/>

            </Container>
    );

}

export default MyContainer;