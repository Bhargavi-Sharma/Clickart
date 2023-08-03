import { Button, ButtonGroup, styled } from "@mui/material";

const Component = styled(ButtonGroup)`
    marginTop:30;
`




const GroupedButton = () => {
    return(
        <Component style={{marginTop:30}}>
            <Button style={{borderRadius:"15%"}}>-</Button> 
            <Button disabled >1</Button>
            <Button style={{borderRadius:"15%"}}>+</Button>
        </Component>
    )
}

export default GroupedButton;