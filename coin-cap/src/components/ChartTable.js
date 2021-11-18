import React from "react";

import axios from "axios";
import { HistoricalChart } from "../config/api";
// import { Line } from "react-chartjs-2";
import { Chart } from "react-charts";


import SecondaryLoading from "./SecondaryLoading";


const ChartTable = ({ id }) => {
  const [historicData, setHistoricData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  console.log(id);

  //get  chart data

  const getData = () => {
    axios
      .get(HistoricalChart(id))
      .then((res) => {
        console.log(res.data);
        setHistoricData(res.data.prices)
        setIsLoading(false);
      })

      .catch((err) => {
        console.error(err);
        setIsError(true);
        setIsLoading(false);
      });
  };

  //useEffect
  React.useEffect(() => {
    getData();
  }, [id]);

  //conditional render
  if (isLoading) {
    return <SecondaryLoading />;
  }

return(
    <>
    <h1> Here goes the chart table</h1>
    </>
)}
export default ChartTable;
