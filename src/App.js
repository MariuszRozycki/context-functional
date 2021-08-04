import React, { useState } from 'react';
import { AppContext, defaultObject } from './AppContext';

import Button from './Button';
import UserInfo from './UserInfo';

import './App.css';



const App = () => {
  const [isUserLogged, setIsUserLogged] = useState(defaultObject.isUserLogged);
  const [isUserAdult, setIsUserAdult] = useState(true);


  const handleToggleLoggedState = () => setIsUserLogged(prevValue => !prevValue);
  const handleToggleAdultState = () => setIsUserAdult(prevValue => !prevValue);

  return (
    <div className="App">

      <AppContext.Provider value={{
        isUserLogged: isUserLogged,
        toggleLoggedState: handleToggleLoggedState
      }}>
        <UserInfo />
        <Button />
      </AppContext.Provider>

      {/* Is User Adult */}

      <AppContext.Provider value={{
        isUserLogged: isUserAdult,
        toggleLoggedState: handleToggleAdultState
      }}>
        <UserInfo />
        <Button />
      </AppContext.Provider>

    </div>
  );


}

export default App;


