import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import Error from '../components/Error';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { numberWithCommas } from '../components/numberWithCommas';
import SecondaryLoading from '../components/SecondaryLoading';
import { SingleCoin } from '../config/api';


const Coin = () => {

    const [singleData, setSingleData] = React.useState([]);
    const[loading, setLoading] =React.useState(true);
    const[error, setError] = React.useState(false)
const {id} = useParams()
console.log(useParams());
// console.log(singleData.description.es)
    //fetch data

    const getData = ()=>{
        axios.get(SingleCoin(id))
        .then((resp)=>{
            console.log(resp.data)
            setSingleData(resp.data)
            setLoading(false)
            
        })
        .catch((err)=>{
            setError(true)
            setLoading(false)
        })

    }


    //useEffect
    React.useEffect(()=>{
        getData()
    },[id])

//conditional render
if(loading){
    return <SecondaryLoading/>
}
if(error){
    return <Error/>
}

    return (
      <section>
        <section className="mt-10 text-center max-w-5xl ml-auto mr-auto mb-10">
          <img src={singleData.image.large} className="mr-auto ml-auto" />
          <h1 className="text-4xl text-center"> {singleData.name}</h1>
          <h1>
            Description: <br />
            {singleData.description.ar}
          </h1>
          <h1> Price: ${singleData.market_data.current_price.aud}</h1>
          <h1> Market Cap: ${ numberWithCommas( singleData.market_data.market_cap.aud)}</h1>
          <h1>Rank : {singleData.market_cap_rank}</h1>
        </section>
        <Footer />
      </section>
    );
}

export default Coin
