import React, { Component } from 'react';
import { fetchItem} from "../actions/itemActions";
import {connect} from 'react-redux';
import {Card, ListGroup, ListGroupItem, Button, Form } from 'react-bootstrap';


class Reciept extends Component {


    componentDidMount() {
        const {dispatch} = this.props;
        if (this.props.selectedItem == null) {
            dispatch(fetchItem(this.props.itemId));
        }
    }


    retMenu(){
        window.location = "https://webapi-oddjobs.herokuapp.com"
    }
    render() {
        return(
            <Card>
                <Card.Header> Reciept</Card.Header>
                <ListGroup>
                    <ListGroupItem>{this.props.selectedItem.itemId}</ListGroupItem>
                    <ListGroupItem>{this.props.selectedItem.itemName}</ListGroupItem>
                    <ListGroupItem>{"Item cost: $" + this.props.selectedItem.itemPrice}</ListGroupItem>
                    <ListGroupItem>{"Item Desc: " + this.props.selectedItem.itemDesc}</ListGroupItem>
                    <ListGroupItem>{"Name of buyer: " + this.state.Name}</ListGroupItem>
                    <ListGroupItem>{"Shipping Address: " + this.state.ShippingAdr}</ListGroupItem>
                    <ListGroupItem>{"Total Payed: " + this.props.PayedAmt}</ListGroupItem>
                    <ListGroupItem>{"Making Donation?:" + this.props.Donating}</ListGroupItem>
                    <ListGroupItem>{"Total amount Donated: " + this.state.DonatedAmt}</ListGroupItem>
                    <ListGroupItem>{"Charity donated to: " +this.state.Name}</ListGroupItem>
                </ListGroup>


                <Button onClick={this.retMenu}>Return to home?</Button>
            </Card>
        )
    }
}

export default Reciept;
