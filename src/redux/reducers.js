import { checks, headers } from '../Data';
const initialState = {
  checks,
  headers,
  selected:null,
  cart:[],
  datePostedAsc:true,
  amountAsc:false,
  checkNumberAsc:false
}
export default (state = initialState, action) =>{
  switch(action.type){
    case 'GET_CHECKS':
      console.log('getting checks');
      return state;
    case 'SELECT':
      let selectedObj = action.payload;
      return state.selected === selectedObj?
      Object.assign({}, state, {selected: null} ):
      Object.assign({}, state, {selected:selectedObj});
    case 'SORTING':
      let cat = action.payload,
          categoryAsc = cat+'Asc',
          basis = state[categoryAsc]? -1 : 1;
          let newChecks = [];
          state.checks.forEach((c) =>{ newChecks.push(c) })
          newChecks.sort( (cA,cB)=>{
            let a = cA[cat] || -Infinity, b = cB[cat] || -Infinity;
          if(a > b){ return -1*basis }
          if(b > a){ return 1*basis }
          return 0*basis;
        });
        switch(cat){
          case 'datePosted':
            return Object.assign({}, state, {checks:newChecks, datePostedAsc:!state.datePostedAsc, amountAsc: false, checkNumberAsc:false} );
          case 'amount':
            return Object.assign({}, state, {checks:newChecks, datePostedAsc:false, amountAsc: !state.amountAsc, checkNumberAsc:false} );
          case 'checkNumber':
            return Object.assign({}, state, {checks:newChecks, datePostedAsc:false, amountAsc: false, checkNumberAsc: !state.checkNumberAsc} );
          default:
            return state;
      }
      case 'ADD_TO_CART':
        let newCart = state.cart.concat(action.payload);
        return state.cart.length<3?
        Object.assign({}, state, {cart:newCart}):
        state;
      case 'EMPTY_CART':
        return Object.assign({}, state, {cart:action.payload})
    default:
      return state;
  }
}
