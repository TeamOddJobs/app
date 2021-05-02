import constants from '../constants/actionTypes'

let initialState = {
      items: [],
      selectedItem: null,
      name: 'No Name',
      cardNum: '0',
      charity: 'N/A',
      payedAmt: 0,
      donatedAmt: 0,
      donationStatus: true,
      shipAdr: 'Missing Shipping Address'
}

const itemReducer = (state = initialState, action) => {
      let updated = Object.assign({}, state);

      switch(action.type) {
            case constants.FETCH_ITEMS:
                  updated['items'] = action.items;
                  updated['selectedItem'] = action.items[0];
                  return updated;
            case constants.SET_ITEM:
                  updated['selectedItem'] = action.selectedItem;
                  return updated;
            case constants.FETCH_ITEM:
                  updated['selectedItem'] = action.selectedItem;
                  return updated;
            case constants.SET_CHECKOUT:
                  updated['itemName'] = action.itemName;
                  updated['price'] = action.price;
                  updated['desc'] = action.desc;
                  updated['image'] = action.image;
                  updated['name'] = action.name;
                  updated['cardNum'] = action.cardNum;
                  updated['charity'] = action.charity;
                  updated['payedAmt'] = action.payedAmt;
                  updated['donatedAmt'] = action.donatedAmt;
                  updated['donationStatus'] = action.donationStatus;
                  updated['shipAdr'] = action.shipAdr;
                  return updated;
            default:
                  return state;
      }
}

export default itemReducer;