import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const UserInfo = () => {
  const { isUserLogged } = useContext(AppContext);
  const userLoggedInfo = isUserLogged ? 'Logged in' : 'Not logged'

  return (
    <>
      <div>
        <p>USER IS: {userLoggedInfo}</p>
      </div>
    </>
  )
}


export default UserInfo;