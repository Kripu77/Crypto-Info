import React, {useState} from 'react'
import { useLoginContext } from '../Context/Logincontext'

const UserSearch = () => {
    const {search, setSearch} = useLoginContext();
    return (
      <section>
          <form>
              <input type="text" placeholder="type here" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
          </form>
      </section>
    )
}

export default UserSearch
