import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router';

export const SearchBox = () => {
const [search , setSearch] = useState("");
const navigate = useNavigate()
const handelSubmit = (e) => {
e.preventDefault()
if(search.trim()) {
navigate(`/search?q=${encodeURIComponent(search.trim())}`)

}
}



  return (
   <>
   <form onSubmit={handelSubmit} className='search_box'>
    <input type='text' placeholder='Search...' name='search' value={search} onChange={(e) => setSearch(e.target.value)} />
      <button type='submit' className='btn'> <FaSearch /></button>
</form>
   </>
  )
}
