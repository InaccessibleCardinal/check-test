import React from 'react';
import TableSubRow from './TableSubRow';

function parseDate(dt) {
  let dtStr = dt.toString();
  return dtStr.substr(4,2)+'/'+dtStr.substr(6,2)+'/'+dtStr.substr(0,4);
}
function parseAmount(amount) {
  return '$'+parseFloat(amount).toFixed(2).toLocaleString();
}
function dataFormatter(check, str, catName){
  switch(catName){
    case 'datePosted':
      return parseDate(str);
    case 'amount':
      return check.isDeposit? parseAmount(str):'('+parseAmount(str)+')';
    default:
      return str;
  }
}

export default function TableRow(props){
  let selected = props.selected,
      c = props.check,
      categories = props.displayCategories,
      len= categories.length;
  const cells = categories.map( (cat,i) =>{
    let cl = cat.dbName;
    return <div key={'cell_'+i}
      className={i===len-1?'table-row-cell last '+cl:'table-row-cell '+cl}>
        {i===0?<button onClick={()=>props.selectFn(c)}>{selected?'-':'+'}</button>:null}
        <span
        className={(cat.dbName === 'amount' && !c.isDeposit)?'withdrawl':''}>
          {dataFormatter(c, c[cat.dbName], cat.dbName)}
        </span>
        {i===len-1 && <input className="check-box" type="checkbox"/>}
      </div>
  });
  return <div tabIndex="0" className={selected?'table-row selected':'table-row'}>
    { cells }
    {(selected)? <TableSubRow addToCart={props.addToCart} check={c}/>: null }
    </div>
}
