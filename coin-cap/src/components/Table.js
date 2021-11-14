import React from 'react'
import { useLoginContext } from '../context/LoginInContext'

const Table = () => {
    const{data} = useLoginContext();
    console.log(data)
        //    const{name, id, marketcap, current_price, market_cap_change_percentage_24h } = coins
    return (
      <table className="table-fixed mt-4 rounded-md ml-auto mr-auto w-full ">
        <thead className="bg-yellow-300 h-20 rounded-sm">
          <tr className="p-10">
            <th className=" w-1 ...">Coin</th>
            <th className="w-1 ...">Current Price</th>
            <th className="w-1 ...">Market Cap</th>
            <th className="w-1/4 ..."> Change in 24 hour</th>
          </tr>
        </thead>
        

        {data.map((coins) => {
          const {
            name,
            image,
            id,
            marketcap,
            market_data,
            market_cap_change_percentage_24h,
            symbol,
          } = coins;
          return (
            <tbody className="bg-gray-400 " key={id}>
              <hr />
              <tr className="bg-gray-700 transition duration-700 ease-in-out ... hover:bg-gray-500 text-white p-3 cursor-pointer ">
                <td className="flex justify-between max-w-sm p-8 uppercase ">
                  <img src={image.small} />
                  <div className="flex flex-col w-40">
                    <h1> {name} </h1>
                    <h1>{symbol}</h1>
                  </div>
                </td>
                <td>${market_data.current_price.aud}</td>
                <td>${market_data.market_cap.aud}</td>
                <td
                  className={
                    market_data.market_cap_change_percentage_24h < 1
                      ? "text-red-500"
                      : "text-green-400"
                  }
                >
                  {market_data.market_cap_change_percentage_24h}%
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    );
    
    
}

export default Table
