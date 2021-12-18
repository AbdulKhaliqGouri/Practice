import { Button, Card } from "react-bootstrap";
import "./DataItem.css";

export const DataItem = ({ item, index }) => {
  return (
    <Card style={{ width: "18rem" }} className="data">
      <Card.Img variant="top" src={item.image} height="150px" />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.category}</Card.Text>
        <Button variant="primary">{item.price}</Button>
      </Card.Body>
    </Card>
  );
};
