import React from 'react';

function Header({totalOutgoing}) {
  return (
    <header>
      <h1>Outgoings Tracker</h1>
      <div className="total-outgoing">£{totalOutgoing}</div>
    </header>
  );
}

export default Header;