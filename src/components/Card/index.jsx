import React from 'react'
import { useHistory } from 'react-router';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const CartSubject = () => {
    const history = useHistory();
    return (
        <div>
            <Card>
        <CardImg top style={{width: '20%'}} src="./logo192.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button onClick={() => {history.push("homepage/detail-subject")}}>Button</Button>
        </CardBody>
      </Card>
        </div>
    )
}

export default CartSubject
