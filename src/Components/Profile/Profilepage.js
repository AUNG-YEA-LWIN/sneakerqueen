import React from 'react'
import { useUserAuth } from '../../context/AuthContext';

function Profilepage() {
  const {user, logOut} = useUserAuth();
  console.log(user);
  
  const handleLogOut = async () => {
    try{
      await logOut();
    }catch(err) {
      console.log(err.message);
    }
  }
  return (
    <>
    <div className='p-4 box mt-3 text-center'>
      <h2>This is profilepage for </h2>{user && user.email}
    </div>
    <div className='btnpf'>
    <div className='d-grid gap-2'>
      <button className='btnlogout' onClick={handleLogOut}>Log out</button>
    </div>
    </div>
    </>
  )
}

export default Profilepage