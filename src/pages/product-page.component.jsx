import React from 'react';

import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/rating.component';
import products from '../products';

const ProductScreen = ({ match }) => {
    const product = products.find((product) => product._id == match.params.id) // we are using find() method to look for the product in 'products'
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

// <Rating value={product.rating} /> we are simply passing the product.rating as a value props and the Rating component will be display based on that value

// variant='flush' is styling from bootstrap. it takes out the borders.

// disabled={product.countInStock == 0} is boolean. if product.countInStock == 0, than it will be evaluated at True; otherwise, it will be False.

export default ProductScreen