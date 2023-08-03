
import {Box, styled, Button, Typography, Badge } from "@mui/material";
import {ShoppingCart} from "@mui/icons-material";
import LoginDialog from "../login/loginDialog";
import  {useState, useContext}  from "react";
import {DataContext}from "../../context/DataProvider";
import Profile from "./Profile";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux/es/hooks/useSelector";

const Wrapper= styled(Box)(({ theme }) => ({
    display:'flex',
    margin:'0 3% 0 auto',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: 16,
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            color: '#2874f0',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10
        }
    },
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));

const Container = styled(Link)(({ theme}) => ({
   display: 'flex',
   fontSize: '16px',
   margin: '0 3% 0 auto',
   textDecoration: 'none',
   ':hover': {
    color: 'black',
    backgroundColor: 'gold',
  },[theme.breakpoints.down('sm')]:{
    display:'block'
  }
}));

const Text = styled(Typography)`
`


const LoginButton= styled(Button)(({ theme}) => ({
    color: '#000000',
    background: '#FFD700',
    textTransform: 'none',
    padding: '5px 40px',
    borderRadius: '1px',
    boxShadow: 'none',
    fontWeight: '600',
    height: '32px',
    ':hover': {
        color: 'black',
        backgroundColor: 'white',
      },
}));

const CustomButton = () =>{
    const[open, setOpen]= useState(false);
    const {account, setAccount} = useContext(DataContext);
    const openDialog = () => {
        setOpen(true);
    }

    const {cartItems} = useSelector(state =>state.cart);

    return(
        <Wrapper>
            {
                account ? <Profile account={account} setAccount= {setAccount} />
                :
                <LoginButton variant="contained" onClick={()=> openDialog()}> Login </LoginButton>
            }
            
            
            <Text style={{marginTop:3, width:135, cursor:'pointer'}}>Become a Seller</Text>
            <Text style={{marginTop:3, cursor:'pointer'}}>More</Text>

            <Container to='/cart'>
                <Badge badgeContent={cartItems?.length} color="primary" >
                <ShoppingCart cursor='pointer' />
                </Badge>
                <Text style={{marginLeft:10, marginTop:3, cursor:'pointer'}}>Cart</Text>
            </Container>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}

export default CustomButton;