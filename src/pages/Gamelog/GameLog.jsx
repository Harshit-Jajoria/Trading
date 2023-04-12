import moment from "moment/moment";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useTable } from "react-table";
import { useAuth } from "../../context/auth";
import { loadTradeRecords } from "../../store/reducers/trade";
import "./gameLog.css";

export const GameLog = () => {
  const { countryReducer, playReducer, userReducer, tradeReducer } =
    useSelector((state) => state);
  const { loggedIn,setplay } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const columns = useMemo(() => [
    {
      Header: "CC",
      accessor: "cc",
    },
    {
      Header: "Time GMT",
      accessor: "time",
    },
    {
      Header: "Game Time",
      accessor: "gameTime",
    },
    {
      Header: "Trade",
      accessor: "trade",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Quantity",
      accessor: "quantity",
    },
    {
      Header: "Total",
      accessor: "total",
    },
    {
      Header: "Demo AC",
      accessor: "demoAc",
    },
  ]);

  useEffect(() => {
    // console.log("tradeReducers.data", tradeReducer);
    if (loggedIn) {

      dispatch(
        loadTradeRecords({
          url: `/get_user_trade_record_by_id/${userReducer.data?.response?._id}`,
        })
      );
    } else {
      console.log("User is not logged in");
      setplay(false)

      // navigate("/login");
    }
  }, [loggedIn]);

  useEffect(() => {
    if (tradeReducer?.data != null && tradeReducer?.loader === false) {
      let array = tradeReducer.data?.response
      // array.sort((a,b)=>{
      //   return a?.createdAt - b?.createdAt
      // })
      let newData = array?.map((item) => {
        return {
          cc: countryReducer?.data?.find(
            (country) => country?.count === item?.country_index
          )?.code,
          time: moment(item?.createdAt).format("HH:mm:ss"),
          gameTime: moment(item?.createdAt).format("HH:mm:ss"),
          trade: item?.action,
          price:
            item?.action === "buy"
              ? item?.trade_rate_buy_price?.toFixed(2)
              : item?.trade_rate_sell_price?.toFixed(2),
          quantity: item?.trade_quantity,
          total:
            item?.action === "buy"
              ? (item?.trade_quantity * item?.trade_rate_buy_price).toFixed(2)
              : (item?.trade_quantity * item?.trade_rate_sell_price).toFixed(2),
          demoAc: 10,
        };
      });
      console.log("newData", newData);
      newData.reverse()
     
      setData(newData);
    }
  },[tradeReducer?.data])

  //   data = [
  //     {
  //       cc: "01/12/21",
  //       time: "13:35:00",
  //       gameTime: "13:35:00",
  //       trade: "(10.0)",
  //       price: "200.00",
  //       quantity: "200.00",
  //       total: "200.00",
  //       demoAc: "200.00",
  //     },
  //   ];

  return (
    <main className="game_log-main">
      <h2>Demo Game Log & Sales Journal</h2>
      <Table columns={columns} data={data} />
    </main>
  );
};

export const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data,
  });

  /* 
      Render the UI for your table
      - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
    */
  return data?.length > 0 ? (
    <table className="game_log-table" {...getTableProps()}>
      <thead className="game_log-table-head demo-head">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="reactTable-body demo-body" {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <div
      className="game_log-table"
      style={{
        minHeight: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      No Data
    </div>
  );
};
