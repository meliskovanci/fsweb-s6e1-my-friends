import React from 'react'
import Friend from './Friend'

export default function FriendsList(props) {
  /* 👉 Buraya propları almak lazım mı? */
  const {friendsList, marriageStatusChanger} = props

  

  return (
    <div className='list-friends container'>
      {/* 👉 buraya hangi component/ları almak lazım? */}
      { friendsList.map ((friend)=>(<Friend friend = {friend} marriageStatusChanger={marriageStatusChanger} /> ))}
    
    </div>
  )
  }
