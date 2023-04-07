import React from 'react'

export default function Search(props) {
  /* 👉 Buraya props lazım mı? bir de bir yardımcı function yazsak iyi olur mu? */
const {search, setSearch, handleSearch} = props

// const handleSearch = (e)=>{
//   e.preventDefault();
//   setSearch(e.target.value.toLowerCase());
//   console.log(search);
// }

 
  return (
    <div className='search-friends container'>
      <input type="text"
          value={search}
          placeholder="Arama"
          onChange={handleSearch}
        />
    </div>
  )
}

