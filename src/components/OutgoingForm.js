import React, {useRef} from 'react';

function OutgoingForm({ outgoing, setOutgoing }) {
  const desc = useRef(null);
  const date = useRef(null);
  const price = useRef(null);

  const AddOutgoing = e => {
    e.preventDefault();

    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1] - 1, d[2]);
    
    setOutgoing([...outgoing, {
      "desc": desc.current.value,
      "price": price.current.value,
      "date": newD.getTime()
    }]);

    desc.current.value = "";
    price.current.value = null;
    date.current.value = null;
  }

  return (
    <form className="outgoing-form" onSubmit={AddOutgoing}>
      <div className="form-inner">
        <input type="text" name="desc" id="desc" placeholder="Income Description..." ref={desc} /> 
        <input type="number" name="price" id="price" placeholder="Price..." ref={price}/>
        <input type="date" name="date" id="date" placeholder="Income date..." ref={date} />
        <input type="submit" value="Add Outgoings" />
      </div>
    </form>
  )
}

export default OutgoingForm;