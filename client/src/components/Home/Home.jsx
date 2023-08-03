//import {Fragment} from 'react';
import{useEffect} from 'react';
//components
import NavBar from "./NavBar";
import Banner from "./Banner";
import {styled, Box} from '@mui/material';
import { getProducts } from '../../redux/actions/productActions';
import {useDispatch, useSelector} from 'react-redux';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

const Component= styled(Box)`
 padding: 10px 10px;
 background: #F2F2F2;
`

const Home =() =>{

    const {products}= useSelector(state => state.getProducts);

    

    const dispatch= useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return(
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} title='Deals of the Day' timer={true}/>
                <MidSection />
                <Slide products={products} title='Discounts for You' timer={false}/>
                <Slide products={products} title="Season's top picks" timer={false}/>
                <Slide products={products} title="Trending Offers" timer={false}/>
                <Slide products={products} title="Top Selections" timer={false}/>
                <Slide products={products} title="Recommended Items" timer={false}/>
                <Slide products={products} title="Top Deals on Accessiories" timer={false}/>
            </Component>
            
        </>
        
    )
}

export default Home;