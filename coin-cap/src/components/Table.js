import axios from 'axios';
import React from 'react'
import { table } from '../config/api';
import { useLoginContext } from '../context/LoginInContext'
import Noresults from './Noresults';
import { numberWithCommas } from './numberWithCommas';
import SecondaryLoading from './SecondaryLoading';

const Table = () => {
 

    const[tableData, setTableData] = React.useState([])
      const [search, setSearch] = React.useState(null);
    const[loading, setLoading]= React.useState(true);
    const[error, setError] = React.useState(false)

    //get top 100 coins
    const getTable=()=>{
      axios.get(`${table}`)
      .then((resp)=>{
        setTableData(resp.data)
        setLoading(false)
        console.log(resp.data)
      })
      .catch((err)=>{
        setError(true)
        setLoading(false)
        console.log(err)

      })
    }

    //useEffect

    React.useEffect(()=>{
      getTable();

    }, [])

    //filter
    const filterData = (search)=>{
    if(search===null){
      return tableData
    }

    else{


        setTableData(
          tableData.filter((value) => {
            console.log(value.symbol);
            return (
              value.id.includes(search) ||
              value.symbol.toLowerCase().includes(search)
            );
          })
        );}
      
    }
//conditional render
if(loading){
  return <SecondaryLoading/>
}
if(error){
  return <Noresults/>
}
        //    const{name, id, marketcap, current_price, market_cap_change_percentage_24h } = coins
    return (
      <main>
        <section>
          <h1 className="text-yellow-900"> Search</h1>
          <form onChange={()=>filterData(search)}>
            <input
              type="text"
              className=" w-full h-10 rounded p-4 bg-gray-100 text-black focus:outline-none focus:ring focus:border-black ..."
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
          </form>
        </section>
        <table className="table-fixed mt-4 rounded-md ml-auto mr-auto w-full shadow-2xl ">
          <thead className="bg-yellow-400 h-20 rounded-sm">
            <tr className="p-10">
              <th className=" w-1 ...">Coin</th>
              <th className="w-1 ...">Current Price</th>
              <th className="w-1 ...">Market Cap</th>
              <th className="w-1/4 ..."> Change in 24 hour</th>
            </tr>
          </thead>

          {tableData.map((coins) => {
            const {
              name,
              image,
              id,
              market_cap,
              current_price,
              market_cap_change_percentage_24h,
              symbol,
            } = coins;
            return (
              <tbody
                className="bg-gray-400 border-solid border-b-2 border-light-blue-500 "
                key={id}
              >
                <tr className="bg-gray-700 transition duration-700 ease-in-out ... hover:bg-gray-500 text-white p-3 cursor-pointer ">
                  <td className="flex justify-between max-w-sm p-8 uppercase ">
                    <img src={image} className="hover:shadow-2xl h-11 " />
                    <div className="flex flex-col w-40">
                      <h1 className="text-2xl">{symbol}</h1>
                      <p className="text-xs text-gray-200"> {name} </p>
                    </div>
                  </td>
                  <td>${numberWithCommas(current_price)}</td>
                  <td>${numberWithCommas(market_cap)}</td>
                  <td
                    className={
                      market_cap_change_percentage_24h < 1
                        ? "text-red-500"
                        : "text-green-400"
                    }
                  >
                    {market_cap_change_percentage_24h}%
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </main>
    );
    
    
}

export default Table
