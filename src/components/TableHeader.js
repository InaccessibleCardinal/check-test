import React from 'react';

export default function TableHeader(props){
  let tblHeaders = props.headers.map( (h,i) =>{
    return <div className={"table-header-cell "+h.dbName}
    key={'header_'+i}>
    <button
    onClick={()=>{props.handler(h.dbName)}}>
      {h.displayName}
    </button>
    </div>
  });
  return <div className="table-row">{tblHeaders}</div>
}
