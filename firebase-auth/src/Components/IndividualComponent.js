import React from 'react'
import { useLoginContext } from '../Context/Logincontext'

const IndividualComponent = () => {

    const {apiData} = useLoginContext();
    const finalData  = [apiData]

    return (
        <div>
            {finalData.map((value)=>{
                const {avatar_url} = value;
                console.log(avatar_url)
                return <img src={avatar_url}/>
            })}
        </div>
    )
}

export default IndividualComponent
