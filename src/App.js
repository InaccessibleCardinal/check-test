import React, { Component } from 'react';
import { selectFn, sortFn, addToCart, emptyCart } from './redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TableHeader from './components/TableHeader';
import TableRow from './components/TableRow';
import CartIndicator from './components/CartIndicator';
import Filter from './components/Filter';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.headersClickHandler = this.headersClickHandler.bind(this);
  }
  // componentWillMount(){
  //   console.log(this.props);
  // }
  headersClickHandler(str){
    this.props.sortFn(str);
  }
  render() {
    const rows = this.props.checks.map( (c,i) =>{
      return <TableRow
      selectFn={()=>this.props.selectFn(c)}
      addToCart={()=>this.props.addToCart(c)}
      selected={this.props.selected===c?true:false}
      key={'row_'+i}
      check={c}
      displayCategories={this.props.headers}
      />
    })
    return (
      <div className="App">
        <CartIndicator cart={this.props.cart} emptyCart={this.props.emptyCart}/>
        <Filter />
        <h1>check testing</h1>
        <TableHeader headers={this.props.headers} handler={this.headersClickHandler}/>
        {rows}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    headers: state.headers,
    checks: state.checks,
    selected: state.selected,
    cart: state.cart,
    datePostedAsc: state.datePostedAsc,
    amountAsc: state.amountAsc,
    checkNumberAsc: state.checkNumberAsc
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    selectFn: selectFn,
    sortFn: sortFn,
    addToCart: addToCart,
    emptyCart: emptyCart
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
