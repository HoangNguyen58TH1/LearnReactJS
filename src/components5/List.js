import React from 'react';

const List = ({data, render}) => {
  return (
    <div>
      { data.map(render) }
    </div>
  );
}

export default List;
