import React from 'react';

function Item({ record }) {
  return (
    <div>
      <p>
        {record.artist}
        {` -- `}
        {record.title}
      </p>
    </div>
  );
}

export default Item;
