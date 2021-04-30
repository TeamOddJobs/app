import clearInfo from './buy'
import { Image } from 'react-bootstrap';
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';




const Receipt =(props) => {
        return(
            <Card>
                <Card.Header> Receipt</Card.Header>
                <Card.Body>
                    <Image className="image" src={props.image} thumbnail />
                </Card.Body>
                <ListGroup>
                    <ListGroupItem>{"Item Name: " + props.itemName}</ListGroupItem>
                    <ListGroupItem>{"Item cost: $" + props.price}</ListGroupItem>
                    <ListGroupItem>{"Item Desc: " + props.desc}</ListGroupItem>
                    <ListGroupItem>{"Name of buyer: " + props.name}</ListGroupItem>
                    <ListGroupItem>{"Shipping Address: " + props.shipAdr}</ListGroupItem>
                    <ListGroupItem>{"Total Payed: " + props.payedAmt}</ListGroupItem>
                    <ListGroupItem>{"Making Donation?:" + props.donateStatus}</ListGroupItem>
                    <ListGroupItem>{"Total amount Donated: " + props.donateAmt}</ListGroupItem>
                    <ListGroupItem>{"Charity donated to: " + props.charity}</ListGroupItem>
                </ListGroup>


                <Button onClick={() => {clearInfo(); window.location.href='https://webapi-oddjobs.herokuapp.com'}}>Return to home</Button>
            </Card>
        )
    }


export default Receipt;