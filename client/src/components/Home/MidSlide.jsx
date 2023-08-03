
import Slide from "./Slide";
import { Box, styled } from "@mui/material";

const MainSlide = styled(Box)`
    display: flex;
`

const LeftSlide = styled(Box)(({theme}) => ({
    width: '83%',
    [theme.breakpoints.down('md')]:{
        width:'100%'
    }
}));

const RightSlide = styled (Box)(({theme}) => ({
    background: '#fff',
    padding: '5px',
    marginTop: '10px',
    marginLeft: '10px',
    width: '17%',
    textAlign: 'center',
    border: 'solid',
    borderColor: '#000000',
    [theme.breakpoints.down('md')]:{
        display: 'none'
    }
}));

const MidSlide = ({products, title,timer}) =>{
    const adURL = 'https://drive.google.com/uc?export=view&id=13g-LIzXhPF_-BCpv7uKfNbDIy6qdqbKu';
    return(
        <MainSlide>
            <LeftSlide>
                <Slide 
                products={products} 
                title={title} 
                timer={timer}/>
            </LeftSlide>
            <RightSlide>
                <img src={adURL} alt='AD' style={{width: 217, marginTop:17}} />
            </RightSlide>
        </MainSlide>
    )
}

export default MidSlide;