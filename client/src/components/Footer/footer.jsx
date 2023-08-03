import {Box, Typography, styled} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';


const Container= styled(Box)`
    background: #000000;
    height: 12vh;
    color: #fff;
    display: 'flex';
`

const Foot = () =>{ 
    return(
        <Container style={{display: 'flex', marginTop: 'auto'}}>
            <Typography style={{padding:"auto", margin:"auto"}}><PersonIcon style={{fontSize:'15',paddingTop:'3', marginTop:'0', marginRight:'2'}}/>&nbsp;Creator: Bhargavi</Typography>
            <Typography style={{padding:"auto", margin:"auto"}}><EmailIcon style={{fontSize:'15',paddingTop:'3', marginTop:'0', marginRight:'2'}}/>&nbsp;Contact: bhargavi131313@gmail.com</Typography>
            <Typography style={{padding:"auto", margin:"auto"}}><LinkedInIcon style={{fontSize:'15',paddingTop:'3', marginTop:'0', marginRight:'2'}}/>&nbsp;LinkedIn: linkedin.in/bhargavi-sharma</Typography>
        </Container>
    )
}

export default Foot;

