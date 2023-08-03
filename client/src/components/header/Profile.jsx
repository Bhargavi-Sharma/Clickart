import { Typography, Box, Menu, MenuItem, styled } from "@mui/material"
import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';

const Component= styled(Menu)`
    marginTop:5px;

`

const Logout = styled(Typography)`
    font-Size: 16px;
    margin-Left: 20px;
` 


const Profile = ({account, setAccount}) => {

    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const handleClose = () => {

        setOpen(false);
    }

    const logoutUser = () => {
        setAccount('');
    }

    return(
        <>
       <Box onClick={handleClick}> <Typography style={{marginTop:2, cursor: 'pointer'}}>{account}</Typography> </Box>
       <Component
           
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={() => {handleClose(); }}>
                
                    <AccountCircleIcon color='gold' fontSize='small'/>
                    <Logout> Profile </Logout>
            </MenuItem>
            <MenuItem onClick={() => {handleClose(); logoutUser();}}>
                
                <PowerSettingsNewRoundedIcon color='gold' fontSize='small'/>
                <Logout> Log Out </Logout>
                </MenuItem>
           
      </Component>
      
        </>
    )
}

export default Profile;