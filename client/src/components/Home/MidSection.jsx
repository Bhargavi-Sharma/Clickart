import {Grid, Box, styled} from '@mui/material';
import {imageURL} from "../../constants/data.js";

const Wrapper = styled(Grid)`
    margin-top:10px;
    justify-content: space-between;
    display: flex;
`

const Image = styled('img')(({theme}) =>({
    marginTop: 10,
    width: "100%",
    justifyContent: "space-between",
    display: "flex",
    [theme.breakpoints.down('md')]:{
        objectFit: 'cover',
        height: '120px'
    }
}));

const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return(
        <>
            <Wrapper item lg={12} sm={12} md={12} xs={12} container>
                {
                    imageURL.map((image, i) => (
                        <Grid item lg={4} md={4} sm={12} xs={12} key={i} container>
                            <img src={image} alt='image' style={{width:'100%'}} />
                        </Grid>
            
                    ))
                }

            </Wrapper>
            <Image src={url} alt="covid" />
        </>
    )
}

export default MidSection;