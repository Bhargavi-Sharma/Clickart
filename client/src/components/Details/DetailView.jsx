import { useState, useEffect } from "react";
import { styled, Box, Typography, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions.js";
import ActionItem from "./Actionitems.jsx";
import ProductDetail from "./ProductDetail.jsx";

const Component = styled(Box)`
  background: #f2f2f2;
  
`;

const Container = styled(Grid)(({ theme }) => ({
  background: '#FFFFFF',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
      margin: 0
  }
}));

const RightContainer = styled(Grid)`
  marginTop:"55px";
`;

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { product } = useSelector((state) => state.getProductsDetails);

  const cassured =
    " https://drive.google.com/uc?export=view&id=1edB-R0KeHBjCz0XKFU02ocUDxhTXlrEF";

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <Component>
      {
      product && Object.keys(product).length && (

        <Container container>

          <Grid item lg={4} mid={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>

          <RightContainer item lg={8} mid={8} sm={8} xs={12} style={{marginTop:"40px", paddingLeft:"4%"}}>
            <Typography>{product.title.longTitle}</Typography>

            <Typography style={{ marginTop: 4, color: "#878787", fontSize: 14, alignItems:"center" }}>
              8 Ratings & 1 Reviews
              <Box component="span" >
                <img src={cassured} style={{ width: 77, marginLeft: 20 }} />
              </Box>
            </Typography>

            <Typography>
              <Box component="span" style={{ fontSize: 28 }}>
                ₹{product.price.cost}
              </Box> &nbsp;&nbsp;&nbsp;

              <Box component="span" style={{ color: "#878787" }}>
                <strike> ₹{product.price.mrp} </strike> &nbsp;
              </Box>

              <Box component="span" style={{ color: "#388E3C" }}>
                {product.price.discount}
              </Box>
            </Typography>
            <ProductDetail product={product} />
          </RightContainer>
        </Container>
      )}
    </Component>
  )
};

export default DetailView;
