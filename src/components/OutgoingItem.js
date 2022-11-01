import React from 'react';

function OutgoingItem({outgoing, index, removeOutgoing}) {
  let date = new Date(outgoing.date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const removeHandle = i => {
    removeOutgoing(i);
  }

  return (
    <div className="outgoing-item">
      <button className="remove-item" onClick={() => removeHandle(index)}>x</button>
      <div className="desc">{outgoing.desc}</div>
      <div className="price">£{outgoing.price}</div>
      <div className="date">{day + "/" + month + "/" + year}</div>
    </div>
  )
}

export default OutgoingItem;