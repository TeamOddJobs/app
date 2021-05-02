import actionTypes from '../constants/actionTypes';
import runtimeEnv from '@mars/heroku-js-runtime-env'


function itemsFetched(items) {
    return {
        type: actionTypes.FETCH_ITEMS,
        items: items
    }
}

function itemFetched(item) {
    return {
        type: actionTypes.FETCH_ITEM,
        selectedItem: item
    }
}

function itemSet(item) {
    return {
        type: actionTypes.SET_ITEM,
        selectedItem: item
    }
}

function checkoutSet(data){
    return{
        type: actionTypes.SET_CHECKOUT,
        name: data.name,
        cardNum: data.cardNum,
        charity: data.charity,
        payedAmt: data.payedAmt,
        donatedAmt: data.donatedAmt,
        donationStatus: data.donationStatus,
        shipAdr: data.shipAdr
    }
}

export function setCheckout(data){
    return dispatch => {
        dispatch(setCheckout(data));
    }
}

export function setItem(item) {
    return dispatch => {
        dispatch(itemSet(item));
    }
}

export function fetchItem(itemId) {
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/items/${itemId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        }).then((res) => {
            dispatch(itemFetched(res));
        }).catch((e) => console.log(e));
    }
}

export function fetchItems() {
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/items`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        }).then((res) => {
            dispatch(itemsFetched(res.Items));
        }).catch((e) => console.log(e));
    }
}
