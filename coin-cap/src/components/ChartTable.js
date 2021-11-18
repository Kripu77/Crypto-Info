import React from "react";

import axios from "axios";
import { HistoricalChart } from "../config/api";
import { Line } from "react-chartjs-2";
import SecondaryLoading from "./SecondaryLoading";


const ChartTable = ({ id }) => {
  const [historicData, setHistoricData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  console.log(id);
  const days =365

  //get  chart data

  const getData = () => {
    axios
      .get(HistoricalChart(id, days))
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


//   const data = {
//     labels: historicData.map((coin)=>{
//         let date = new Date(coin[0]);
//         let time = date.getHours() > 12
//                       ? `${date.getHours() - 12}:${date.getMinutes()} PM`
//                       : `${date.getHours()}:${date.getMinutes()} AM`;
//                   return days === 1 ? time : date.toLocaleDateString();
//     }),

//     datasets: [
//       {
//         label: "price",
//         data: historicData.map((coin)=>coin[1]),
//         fill: false,
//         backgroundColor: "rgb(255, 99, 132)",
//         borderColor: "EEBC1D",
//       },
//     ],
//   };

  //conditional render
  if (isLoading) {
    return <SecondaryLoading />;
  }
  return (
    <>
      <section className="max-w-screen-lg">
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

            datasets: [
              {
                data: historicData.map((coin) => coin[1]),
                label: `Price ( Past ${days} Days ) in aud`,
                borderColor: "black",
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
      </section>
    </>
  );
};

export default ChartTable;
