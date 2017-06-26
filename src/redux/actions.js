export function selectFn(obj){
  return {
    type: 'SELECT',
    payload: obj
  }
}
export function sortFn(str){
  return {
    type: 'SORTING',
    payload: str
  }
}
export function addToCart(obj){
  return {
    type:'ADD_TO_CART',
    payload: obj
  }
}
export function emptyCart(){
  return {
    type: 'EMPTY_CART',
    payload: []
  }
}
