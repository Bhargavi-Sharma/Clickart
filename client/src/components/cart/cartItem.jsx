import { removeFromCart } from '../../redux/actions/cartActions.js';
import {Box, Typography, Button, styled} from '@mui/material';
import { addEllipsis } from '../../utils/common-utils.js';
import GroupedButton from './ButtonGroup.jsx';
import {useDispatch} from 'react-redux';

const Component = styled(Box)`
    display:flex;
`

const LeftComponent = styled(Box)`
    margin: "20px";
    
`

const RemoveButton = styled(Button)`
    marginTop: 20;
    fontSize:16;
`


const CartItem = ({item}) =>{
    const cassured = " https://drive.google.com/uc?export=view&id=1edB-R0KeHBjCz0XKFU02ocUDxhTXlrEF";
    
    const dispatch = useDispatch();

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }
   
   
    return(
        <Component style={{display:"flex", borderTop: '2px solid #f0f0f0', backgroundColor:'#fff'}}>
            <LeftComponent style={{margin:"20px", display:'flex', flexDirection:'column'}}>
                <img src={item.url} alt="product" style={{width:110, height:110}}/>
                <GroupedButton />
            </LeftComponent>
            <Box style={{margin:"20px"}}>
                <Box>
                    {addEllipsis(item.title.longTitle)}
                    <Typography style={{color:"#878787", fontSize:"14px", marginTop:"10px"}}>
                        Seller: B-Net
                        <Box component={"span"}><img src={cassured} alt="clickart" style={{width: 50, marginLeft:10}}/> </Box>
                    </Typography>

                    <Typography style={{margin: '20px 0'}}>
                        <Box component="span" style={{ fontWeight: 600, fontSize:18 }}>
                            ₹{item.price.cost}
                        </Box> &nbsp;&nbsp;&nbsp;

                        <Box component="span" style={{ color: "#878787" }}>
                            <strike> ₹{item.price.mrp} </strike> &nbsp;
                        </Box>

                        <Box component="span" style={{ color: "#388E3C" }}>
                            {item.price.discount}
                        </Box>
                    </Typography>
                </Box>
                <RemoveButton onClick={() =>removeItemFromCart(item.id)} style={{ marginTop: 20, fontSize:16, color:"#000", fontWeight:600}}>Remove</RemoveButton>
            </Box>
        </Component>
    )

}

export default CartItem;