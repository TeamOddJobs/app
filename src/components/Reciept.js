import React, { component } from 'react';
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
                <Car.Header> Reciept</Car.Header>
                <ListGroup>
                    <ListGroupItem>{this.props.selectedItem.itemId}</ListGroupItem>
                    <ListGroupItem><h4><BsStarFill/> {this.props.selectedItem.itemName}</h4></ListGroupItem>
                    <ListGroupItem>{"Item cost: $" + this.props.selectedItem.itemPrice}</ListGroupItem>
                    <ListGroupItem>{"Item Desc: " + this.props.selectedItem.itemDesc}</ListGroupItem>
                    <ListGroupItem>{"Name of buyer: " + this.props.checkOut.Name}</ListGroupItem>
                    <ListGroupItem>{"Shipping Address: " + this.props.checkOut.ShippingAdr}</ListGroupItem>
                    <ListGroupItem>{"Total Payed: " + this.props.checkOut.PayedAmt}</ListGroupItem>
                    <ListGroupItem>{"Making Donation?:" + this.props.checkOut.Donating}</ListGroupItem>
                    <ListGroupItem>{"Total amount Donated: " + this.props.checkOut.DonatedAmt}</ListGroupItem>
                    <ListGroupItem>{"Charity donated to: " +this.props.checkOut.Name}</ListGroupItem>
                </ListGroup>


                <Button onClick={this.retMenu}>Return to home?</Button>
            </Card>
        )
    }
}


const mapStateToProps = checkOut => {
    return{

    }
}

export default connect(mapStateToProps(Reciept));
