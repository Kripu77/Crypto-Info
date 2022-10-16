import axios from 'axios'
import React from 'react'
import { numberWithCommas } from './numberWithCommas';
import SecondaryLoading from './SecondaryLoading';
import { commarize } from './commarize';


const url = "https://api.coingecko.com/api/v3/global";
const Global = () => {
    const[globalData, setGlobalData] = React.useState([])
    const[loading,setLoading] = React.useState(true)
 
    const cryptoData= [globalData]
  


    //fn to fetch
    const fetchFn=()=>{
        axios.get(url)
        .then((resp)=>{
         
            setGlobalData(resp.data)
           setLoading(false)
    })
        .catch((err)=>console.error(err))
    }
    //useEffect to monitor

    React.useEffect(()=>{
        fetchFn();
    },[])

    if(loading){
        return <SecondaryLoading/>
    }
    return (
      <section className="text-2xl p-7">
          {
              cryptoData.map((value)=>{
                const { data } = value;
                const marketPer = numberWithCommas(
                  data.market_cap_change_percentage_24h_usd.toFixed(2)
                )
                return (
                  <div
                    key={Date.now()}
                    className="sm:flex justify-around mt-3  ml-auto mr-auto max-w-screen-2xl "
                  >
                    <div>
                      <div>
                        <h1> Total No. of crypto-currencies</h1>
                        <p className="text-xl text-green-600">
                          {" "}
                          {numberWithCommas(data.active_cryptocurrencies)}
                        </p>
                        <br />
                      </div>
                      <div>
                        <h1> Total Market Cap</h1>
                        <p className="text-xl text-green-600">
                          {" "}
                          ${numberWithCommas(data.total_market_cap.aud)}
                        </p>
                        <br />
                      </div>
                    </div>
                    <div>
                      <div>
                        <h1>Total Volume</h1>
                        <p className="text-xl text-green-600">
                          {" "}
                          ${numberWithCommas(data.total_volume.aud)}
                        </p>
                        <br />
                      </div>
                      <div>
                        <h1> Market Cap Change</h1>
                        <p
                          className="text-xl"
                          className={
                            marketPer < 1 ? "text-red-600" : "text-green-600"
                          }
                        >
                          {" "}
                          {marketPer > 1 ? `+${marketPer}` : `${marketPer}`}%
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
          }
   
      </section>
    );
}

export default Global
