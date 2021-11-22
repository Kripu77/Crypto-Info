import React from "react";

import axios from "axios";
import { HistoricalChart } from "../config/api";
import { Line } from "react-chartjs-2";
import SecondaryLoading from "./SecondaryLoading";
import { data } from "../config/buttonData";
import { motion } from "framer-motion";



const ChartTable = ({ id }) => {
  const [historicData, setHistoricData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [days, setDays] = React.useState(1)


  //framer setup alter as required

  const chartAnimation ={
    hidden:{x:-1000, opacity:0.7 },
    show:{x:0, opacity:10, transition:{
    default:{ ease: "easeOut",duration:2}, delay:0.4, type:"spring", stiffness:20
    }}
  }

  //get  chart data

  const getData = () => {
    axios
      .get(HistoricalChart(id, days))
      .then((res) => {
       
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
  }, [days]);



  //conditional render
  if (isLoading) {
    return <SecondaryLoading />;
  }
  return (
    <>
      <motion.section variants={chartAnimation} initial="hidden"
      animate="show"
       className="max-w-screen-lg ml-auto mr-auto">
        <Line
          data={{
            labels: historicData.map((coin) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),
            borderColor: "purple",

            datasets: [
              {
                data: historicData.map((coin) => coin[1]),
                label: `Price ( Past ${days} Days ) in Australian Dollars`,
                borderColor: "#7C3AED",
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        />
        <div className="block text-center sm:flex ">
          {data.map((val) => {
            const { name, value } = val;
          
            return (
              <div className=" ml-auto mr-auto" key={value}>
               
                <button
                  key={value}
                  className="bg-purple-600 hover:bg-purple-500 text-white uppercase text-md mx-auto p-2 mt-4 ml-4 rounded text-center w-40"
                  onClick={() => setDays(value)}
                >
                  {name}
                </button>
              </div>
            );
          })}
        </div>
      </motion.section>
    </>
  );
};

export default ChartTable;
