import React from 'react';

const ItemDetail = (props) => {

  return (
    <ul>
      <li>{ props.params.id }</li>
      <li>{ props.items.name }</li>
    </ul>
  );
};

export default ItemDetail;
