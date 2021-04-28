import constants from '../constants/actionTypes'

let initialState = {
      items: [],
      selectedItem: null
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
            default:
                  return state;
      }
}

export default itemReducer;