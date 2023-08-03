
import {Box, Typography, styled} from '@mui/material';
import {navData} from '../../constants/data';

const Component= styled(Box)(({theme})=> ({
    display: 'flex',
    margin: '77px 130px 0 130px',
    backgroundColor: '#fff',
    
    justifyContent: 'space-between',
    overflow:'hidden',
    [theme.breakpoints.down('lg')]:{
        margin:0,
        paddingTop: '2%'
    }
}));
const Container= styled(Box)(({theme}) =>({
    padding: '12px 8px',
    textAlign: 'center',
    cursor:'pointer',
    ':hover': {
        color: 'theme.palette[color].main',
        backgroundColor: 'gold',
      },
}));

const Text=styled(Typography)(({theme}) =>({
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: 'inherit',
    cursor: 'pointer',
    ':hover': {
        color: 'theme.palette[color].main',
        backgroundColor: 'gold',
      },
}));


const NavBar =() =>{
    return(
        <Box style={{backgroundColor:'#fff'}}>
            <Component>
                {
                    navData.map((data,i)=>(
                        <Container key={i}>
                            <img src={data.url} alt="nav"  style={{width:65}}/>
                            <Text>{data.text}</Text>
                            </Container>
                    ))
                }

            </Component>
        </Box>
    )
}

export default NavBar;