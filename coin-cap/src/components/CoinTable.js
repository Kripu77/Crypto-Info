import React from 'react'
import { Link } from 'react-router-dom';
import { numberWithCommas } from './numberWithCommas';
import ReactPaginate from "react-paginate";

const CoinTable = ({handleSearch}) => {
    //for pagination
    const [page, setPage] = React.useState(0);
    const dataPerPage =5;
    const numberOfDataShown = page * dataPerPage;
    const totalPages = Math.ceil(handleSearch().length / dataPerPage);
    const changePage = ({ selected }) => {
      setPage(selected);
    };

    return (
      <section>
        <table className="table-fixed mt-4 rounded-md ml-auto mr-auto sm:w-11/12 shadow-2xl  ">
          <thead className="bg-yellow-400 h-20 rounded-sm">
            <tr className="p-10">
              <th className=" w-1 ...">Coin</th>
              <th className="w-1 ...">Current Price</th>
              <th className="w-1 ...">Market Cap</th>
              <th className="w-1/4 ..."> Change in 24 hour</th>
            </tr>
          </thead>

          {handleSearch()
            .slice(numberOfDataShown, numberOfDataShown + dataPerPage)
            .map((coin) => {
              const {
                name,
                image,
                id,
                market_cap,
                current_price,
                market_cap_change_percentage_24h,
                symbol,
              } = coin;
              return (
                <tbody
                  className="bg-gray-400 border-solid border-b-2 border-light-blue-500 "
                  key={id}
                >
                  <tr className="bg-gray-700 transition duration-700 ease-in-out ... hover:bg-gray-500 text-white p-3 cursor-pointer ">
                    <td className="flex justify-between max-w-sm p-8 uppercase ">
                      <Link to={`/coin/${id}`}>
                        <img src={image} className="hover:shadow-2xl h-11 " />
                      </Link>


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
                      {market_cap_change_percentage_24h < 1
                        ? market_cap_change_percentage_24h.toFixed(2)
                        : `+${market_cap_change_percentage_24h.toFixed(2)}`}
                      %
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
        <section>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={totalPages}
            onPageChange={changePage}
            containerClassName={"navigationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"navigationDisabled"}
            activeClassName={"navigationActive"}
          />
        </section>
      </section>
    );
}

export default CoinTable
