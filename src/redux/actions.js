import C from './constants';

export function selectFn(obj){
  return {
    type: C.SELECT,
    payload: obj
  }
}
export function sortFn(str){
  return {
    type: C.SORTING,
    payload: str
  }
}
export function addToCart(obj){
  return {
    type: C.ADD_TO_CART,
    payload: obj
  }
}
export function emptyCart(){
  return {
    type: C.EMPTY_CART,
    payload: []
  }
}
export function filterDateRange(strA, strB){
  return {
    type: C.FILTER_DATE,
    payload: [strA, strB]
  }
}
