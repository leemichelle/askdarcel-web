// import * as types from '../actions/actionTypes';

const initialState = {
  location: {
    lat: 37.7749,
    lng: -122.4194,
  },
};


export default function resourceReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
