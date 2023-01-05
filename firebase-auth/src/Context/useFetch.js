import React, {useEffect, useState} from 'react'
import { useLoginContext } from './Logincontext'

const useFetch = (url) => {


const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);
const [apiData, setApiData] = useState([]);

    const fetchFn=()=>{
        fetch(url)
        .then((resp)=>{
            if(resp.status>200 || resp.status<299){
    return resp.json();
            }
            else{
                setError(true)
                setLoading(false)
            }
       
        
        }
        )
        .then((data)=>{
            setLoading(false)
            setApiData(data)
           console.log(data)
        })
        .catch((err)=>{console.err(err)})
    }
   
useEffect(() => {
   fetchFn()
}, [url])
    return {error, loading, apiData}
}

export default useFetch
