import { useState } from 'react';
import {Card, ListGroup, ListGroupItem, Button, Form } from 'react-bootstrap';
import Receipt from "./Reciept";




function Buy(props) {

//state variables
    const [itemName, setItemName] = useState('No Item Name');
    const [price, setItemPrice] = useState('No Price');
    const [desc, setItemDesc] = useState('No Desc');
    const [image, setImage] = useState('no Image');
    const [name, setUserName] = useState('No Name');
    const [cardNum, setUserCard] = useState('0');
    const [charity, setCharity] = useState('N/A');
    const [payedAmt, setPayed] = useState('0');
    const [donatedAmt, setDonateAmt] = useState('0');
    const [donationStatus, setDonateStatus] = useState('No');
    const [shipAdr, setShipAdr] = useState('Missing Shipping Address');


    const clearInfo = () => {
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

    const updatedInfo = (valueName, value) => {
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

    const checkOut = () => {
        updatedInfo('image', props.image);
        updatedInfo('desc', props.itemDesc);
        updatedInfo('price', props.itemPrice);
        updatedInfo('itemName', props.itemName);

        if (charity === "N/A") {
            let donation = Math.round(parseInt(props.itemPrice)) - parseInt(props.itemPrice);
            let newPrice = donation + parseInt(props.itemPrice);
            updatedInfo('payedAmt', newPrice);
            updatedInfo('donationStatus', 'Yes');
            updatedInfo('donatedAmt', donation);
            return (<Receipt
                itemName={itemName}
                price={price}
                desc={desc}
                image={image}
                name={name}
                cardNum={cardNum}
                charity={charity}
                payedAmt={payedAmt}
                donateAmt={donatedAmt}
                donateStatus={donationStatus}
                shipAdr={shipAdr}/>)
        } else {
            let newPrice = parseInt(props.itemPrice);
            let donation = '0';
            updatedInfo('payedAmt', newPrice);
            updatedInfo('donationStatus', 'Yes');
            updatedInfo('donatedAmt', donation);
            return (<Receipt
                itemName={itemName}
                price={price}
                desc={desc}
                image={image}
                name={name}
                cardNum={cardNum}
                charity={charity}
                payedAmt={payedAmt}
                donateAmt={donatedAmt}
                donateStatus={donationStatus}
                shipAdr={shipAdr}/>)
        }
    }


        return (
            <Card>
                <Card.Header> Checkout</Card.Header>
                <ListGroup>
                    <ListGroupItem>{props.itemId}</ListGroupItem>
                    <ListGroupItem>{props.itemName}</ListGroupItem>
                    <ListGroupItem>{"$" + props.itemPrice}</ListGroupItem>
                    <ListGroupItem>{props.itemDesc}</ListGroupItem>
                </ListGroup>

                <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.input
                        onChange={(e) => updatedInfo('name', e.target.value)} value={name} type="text"
                        placeholder="Enter Name on card"/>
                </Form.Group>

                <Form.Group controlId="CardNum">
                    <Form.Label>Card Number</Form.Label>
                    <Form.input
                        onChange={(e) => updatedInfo('cardNum', e.target.value)} value={cardNum} type="text"
                        placeholder="Enter card number"/>
                </Form.Group>

                <Form.Group controlId="ShippingAdr">
                    <Form.Label>Shipping Address</Form.Label>
                    <Form.input
                        onChange={(e) => updatedInfo('shipAdr', e.target.value)} value={shipAdr} type="text"
                        placeholder="Enter Shipping Address"/>
                </Form.Group>

                <label>Would You like to round up to the nearest dollar amount and donate the difference to charity?
                    <select value={charity} onChange={(e) => updatedInfo('charity', e.target.value)}>
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
                <button type="button" onClick={checkOut}>Finish Checkout</button>
            </Card>
        );
    }


    export default Buy;
