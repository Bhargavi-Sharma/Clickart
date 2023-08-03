import {useState, useContext} from 'react';
import {Dialog, Box, TextField, Typography, Button, styled} from '@mui/material';
import { authenticateSignup, authenticateLogin} from '../../service/api';
import { DataContext } from '../../context/DataProvider.jsx';

const Component= styled(Box)`
    height: 70vh;
    width: 90vh;
`

const Image= styled(Box)`
    background: #000000 url(https://drive.google.com/uc?export=view&id=1u1YeLn8W6MXWk5gSutY12dwTu5a3CMQV) center 85% no-repeat;
    height: 80;
    width: 28%;  
    padding: 45px 38px;
    & > p, & > h5{
        color: #ffffff;
        font-weight: 600;
    }
`

const Wrapper= styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 0px 35px;
    flex: 1;
    & > div, & > Button, & > p{
        margin-top: 20px;
    };
`
const LoginButton = styled(Button)`
    text-transform: none;
    background: #FFD700;
    color: #000000;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/40%);
    border:solid;
`

const RequestOTP = styled(Button)(({ theme}) => ({
    textTransform: 'none',
    background: '#FFF',
    color: '#000000',
    height: '48px',
    borderRadius: '2px',
    boxShadow: '0 2px 4px 0 rgb(0 0 0/40%)',
    border:'solid',
    ':hover': {
        color: 'theme.palette[color].main',
        backgroundColor: 'white',
      },
}));

const Text= styled(Typography)`
    font-size: 12px;
    color: #878787;
`
const CreateAccount= styled(Typography)`
    font-size:14px;
    text-align: center;
    color: #000000;
    cursor: pointer;
    font-weight: 600;
`
const Error= styled(Typography)`
    font-size: 10px;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;

`

const accountInitialValues= {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Sign up with details to get started.'
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    mobile: ''
}

const loginInitialValues ={
    username : '',
    password : ''

}


const LoginDialog = ({open, setOpen}) => {

    const [account, toggleAccount ] = useState(accountInitialValues.login);
    const [signup, setSignup]= useState(signupInitialValues);
    const [login, setLogin]= useState (loginInitialValues);
    const [error, setError]= useState(false);
    const {setAccount} = useContext(DataContext);

    const handleClose = () =>{
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    }

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const onInputChange = (e) =>{
        setSignup({...signup, [e.target.name]: e.target.value});
        console.log(signup);
    }

    const signupUser = async () => {
       let response = await authenticateSignup(signup);
       if(!response) return;
       handleClose();
       setAccount(signup.firstname);

    }

    const onValueChange = (e) => {
        setLogin({...login, [e.target.name]: e.target.value});
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        console.log(response);
        if(response.status === 200){
            handleClose();
            setAccount(response.data.data.firstname);
        } else{
            setError(true);

        }
        }
        
return(
    <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth: 'unset'}}}>
        <Component>
            <Box style={{display: 'flex', height:'100%'}}>
                <Image> 
                    <Typography variant='h5'>{account.heading}</Typography>
                    <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
                </Image>
                {
                    account.view === 'login' ? 
                    <Wrapper>
                        <TextField variant='standard' onChange={(e) => onValueChange(e)} name='username' label="Enter Username"/>
                       
                       {error && <Error color={'#ff0000'}> Please enter valid username or password.</Error>}

                        <TextField variant='standard' onChange={(e) => onValueChange(e)} name='password' label="Enter Password"/>
                        <Text> By continuing, you agree to Clickart's Terms of Use and Privacy Policy.</Text>
                        <LoginButton onClick={() => loginUser()}> Login</LoginButton>
                        <Typography style={{textAlign: 'center'}}> OR </Typography>
                        <RequestOTP disable="block">Request OTP</RequestOTP>
                        <CreateAccount onClick={() => toggleSignup()}>New to Clickart? Create an account.</CreateAccount>
                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='firstname' label="Enter First name"/>
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='lastname' label="Enter Last name"/>
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='username' label="Enter Username"/>
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='email' label="Enter Email"/>
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='password' label="Enter Password"/>
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='mobile' label="Enter Mobile no."/>
                        <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                    </Wrapper>
                }
            </Box>
        </Component>
    </Dialog>
)
}

export default LoginDialog;