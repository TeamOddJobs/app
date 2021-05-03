import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import {connect} from 'react-redux';
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';




class Receipt extends Component {
    render() {
        return (
            <Card>
                <Card.Header> Receipt</Card.Header>
                <Card.Body>
                    <Image className="image" src={this.props.image} thumbnail/>
                </Card.Body>
                <ListGroup>
                    <ListGroupItem>{"Item Name: " + this.props.selectedItem.itemName}</ListGroupItem>
                    <ListGroupItem>{"Item cost: $" + this.props.selectedItem.itemPrice}</ListGroupItem>
                    <ListGroupItem>{"Item Desc: " + this.props.selectedItem.itemDesc}</ListGroupItem>
                    <ListGroupItem>{"Name of buyer: " + this.props.name}</ListGroupItem>
                    <ListGroupItem>{"Shipping Address: " + this.props.shipAdr}</ListGroupItem>
                    <ListGroupItem>{"Total Payed: " + this.props.payedAmt}</ListGroupItem>
                    <ListGroupItem>{"Making Donation?:" + this.props.donatedStatus}</ListGroupItem>
                    <ListGroupItem>{"Total amount Donated: " + this.props.donatedAmt}</ListGroupItem>
                    <ListGroupItem>{"Charity donated to: " + this.props.charity}</ListGroupItem>
                </ListGroup>


                <Button onClick={() => {
                    window.location.href = 'https://webapi-oddjobs.herokuapp.com'
                }}>Return to home</Button>
            </Card>
        )
    }
}
const mapStateToProps = state => {
    return {
        selectedItem: state.item.selectedItem,
        name: state.item.name,
        cardNum: state.item.cardNum,
        charity: state.item.charity,
        payedAmt: state.item.payedAmt,
        donatedAmt: state.item.donatedAmt,
        donatedStatus: state.item.donatedStatus,
        shipAdr: state.item.shipAdr
    }
}

export default connect(mapStateToProps)(Receipt);
