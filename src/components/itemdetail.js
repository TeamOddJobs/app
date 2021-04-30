import React, { Component } from 'react';
import { fetchItem } from "../actions/itemActions";
import {connect} from 'react-redux';
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { BsStarFill } from 'react-icons/bs';
import { Image } from 'react-bootstrap';


class ItemDetail extends Component {


    componentDidMount() {
        const {dispatch} = this.props;
        if (this.props.selectedItem == null) {
            dispatch(fetchItem(this.props.itemId));
        }
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
                    <Link to="/Buy">
                        <Button color= "blue">Purchase</Button>
                    </Link>
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


