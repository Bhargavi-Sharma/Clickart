
import React from "react";
//from material ui
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, styled } from '@mui/material';
import { Menu } from '@mui/icons-material';

import { Link } from "react-router-dom";
//from components
import Search from './Search';
import CustomButton from "./CustomButton";
import { useState } from 'react';

const StyledHeader= styled(AppBar)`
    background: #000000 ;
    height: 77px;
   
`;

const Component= styled(Link)`
    margin-right: 1%;
    margin-left: 8%;
    padding-top: 2.5%;
    padding-bottom: 1.9%;
    textDecoration: "none";
    justify-content: 'center';
            align-items: 'center';
`
const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    color: "#ffffff",
    cursor: "pointer",
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));

const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

// const Draww =styled(Drawer)`
// color:'black';
// textAlign:"center";
// justifyContent: "center";
// `

const Header = () => {
    const logoURL = 'https://drive.google.com/uc?export=view&id=1mdxlhIsARt3cs7_4SldsWnnnDhuHV9aT';
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButton />
                </ListItem>
            </List>
        </Box>
    );
        
    return(
        <StyledHeader>
            <Toolbar style={{minHeight:77}}>

                <MenuButton color="inherit" onClick={handleOpen}>
                    <Menu />
                </MenuButton>

                <Drawer open={open} onClose={handleClose} >
                    {list()}
                </Drawer>

               <Component to={``}>
                    <img src={logoURL} alt="logo" style={{width:75, height:60}}/> 
                </Component>

                <Search />

                <CustomButtonWrapper>
                    <CustomButton />
                </CustomButtonWrapper>
                
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;