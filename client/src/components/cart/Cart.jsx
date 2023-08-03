
import { useSelector } from "react-redux/es/hooks/useSelector";
import {Box, Typography, Grid, styled, Button} from '@mui/material';

//components
import CartItem from "./cartItem";
import TotalBalance from "./TotalBalance";
import EmptyCart from "./EmptyCart";
import { post } from '../../utils/paytm';
import { payUsingPaytm } from '../../service/api.js';

const Container = styled(Grid)(({theme})=>({
    padding: '30px 135px',
    marginBottom:'10%',
    [theme.breakpoints.down('md')]:{
        padding: '15px'
    }
    
}))

const Header = styled(Box)`
    padding: 15px 24px;
`

const LeftComponent = styled(Grid)(({theme}) => ({
    paddingRight: 15,
    [theme.breakpoints.down('lg')]:{
        marginBottom:15
    }
}))


const Cart = () => {

    const {cartItems}= useSelector(state => state.cart);
    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'bhargavi131313@gmail.com'});
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
    }

    return(
        <>
        {
            cartItems.length ?
        <Container container item>
            <LeftComponent item lg={9} ms={9} sm={12} xs={12}>
                <Header style={{backgroundColor:'#fff'}}>
                    <Typography>
                        My Cart ({cartItems.length})
                    </Typography>
                </Header>
                {
                    cartItems.map((item, i)=>(
                        <CartItem item={item} key={i}/>
                    ))
                }

                <Box style={{padding:'16px 22px', backgroundColor:'#fff', boxShadow:'0 -2px 10px 0 rgb(0 0 0/10%)', borderTop:'1px solid #f0f0f0'}}>
                    <Button style={{display:'flex', marginLeft:'auto', backgroundColor:'#fb641b', color:'#fff', height:50, width:250, borderRadius:4}} onClick={() => buyNow()} >Place Order</Button>
                </Box>

            </LeftComponent>
            <Grid item lg={3} ms={3} sm={12} xs={12} >
                    <TotalBalance cartItems={cartItems} />
            </Grid>
        </Container>
        :
        <EmptyCart />
        }
        </>
    )
}

export default Cart;