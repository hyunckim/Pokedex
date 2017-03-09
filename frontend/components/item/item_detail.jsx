import React from 'react';

const ItemDetail = (props) => {
  debugger;
  return (
    <ul>
      <li>{ props.params.id }</li>
      <li>{ props.items.name }</li>
    </ul>
  );
};

export default ItemDetail;
