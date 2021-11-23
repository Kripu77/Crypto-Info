import axios from 'axios';
import React from 'react'
import { table } from '../config/api';
import { useLoginContext } from '../context/LoginInContext'
import CoinTable from './CoinTable';
import Noresults from './Noresults';
import { numberWithCommas } from './numberWithCommas';
import SecondaryLoading from './SecondaryLoading';
import { motion } from 'framer-motion';

const Table = () => {
 

    const[tableData, setTableData] = React.useState([])
      const [search, setSearch] = React.useState('');
    const[loading, setLoading]= React.useState(true);
    const[error, setError] = React.useState(false)
    //framer motion setup
    const animationStyle ={
      hidden:{y:300, opacity:0},
      show:{y:0, opacity:1, transition:{
        default:{duration:4}, delay:0.5, type:"spring", stifness:20

      }}

    }

    //get top 100 coins
    const getTable=()=>{
      axios.get(`${table}`)
      .then((resp)=>{
        setTableData(resp.data)
        setLoading(false)
       
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
    // const filterData = (search)=>{
    // if(search===''){
    //   return tableData
    // }

    // else{


    //     setTableData(
    //       tableData.filter((value) => {
    //         console.log(value.symbol);
    //         return (
    //           value.id.includes(search) ||
    //           value.symbol.toLowerCase().includes(search)
    //         );
    //       })
    //     );}
      
    // }

    const handleSearch = () => {
    
      return tableData.filter(
        (coin) =>
          coin.id.includes(search) ||
          coin.symbol.toLowerCase().includes(search)
      );
      
    };
//conditional render
if(loading){
  return <SecondaryLoading/>
}
if(error){
  return <Noresults/>
}
        //    const{name, id, marketcap, current_price, market_cap_change_percentage_24h } = coins
    return (
      <motion.main variants={animationStyle} initial="hidden" animate="show">
        <section className="ml-auto mr-auto">
          <h1 className="text-yellow-900"> Search</h1>

          <input
            type="text"
            className="  w-26 sm:w-full h-10 rounded p-4 ml-auto mr-auto' bg-gray-100 text-black focus:outline-none focus:ring focus:border-black ..."
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </section>
        <CoinTable handleSearch={handleSearch} />
      </motion.main>
    );
    
    
}

export default Table
