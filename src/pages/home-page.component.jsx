import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'

import { connect, useDispatch } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import Product from '../components/product.component'
import { listProducts, listProductsError, listProductsRequest } from '../redux/product/product.actions';
import { errorProducts, listOfProducts, loadingAllProducts } from '../redux/product/product.selectors';

// import products from '../products' // this will import 'products' const

/*
class HomeScreen extends React.Component {
    constructor() {
        super()

        this.state = {
            nothing: ''
        }
    };
    
    componentDidMount() {
        fetch('api/products')
        .then(response => response.json())
        .then(products => this.props.listProducts(products))
        .catch(error => this.props.listProductsError('Error Occured'))
    }

    render() {
        console.log(this.props.products)
        console.log(this.state.nothing)
        console.log(this.props.errorProducts)
    return(
            <div>
                <h1>Latest Products</h1>
                {this.props.errorProducts
                ? <h3>{this.props.errorProducts}</h3>
                : <Row>
                    {this.props.products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product}/>
                        </Col>
                    ))}
                  </Row>
                }
            </div>
        );
    };
};

const mapStateToProps = createStructuredSelector({
   products: listOfProducts,
   errorProducts: errorProducts
});

const mapDispatchToProps = dispatch => ({ 
    listProducts: products => dispatch(listProducts(products)),
    listProductsError: error => dispatch(listProductsError(error))
});

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);
*/


const HomeScreen = ({ products, loading, errorProducts, listProducts, listProductsError, listProductsRequest }) => {

    useEffect(() => {
        //check useEffect() at React with Andrei&Yihua hooks
        const getProducts  = async () => { 
            // check the async await at React with Andrei&Yihua
            // check also at JavaScript essential methods notebook
            try {
                listProductsRequest()
                const response = await fetch('api/products');
                const products = await response.json()
                listProducts(products)
                }
            catch(error) {
                listProductsError('Error Occurred')
                }
        }

        getProducts()
    }, []) // this empty array means the function within this useEffect will trigger everytime the component is mounted or updated. Once we populate it, the function will be triggered everytime that item (state of the component) in the array changes
    return(
            <div>
                <h1>Latest Products</h1>
                {errorProducts
                ? <h3>{errorProducts}</h3>
                : loading ?
                <h3 className='text-lowercase'>loading products...</h3>
                : <Row>
                    {products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product}/>
                        </Col>
                    ))}
                  </Row>
                }
            </div>
        );
    };

const mapStateToProps = createStructuredSelector({
   products: listOfProducts,
   errorProducts: errorProducts,
   loading: loadingAllProducts 
});

const mapDispatchToProps = dispatch => ({ 
    listProducts: products => dispatch(listProducts(products)),
    listProductsError: error => dispatch(listProductsError(error)),
    listProductsRequest: () => dispatch(listProductsRequest())
});

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);

/*

THE FOLLOWING CODE WILL NOT WORK AS WE WOULD NEED TO ADD MIDDLEWARE TO OUR STORE TO HANDLE DISPATCHING WITH useDispatch() --  LIKE 'redux-thunk'

const HomeScreen = ({ products, errorProducts }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]) 
    
    return(
            <div>
                <h1>Latest Products</h1>
                {errorProducts
                ? <h3>{errorProducts}</h3>
                : <Row>
                    {products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product}/>
                        </Col>
                    ))}
                  </Row>
                }
            </div>
        );
    };

const mapStateToProps = createStructuredSelector({
   products: listOfProducts,
   errorProducts: errorProducts
});

const mapDispatchToProps = dispatch => ({ 
    listProducts: () => dispatch(listProducts()),
});


export default connect(mapStateToProps,null)(HomeScreen);
*/                