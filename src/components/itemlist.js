import React, { Component } from 'react';
import { fetchItems } from "../actions/itemActions";
import { setItem } from "../actions/itemActions";
import {connect} from 'react-redux';
import {Image, Nav} from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { BsStarFill} from 'react-icons/bs'
import {LinkContainer} from 'react-router-bootstrap';

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchItems());
    }

    handleSelect(selectedIndex, e) {
        const {dispatch} = this.props;
        dispatch(setItem(this.props.items[selectedIndex]));
    }

    handleClick = (item) => {
        const {dispatch} = this.props;
        dispatch(setItem(item));
    }

    render() {
        const ItemListCarousel = ({itemList}) => {
            if (!itemList) {
                return <div>Loading....</div>
            }

            return (
                <Carousel onSelect={this.handleSelect}>
                    {itemList.map((item) =>
                        <Carousel.Item key={item.itemId}>
                            <div>
                                <LinkContainer to={'/item/'+item.itemId} onClick={()=>this.handleClick(item)}>
                                    <Nav.Link><Image className="image" src={item.imageUrl} thumbnail /></Nav.Link>
                                </LinkContainer>
                            </div>
                            <Carousel.Caption>
                                <h3>{item.itemId}</h3>
                                <BsStarFill glyph={'star'} /> {item.itemName} &nbsp;&nbsp; {item.itemDesc}
                            </Carousel.Caption>
                        </Carousel.Item>
                    )}

                </Carousel>
            )
        }

        return (
            <ItemListCarousel itemList={this.props.items} />
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.item.items
    }
}

export default connect(mapStateToProps)(ItemList);


