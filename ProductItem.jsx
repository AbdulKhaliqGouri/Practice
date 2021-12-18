import { Card, Button, Row, Col } from "react-bootstrap";
import "./ProductItem.css";

export const ProductItem = ({ title, cat, url, price, desc }) => {
  return (
    <Row className="item">
      <Col lg={2}>
        <img src={url} width="120px" height="180px" />
      </Col>
      <Col lg={10}>
        <Card className="text-center">
          <Card.Header>{cat}</Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{desc}</Card.Text>
            <Button variant="primary">{price}</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};
