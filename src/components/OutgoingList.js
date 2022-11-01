import React from 'react';
import OutgoingItem from './OutgoingItem';

function OutgoingList({ outgoing, setOutgoing }) {

  const removeOutgoing = i => {
    let temp = outgoing.filter((v, index) => index != i);
    setOutgoing(temp);
  }

  const sortByDate = (a, b) => {
    return a.date - b.date;
  }

  return (
    <div className="outgoing-list">
      {
        outgoing.sort(sortByDate).map((value, index) => (
          <OutgoingItem 
            key={index} 
            outgoing={value} 
            index={index} 
            removeOutgoing={removeOutgoing}
          />
        ))
      }
    </div>
  )
}

export default OutgoingList;