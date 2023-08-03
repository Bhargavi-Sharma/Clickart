import {Box, styled, Button} from "@mui/material";
import {ShoppingCart as Cart, FlashOn as Flash} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addToCart} from '../../redux/actions/cartActions';
import { useState } from "react";
import { payUsingPaytm } from '../../service/api.js';
import { post } from "../../utils/paytm.js";



const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px 20px',
    border: '2px solid #f2f2f2',
    width: '95%'
});

const StyleButton = styled(Button)(({ theme }) => ({
    width: "48%",
    height: "50px",
    borderRadius:"4px",
    cursor:"pointer",
    [theme.breakpoints.down('lg')]:{
        width: '46%'
    },
    [theme.breakpoints.down('sm')]:{
        width:"48 %"
    }
}));

const ActionItem = ({product}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [quantity, setQuantity]= useState(1);

    const {id}= product;

    const addItemToCart = () =>{
        dispatch(addToCart(id, quantity));
        navigate ('/cart');
    }

    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'bhargavi131313@gmail.com'});
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
    }


    return(
        <LeftContainer>
        <Image src={product.detailUrl} /><br />
        <StyleButton onClick={() => addItemToCart()} style={{marginLeft:7, marginRight: 10, background: '#ff9f00'}} variant="contained"><Cart />Add to Cart</StyleButton>
        <StyleButton style={{background: '#fb641b'}} variant="contained" onClick={() => buyNow()}><Flash /> Buy Now</StyleButton>
    </LeftContainer>
    )  
};

export default ActionItem;