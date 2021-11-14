import React from 'react'
import { BsSearch} from "react-icons/bs";
import { useLoginContext } from '../context/LoginInContext';


const Search = () => {
    const {search, setSearch, handleSearch} = useLoginContext();
    return (
      <section>
        <h1 className="text-yellow-900"> Search</h1>
       
          <input
            type="text"
            className=" w-full h-10 rounded p-4 bg-gray-100 text-black focus:outline-none focus:ring focus:border-black ..."
            placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value) }
          ></input>
    
      </section>
    );
}

export default Search
