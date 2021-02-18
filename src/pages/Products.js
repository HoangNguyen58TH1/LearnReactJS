import axios from 'axios';
import React, {Component} from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle,  Button } from 'reactstrap';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/products').then(res => {
      this.setState({
        products: res.data
      });
    })
  }

  render() {
    return (
      <Container>
        <h2>Products</h2>
        <Row>
          {this.state.products.map(product => (
            <Col sm="4">
              <Card>
                <CardImg top width="100%" src={product.imageUrl} />
                <CardBody>
                  <CardTitle tag="h5">{product.name}</CardTitle>
                  <CardText>{product.description}</CardText>
                  <Button>Add to Cart</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}

export default Products;