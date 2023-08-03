import { Typography, Box, Table, TableBody, TableRow, TableCell, styled } from "@mui/material"
import {LocalOffer as Badge} from "@mui/icons-material";


const SmallText =styled(Box)`
 fontSize:"16px";
 vertical-align: baseline;
 & > p{
    font-size: 14px;
    marginTop: "10px";
 }
`
const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
`
const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
    }
`


const ProductDetail = ({product}) =>{
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    return(
        <>
            <Typography> Available Offers </Typography>

            <SmallText>
                <Typography > <StyledBadge /> Get extra 20% off upto ₹50 on 1 item(s) T&C </Typography>
                <Typography > <StyledBadge /> Get extra 13% off (price inclusive of discout) T&C </Typography>
                <Typography > <StyledBadge /> Sign up for Clickart Pay Later & get Clickart Gift Card worth ₹100* Know More </Typography>
                <Typography > <StyledBadge /> Buy 2 items save 5%; Buy 3 or more save 10% T&C </Typography>
                <Typography > <StyledBadge /> 5% Cashback on Clickart Axis Bank Card</Typography>
                <Typography > <StyledBadge /> No Cost EMI on Bajaj Finserv EMI Card in cart value above ₹2999 T&C</Typography>
            </SmallText>

            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <span style={{ color: '#2874f0' }}>B-Net</span>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹329</Typography>
                        </TableCell>
                    </ColumnText>

                    <TableRow>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 390 }} />
                        </TableCell>
                    </TableRow>

                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>

                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail;