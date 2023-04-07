import React, { useState } from 'react';
import Search from "./Search";
import FriendsList from "./FriendsList"
import data from "../dummy-data/friends"


export default function App() {

  /* 👉 Buraya state tanımlamak gerekli mi? */
  const [search, setSearch] = useState("")
  const [friendsList, setFriendList] = useState(data)

  const marriageStatusChanger = (id) => {
   const upDatedFriends = friendsList.map((friend)=>{
    if (friend.id === id){
      friend.married = !friend.married;
    }
    return friend;
   })
   setFriendList(upDatedFriends)
  }


  const handleSearch = (e)=>{
    const searchResult = data.filter ((friend)=>(
      friend.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    ))
    setFriendList(searchResult)
  }
  
  
  return (
    <div className='app-friends container'>
      {/* 👉 Buraya hangi componentler gelecek? */}
      <Search handleSearch={handleSearch} setSearch={setSearch} />
      <FriendsList friendsList={friendsList} marriageStatusChanger={marriageStatusChanger}  />
    </div>
  )
}
