import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import Product from '../components/product.component'
import { listProducts, listProductsError } from '../redux/product/product.actions';
import { errorProducts, listOfProducts } from '../redux/product/product.selectors';

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

/*
useEffect(() => {
        
        const getProducts  = async () => {
            const response = await fetch('api/products');
            const products = await response.json()
            listProducts(products)
        }

        getProducts()
    }, [])



try {
    const response = await fetch('api/products');
            const products = await response.json()
            listProducts(products)
    }
  catch(error) {
    listProductsError('Error Occurred')
  }

*/

/*

const HomeScreen = ({ products, errorProducts, listProducts, listProductsError }) => {
    useEffect(() => {
        
        const getProducts  = async () => {
            try {
                const response = await fetch('ai/products');
                        const products = await response.json()
                        listProducts(products)
                }
              catch(error) {
                listProductsError('Error Occurred')
              }
        }

        getProducts()
    }, [])
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
    listProducts: products => dispatch(listProducts(products)),
    listProductsError: error => dispatch(listProductsError(error))
});

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);

*/

const HomeScreen = ({ products, errorProducts, listProducts, listProductsError }) => {
    useEffect(() => {
        
        const getProducts  = async () => {
            try {
                const response = await fetch('api/products');
                        const products = await response.json()
                        listProducts(products)
                }
              catch(error) {
                listProductsError('Error Occurred')
              }
        }

        getProducts()
    }, [])
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
    listProducts: products => dispatch(listProducts(products)),
    listProductsError: error => dispatch(listProductsError(error))
});

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);
                