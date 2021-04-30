import React, { Component } from 'react';
import { fetchItem } from "../actions/itemActions";
import {connect} from 'react-redux';
import {Card, ListGroup, ListGroupItem, Form, Button} from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs'
import { Image } from 'react-bootstrap';
import Buy from './Buy';
import clearInfo from './Buy';


class ItemDetail extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        if (this.props.selectedItem == null) {
            dispatch(fetchItem(this.props.itemId));
        }
    }

    toBuy(){
        return (<Buy itemId = {this.props.selectedItem.itemId} itemPrice = {this.props.selectedItem.itemPrice} itemName = {this.props.selectedItem.itemName} itemDesc = {this.props.selectedItem.itemDesc} imageUrl = {this.props.selectedItem.imageURL} />)
    }


    render() {
        const DetailInfo = () => {
            if (!this.props.selectedItem) {
                return <div>Loading....</div>
            }

            return (
                <Card>
                    <Card.Header>Item Detail</Card.Header>
                    <Card.Body>
                        <Image className="image" src={this.props.selectedItem.imageUrl} thumbnail />
                    </Card.Body>
                    <ListGroup>
                        <ListGroupItem>{this.props.selectedItem.itemId}</ListGroupItem>
                        <ListGroupItem><h4><BsStarFill/> {this.props.selectedItem.itemName}</h4></ListGroupItem>
                        <ListGroupItem>{"$" + this.props.selectedItem.itemPrice}</ListGroupItem>
                        <ListGroupItem>{this.props.selectedItem.itemDesc}</ListGroupItem>
                    </ListGroup>
                    <button type = "button" onClick={this.toBuy}>Purchase</button>
                </Card>
            )
        }

        return (
            <DetailInfo />
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedItem: state.item.selectedItem
    }
}

export default connect(mapStateToProps)(ItemDetail);


