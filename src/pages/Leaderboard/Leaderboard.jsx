import React, { useEffect, useMemo, useState } from "react";
import "./leaderboard.css";
import { Table } from "../../components/Table/Table";
import LeaderBoardDate from "../../components/Leaderboard/LeaderBoardDate";
import { useTable } from "react-table";
import { useSelector } from "react-redux";
import { apiCall } from "../../store/middleware/api";
import { Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/auth";

export const Leaderboard = () => {
  const {
    getBalanceType
  }= useAuth()
  // Toggle the row visibility
  const [columnVisibility, setColumnVisibility] = useState({
    isPLP: true,
    isProfit: false,
    isKOTTO: false,
  });

  const [selected, setSelected] = useState({
    isAllTime: true,
    dateData: {
      month: "MONTH",
      year: "YEAR",
    },
    isDate: false,
    isMonthSelected: false,
    isYearSelected: false,
    isPLP: true,
    isProfit: false,
    isKOTTO: false,
  });

  // Highlight the row in which current user data is there.
  const [selectedUserRow, setSelectedUserRow] = useState("2");
  const { userReducer, leaderboardReducer } = useSelector((state) => state);
  const [data, setData] = useState([]);

  const columns = useMemo(
    () => [
      {
        Header: "Position",
        accessor: "position",
      },
      {
        Header: "Username",
        accessor: "userName",
      },
      {
        Header: "PLP",
        accessor: "plp",
      },
      {
        Header: "Profit",
        accessor: "profit",
      },

      {
        Header: "KOTTO",
        accessor: "kotto",
      },
      {
        Header: "Total P",
        accessor: "total",
      },
    ],
    []
  );
  // const data = [
  //   {
  //     position: "1",
  //     userName: "Ace",
  //     plp: "120.7",
  //     profit: "226.00",
  //     kotto: 1,
  //     total: 1200,
  //   },
  //   {
  //     position: "2",
  //     userName: "Luffy",
  //     plp: "120.7",
  //     profit: "226.00",
  //     kotto: 1,
  //     total: 1200,
  //   },
  //   {
  //     position: "3",
  //     userName: "Sanji",
  //     plp: "120.7",
  //     profit: "226.00",
  //     kotto: 1,
  //     total: 1200,
  //   },
  //   {
  //     position: "4",
  //     userName: "Zoro",
  //     plp: "120.7",
  //     profit: "226.00",
  //     kotto: 1,
  //     total: 1200,
  //   },
  // ];

  const {
    getTableProps,
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow,
    allColumnsHidden,
    setHiddenColumns,
  } = useTable({
    columns,
    data,
  });

  let getMonthDates = (monthNum = 0, year = new Date().getFullYear()) => {
    let date = new Date(Date.UTC(year, monthNum));
    let start = date.toISOString().substring(0, 19);
    date.setUTCMonth(monthNum + 1, 0);
    return [start, date.toISOString().substring(0, 19)];  
  }
  // Given a month name, return it's ECMAScript month number
  // Uses host default language for month name
  let getMonthDatesFromName = (() => {
    let date = new Date();
    let monthNames = (() => {
      date.setMonth(0, 1);
      for (var arr=[], i=0; i<12; i++) {
        arr.push(date.toLocaleString('default',{month:'long'}));
        date.setMonth(i+1)
      }
      return arr;
    })();
  
    return (monthName, year) => {
      let monthNum = monthNames.indexOf(monthName);
      // If month name not found, return undefined
      return monthNum < 0? void 0 : getMonthDates(monthNum, year);
    }
  })();

  let monthName = {
    'jan': 'January',
    'feb': 'February',
    'mar': 'March',
    'apr': 'April',
    'may': 'May',
    'jun': 'June',
    'jul': 'July',
    'aug': 'August',
    'sep': 'September',
    'oct': 'October',
    'nov': 'November',
    'dec': 'December'
  }

  useEffect(() => {
    // console.log("tradeReducers.data", tradeReducer);
    if (userReducer.data?.response?._id) {
      if(!selected?.isAllTime && selected?.dateData?.month !== "MONTH" && selected?.dateData?.year !== "YEAR"){
        console.log("selected", monthName[selected?.dateData?.month], parseInt(selected?.dateData?.year)
        )
        const date =  getMonthDatesFromName(monthName[selected?.dateData?.month], parseInt(selected?.dateData?.year)).toString().split(",")
        if (getBalanceType() === "CR") {
          toast("please select either free or premium mode to view the leaderboard game", {
            style: {
              color: "red",
            },
          });
          return;
        }
        console.log("date", date)
        
      
        apiCall({
          url: `/leaderboard/${getBalanceType()}/${date[0]}/${date[1]}`,
        })
          .then((res) => {
            console.log("response", res?.response);
            if (res.response) {
              let leaderboardData = res.response;
              leaderboardData?.reverse();
              let tableData = leaderboardData?.map((item, index) => {
                return {
                  position: index + 1,
                  userName: item?.user_id?.user_name,
                  plp: "120.7",
                  profit: item?.profit?.toFixed(2),
                  kotto: 1,
                  total: 1400,
                };
              });
              setData(tableData);
            }
          })
          .catch((err) => {
            console.log("err", err);
          });
      }
      else
      {
        if (getBalanceType() === "CR") {
          toast("please select either free or premium mode to view the leaderboard game", {
            style: {
              color: "red",
            },
          });
          return;
        }
        let todayUTCTime = new Date()
        apiCall({
          url: `/leaderboard/${getBalanceType()}/2020-01-01T00:00:00Z/${todayUTCTime.toISOString()}`,
        })
          .then((res) => {
            console.log("response", res?.response);
            if (res.response) {
              let leaderboardData = res.response;
              leaderboardData?.reverse();
              let tableData = leaderboardData?.map((item, index) => {
                return {
                  position: index + 1,
                  userName: item?.user_id?.user_name,
                  plp: "120.7",
                  profit: item?.profit?.toFixed(2),
                  kotto: 1,
                  total: 1400,
                };
              });
              setData(tableData);
            }
          })
          .catch((err) => {
            console.log("err", err);
          });
      }
    } else {
      console.log("User is not logged in");
      // Navigate("/login");
    }
  }, [userReducer.data?.response, selected?.dateData]);

  useEffect(() => {
    if (columnVisibility.isPLP) {
      setHiddenColumns(["profit", "kotto"]);
    } else if (columnVisibility.isProfit) {
      setHiddenColumns(["plp", "kotto"]);
    } else if (columnVisibility.isKOTTO) {
      setHiddenColumns(["plp", "profit"]);
    }
  }, [columnVisibility]);

  return (
    <main className="wrapper_leaderBoard">
      <LeaderBoardDate
        setColumnVisibility={setColumnVisibility}
        columnVisibility={columnVisibility}
        // setData = {setData}
        // data = {data}
        setSelected={setSelected}
        selected={selected}
      />
      <section className="leaderBoard_section">
        <table className="reactTable-table" {...getTableProps()}>
          <thead className="reactTable-head">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className={`${
                      column.Header === "PLP" ||
                      column.Header === "Profit" ||
                      column.Header === "KOTTO"
                        ? "table-head-bg-color"
                        : ""
                    }`}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {<tbody className="reactTable-body" 
          {...getTableBodyProps()}>
            {rows?.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row?.cells?.map((cell) => {
                    {
                      /* console.log(row); */
                    }
                    return (
                      <td
                        className={
                          row.values.position === selectedUserRow &&
                          "table-head-bg-color"
                        }
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
          }
        </table>
      </section>
    </main>
  );
};
