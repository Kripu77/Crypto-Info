import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import ChartTable from '../components/ChartTable';
import Error from '../components/Error';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import SecondaryLoading from '../components/SecondaryLoading';
import { SingleCoin } from '../config/api';
import AdditionalInfo from '../components/AdditionalInfo';
import CoinMasthead from '../components/CoinMasthead';
import { Helmet } from "react-helmet";


const Coin = () => {
  //Private Route to check if the token is present
  const navigate = useNavigate();

  //useEffect to monitor it only runs once
  React.useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (!authToken) {
      navigate("/");
    }
   
  }, []);

  const [singleData, setSingleData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const { id } = useParams();

  // console.log(singleData.description.es)
  //fetch data

  const getData = () => {
    axios
      .get(SingleCoin(id))
      .then((resp) => {
    
        setSingleData(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  };

  //useEffect
  React.useEffect(() => {
    getData();
  }, [id]);

  //conditional render
  if (loading) {
    return <SecondaryLoading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title> {id.toUpperCase()}</title>
        <link rel="canonical" href="https://cryptoinfor.netlify.app" />
      </Helmet>
      <CoinMasthead singleData={singleData} />

      <ChartTable id={id} />
      <AdditionalInfo singleData={singleData} />
      <Footer />
    </section>
  );
}

export default Coin
