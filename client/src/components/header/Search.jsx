
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, List, ListItem, Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts as listProducts } from '../../redux/actions/productActions';
import { useSelector, useDispatch } from 'react-redux'; // hooks

const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
`
const InputSearchBase= styled(InputBase)`
    padding-left:20px;
    width: 100%; 
    font-size: unset;
`
const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 38px;
`;

const SearchIconWrapper= styled(Box)(({ theme}) => ({
    color: 'black',
    padding: '5px',
    cursor: 'pointer',
    ':hover': {
        color: 'theme.palette[color].main',
        backgroundColor: 'gold',
      },
}));

const Search=() =>{
    const [ text, setText ] = useState('');
        const [ open, setOpen ] = useState(true)
    
        const getText = (text) => {
            setText(text);
            setOpen(false)
        }

        const getProducts = useSelector(state => state.getProducts);
        const { products } = getProducts;
    
        const dispatch = useDispatch();
    
        useEffect(() => {
            dispatch(listProducts())
        }, [dispatch])

    return(
        <SearchContainer>
            <InputSearchBase
            placeholder='Search for products, brands and more'
            inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => getText(e.target.value)}
                value={text}
            />
             <SearchIconWrapper>
                <SearchIcon />
             </SearchIconWrapper>
             {
              text && 
              <ListWrapper hidden={open}>
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map((product,i) => (
                    <ListItem key={i}>
                      <Link 
                        to={`/product/${product.id}`} 
                        onClick={() => setText('')}
                        style={{ textDecoration:'none', color:'inherit'}}
                          
                      >
                        {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }  
              </ListWrapper>
            }
        </SearchContainer>
        
    )
}

export default Search;