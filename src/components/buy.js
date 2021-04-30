import React, { Component } from 'react';
import { useState } from 'react';
import {connect} from 'react-redux';
import {Card, ListGroup, ListGroupItem, Button, Form } from 'react-bootstrap';
import Receipt from "./Reciept";


//state variables
let [itemName, setItemName] = useState('No Item Name');
let [price, setItemPrice] = useState('No Price');
let [desc, setItemDesc] = useState('No Desc');
let [image, setImage] = useState('no Image');
let [name, setUserName] = useState('No Name');
let [cardNum, setUserCard] = useState('0');
let [charity, setCharity] = useState('N/A');
let [payedAmt, setPayed] = useState('0');
let [donatedAmt, setDonateAmt] = useState('0');
let [donationStatus, setDonateStatus] = useState('No');
let [shipAdr, setShipAdr] = useState('Missing Shipping Address');

class buy extends Component {


    constructor(props) {
        super(props);
    }


    clearInfo() {
        setItemName('No Item Name');
        setItemPrice('No Price');
        setItemDesc('No Desc');
        setImage('No image');
        setUserName('No Name');
        setUserCard('0');
        setCharity('N/A');
        setPayed('0');
        setDonateAmt('0');
        setDonateStatus('No');
        setShipAdr('Missing Shipping Address');
    }

    updatedInfo(valueName, value) {
        switch (valueName) {
            case itemName:
                setItemName(value);
                break;
            case price:
                setItemPrice(value);
                break;
            case desc:
                setItemDesc(value);
                break;
            case image:
                setImage(value);
                break;
            case name:
                setUserName(value);
                break;
            case cardNum:
                setUserCard(value);
                break;
            case charity:
                setCharity(value);
                break;
            case payedAmt:
                setPayed(value);
                break;
            case donatedAmt:
                setDonateAmt(value);
                break;
            case donationStatus:
                setDonateStatus(value);
                break;
            case shipAdr:
                setShipAdr(value);
                break;
            default:
                console.log("Failed to set information for reciept, incorrect case value.");

        }
    }

    checkOut() {
        this.updatedInfo('image', this.props.selectedItem.image);
        this.updatedInfo('desc', this.props.selectedItem.itemDesc);
        this.updatedInfo('price', this.props.selectedItem.itemPrice);
        this.updatedInfo('itemName', this.props.selectedItem.itemName);

        if (charity == "N/A") {
            let donation = Math.round(parseInt(this.props.selectedItem.itemPrice)) - parseInt(this.props.selectedItem.itemPrice);
            let newPrice = donation + parseInt(this.props.selectedItem.itemPrice);
            this.updatedInfo('payedAmt', newPrice);
            this.updatedInfo('donationStatus', 'Yes');
            this.updatedInfo('donatedAmt', donation);
            return (<Reciept
                itemName = {itemName}
                price = {price}
                desc = {desc}
                image = {image}
                name = {name}
                cardNum = {cardNum}
                charity = {charity}
                payedAmt = {payedAmt}
                donateAmt = {donatedAmt}
                donateStatus = {donationStatus}
                shipAdr = {shipAdr}/>)
        } else {
            let newPrice = parseInt(this.props.selectedItem.itemPrice);
            let donation = '0';
            this.updatedInfo('payedAmt', newPrice);
            this.updatedInfo('donationStatus', 'Yes');
            this.updatedInfo('donatedAmt', donation);
            return (<Receipt
                itemName = {itemName}
                price = {price}
                desc = {desc}
                image = {image}
                name = {name}
                cardNum = {cardNum}
                charity = {charity}
                payedAmt = {payedAmt}
                donateAmt = {donatedAmt}
                donateStatus = {donationStatus}
                shipAdr = {shipAdr}/>)
        }
    }


    render() {
        this.clearInfo();
        return (
            <Card>
                <Card.Header> Checkout</Card.Header>
                <ListGroup>
                    <ListGroupItem>{this.props.selectedItem.itemId}</ListGroupItem>
                    <ListGroupItem><h4><BsStarFill/> {this.props.selectedItem.itemName}</h4></ListGroupItem>
                    <ListGroupItem>{"$" + this.props.selectedItem.itemPrice}</ListGroupItem>
                    <ListGroupItem>{this.props.selectedItem.itemDesc}</ListGroupItem>
                </ListGroup>

                <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.input
                        onChange={(e) => this.updatedInfo('name', e.target.value)} value={name} type="text"
                        placeholder="Enter Name on card"/>
                </Form.Group>

                <Form.Group controlId="CardNum">
                    <Form.Label>Card Number</Form.Label>
                    <Form.input
                        onChange={(e) => this.updatedInfo('cardNum', e.target.value)} value={cardNum} type="text"
                        placeholder="Enter card number"/>
                </Form.Group>

                <Form.Group controlId="ShippingAdr">
                    <Form.Label>Shipping Address</Form.Label>
                    <Form.input
                        onChange={(e) => this.updatedInfo('shipAdr', e.target.value)} value={shipAdr} type="text"
                        placeholder="Enter Shipping Address"/>
                </Form.Group>

                <label>Would You like to round up to the nearest dollar amount and donate the difference to charity?
                    <select value={charity} onChange={(e) => this.updatedInfo('charity', e.target.value)}>
                        <option value="N/A">No donation.</option>
                        <option value="Misplaced Mythical Creatures Foundation">Donate to Misplaced Mythical Creatures
                            Foundation
                        </option>
                        <option value="Foundation for the coding impaired">Donate to the Charity for the coding
                            impaired
                        </option>
                        <option value="Hell's moral improvement fund">Donate to the hell's moral improvement fund
                        </option>
                    </select>
                </label>
                <button type="button" onClick={this.checkOut}>Finish Checkout</button>
            </Card>
        )
    }
}
    const mapStateToProps = state => {
    return {
        selectedItem: state.item.selectedItem
    }
}

    export default connect(mapStateToProps)(buy);