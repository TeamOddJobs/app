import React, { Component } from 'react';
import { fetchItem} from "../actions/itemActions";
import {connect} from 'react-redux';
import {Card, ListGroup, ListGroupItem, Button, Form } from 'react-bootstrap';


class buy extends Component {


    componentDidMount() {
        const {dispatch} = this.props;
        if (this.props.selectedItem == null) {
            dispatch(fetchItem(this.props.itemId));
        }
    }



    constructor(props) {
        super(props);
        this.updateDetails = this.updateDetails.bind(this);

        this.state = {
            details:{
                CardNum: '',
                Donating: '',
                Name: '',
                ShippingAdr: '',
                PayedAmt: '',
                DonatedAmt: '',
                CharityName: ''
            }

        };
    }

    updateDetails(event){
        let updateDetails = Object.assign({}, this.state.details);

        updateDetails[event.target.id] = event.target.value;
        this.setState({
            details: updateDetails
        });
    }

    isDonating(){
            var donation = Math.round(this.props.selectedItem.itemPrice) - this.props.selectedItem.itemPrice;
            var newPrice = donation + this.props.selectedItem.itemPrice;
            this.checkOut.details.PayedAmt = newPrice;
            this.checkout.details.Donated = 'yes';
            this.checkout.details.DonatedAmt = donation;
            window.location = "https://webapi-oddjobs.herokuapp.com/Reciept"
    }

    notDonating(){
        this.checkOut.details.PayedAmt = this.prop.selectedItem.itemPrice;
        this.checkout.details.Donated = 'no';
        this.checkout.details.DonatedAmt = '0';
        window.location = "https://webapi-oddjobs.herokuapp.com/Reciept"
    }

    render() {
        return(
        <Card>
            <Card.Header> Checkout</Card.Header>
            <ListGroup>
                <ListGroupItem>{this.props.selectedItem.itemId}</ListGroupItem>
                <ListGroupItem>{this.props.selectedItem.itemName}</ListGroupItem>
                <ListGroupItem>{"$" + this.props.selectedItem.itemPrice}</ListGroupItem>
                <ListGroupItem>{this.props.selectedItem.itemDesc}</ListGroupItem>
            </ListGroup>

            <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={this.updateDetails} value={this.state.details.Name}  type="text" placeholder="Enter Name on card" />
            </Form.Group>

            <Form.Group controlId="CardNum">
                <Form.Label>Card Number</Form.Label>
                <Form.Control onChange={this.updateDetails} value={this.state.details.CardNum}  type="text" placeholder="Enter card number" />
            </Form.Group>

            <Form.Group controlId="ShippingAdr">
                <Form.Label>Shipping Address</Form.Label>
                <Form.Control onChange={this.updateDetails} value={this.state.details.ShippingAdr}  type="text" placeholder="Enter Shipping Address" />
            </Form.Group>

            <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={this.updateDetails} value={this.state.details.Name}  type="text" placeholder="Enter Name on card" />
            </Form.Group>

            <Button onClick={this.isDonating}>Round Up and Donate.</Button>
            <Button onClick={this.notDonating}>Checkout without donating.</Button>
        </Card>
        )
    }
}
const mapStateToProps = checkOut => {
    return{

    }
}

export default connect(mapStateToProps(buy));
