import React, { Component } from 'react';
import {fetchItem, setCheckout, setItem} from "../actions/itemActions";
import {connect} from 'react-redux';
import {Card, ListGroup, ListGroupItem, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';


class Buy extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        if (this.props.selectedItem == null) {
            dispatch(fetchItem(this.props.itemId));
        }
    }


    constructor(props) {
        super(props);

        this.state = {
                name: '',
                cardNum: '',
                charity: '',
                payedAmt: '',
                donatedAmt: '',
                donationStatus: '',
                shipAdr: ''
        };
    }

    updatedInfo = (valueAct, value) => {
        switch (valueAct) {
            case 0:
                this.setState({name: value});
                break;
            case 1:
                this.setState({cardNum: value});
                break;
            case 2:
                this.setState({charity: value});
                break;
            case 3:
                this.setState({payedAmt: value});
                break;
            case 4:
                this.setState({donatedAmt: value});
                break;
            case 5:
                this.setState({donationStatus: value});
                break;
            case 6:
                this.setState({shipAdr: value});
                break;
            default:
                console.log("Failed to set information for reciept, incorrect case value.");

        }
    }

    checkOut = () => {

        if (this.state.charity !== "N/A") {
            let donation = Math.round(parseInt(this.props.selectedItem.itemPrice)) - parseInt(this.props.selectedItem.itemPrice);
            let newPrice = donation + parseInt(this.props.selectedItem.itemPrice);
            this.updatedInfo(3, newPrice);
            this.updatedInfo(5, 'Yes');
            this.updatedInfo(4, donation);
            const {dispatch} = this.props;
            dispatch(setCheckout(this.state));
        } else {
            let newPrice = parseInt(this.props.selectedItem.itemPrice);
            let donation = '0';
            this.updatedInfo(3, newPrice);
            this.updatedInfo(5, 'No');
            this.updatedInfo(4, donation);
            const {dispatch} = this.props;
            dispatch(setCheckout(this.state));
        }
    }

    render() {
        return (
            <Card>
                <Card.Header> Checkout</Card.Header>
                <ListGroup>
                    <ListGroupItem>{this.props.selectedItem.itemId}</ListGroupItem>
                    <ListGroupItem>{this.props.selectedItem.itemName}</ListGroupItem>
                    <ListGroupItem>{"$" + this.props.selectedItem.itemPrice}</ListGroupItem>
                    <ListGroupItem>{this.props.selectedItem.itemDesc}</ListGroupItem>
                </ListGroup>
                <Form className='check-out'>
                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <input onChange={(e) => this.updatedInfo(0, e.target.value)} type="text" placeholder="Enter Name on card"/>
                    </Form.Group>

                    <Form.Group controlId="CardNum">
                        <Form.Label>Card Number</Form.Label>
                        <input onChange={(e) => this.updatedInfo(1, e.target.value)} type="text" placeholder="Enter card number"/>
                    </Form.Group>

                    <Form.Group controlId="ShippingAdr">
                        <Form.Label>Shipping Address</Form.Label>
                        <input onChange={(e) => this.updatedInfo(6, e.target.value)} type="text" placeholder="Enter Shipping Address"/>
                    </Form.Group>
                </Form>

                <label>Would You like to round up to the nearest dollar amount and donate the difference to charity?
                    <select onChange={(e) => this.updatedInfo(2, e.target.value)}>
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
                <link to="/Reciept">
                    <button type="button" onClick={this.checkOut}>Finish Checkout</button>
                </link>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedItem: state.item.selectedItem
    }
}

export default connect(mapStateToProps)(Buy);
