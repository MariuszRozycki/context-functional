import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Button = () => {
  const { toggleLoggedState } = useContext(AppContext);

  return (
    <div>
      <button onClick={toggleLoggedState}>Change user state</button>
    </div>
  )
}

export default Button;