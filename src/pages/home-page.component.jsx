import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Product from '../components/product.component'

import products from '../products' // this will import 'products' const

class HomeScreen extends React.Component {
    constructor() {
        super()

        this.state = {
            products: []
        }
    };
    
    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/products')
        .then(response => response.json())
        .then(products => this.setState({products: products}))
      }

    render() {
    return(
            <div>
                <h1>Latest Products</h1>
                <Row>
                    {this.state.products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product}/>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    };
};

export default HomeScreen