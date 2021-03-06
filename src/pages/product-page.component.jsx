import React from 'react';

import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/rating.component';

class ProductScreen extends React.Component {
    constructor() {
        super()

        this.state = {
            product: ''
        }
    }

    componentDidMount() {
        /*
        here we are requesting to the API to retrieve the item matching the id passed from <Route path='/product/:id' component={ProductScreen} />
        that id it is passed to <Route> from <Link to={`/product/${product._id}`}> in the product.component
        */
        fetch(`/api/products/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(product => this.setState({product: product}))
    }

    render() {
        const { product } = this.state
        return(
            <div>
                <Link to='/' className='btn btn-light my-3'>Go Back</Link>
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Price: ${product.price}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Description: {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>
                                            <strong>${product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                            {
                                                product.countInStock == 0 
                                                ? 'Out Of Stock' 
                                                : product.countInStock < 3 
                                                ? 'Running Low' 
                                                : 'In Stock'
                                            }
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Button className='btn-block add-to-cart' disabled={product.countInStock == 0} type='button'>Add To Cart</Button>             
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ProductScreen





