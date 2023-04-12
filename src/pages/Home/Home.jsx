import React, { useEffect, useRef, useState } from "react";
import "./home.css";
// import { useAuth } from "../../context/auth";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import Clock from "../../components/Clock";
import { useAuth } from "../../context/auth";
import { loadplay } from "../../store/reducers/play";
import { apiCall } from "../../store/middleware/api";
import Timer from "./Timer";
// import Timer from "./Timer";

const UserTable = () => {
  return (
    <section className="home_tabs">
      <table style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "10vw" }}>Time</th>
            <th style={{ width: "10vw" }}>Position P</th>
            <th style={{ width: "10vw" }}>User</th>
            <th style={{ width: "10vw" }}>CC</th>
            <th style={{ width: "10vw" }}>PLP</th>
            <th style={{ width: "10vw" }}>Profit</th>
            <th style={{ width: "10vw" }}>KOTTO</th>
            <th style={{ width: "10vw" }}>Total P</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ALL</td>
            <td>ALL</td>
            <td>Open</td>
            <td>1.00</td>
            <td>0</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

// function Timer() {

//   return (
//     <div>
//       <button onClick={startTimer}>Start</button>
//       <div>
//         {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
//       </div>
//     </div>
//   );
// }

export const Home = () => {
  const [isGameModeSelected, setGameModeSelected] = useState(false);

  const [buyItemHover, setBuyItemHover] = useState(false);

  const ref = useRef(null);

  const { countryReducer, playReducer, userReducer } = useSelector(
    (state) => state
  );

  const dispatch = useDispatch();

  const [confirmation, setconfirmation] = useState(false);
  const timer = useRef();
  useState()
  const [activeBoughtCountryArray, setActiveBoughtCountryArray] = useState([]);
  const {
    loggedIn: isLoggedIn,
    setLoggedIn,
    getBalanceType,
    setPcr,
    setDcr,
    setCr,
    dcr,
    pcr,
    cr,
    tcr,
    setTcr,
    play,
    setplay,
    setpauseTimer,
    pauseTimer,
    pauseTimerInterval,
    myInterval,
    seconds,
    setSeconds,
    selectedCountry,
    setSelectedCountry,
    gameDurationTimer,
    setGameDurationTimer,
    selected_country,
    setselected_country,
    endGame,
    gameStarted,
    setGameStarted,
    updateCr,
    pauseDisp,
    setPauseDisp,
    // minutes,
    // second,
    startTimer,
    winnerDeclared,
    setWinnerDeclared,
    setElapsedPlayTime,
    elapsedPlayTime,
    setStartPlayTime,
    startPlayTime,
    playGame,
    navigate,
    buyPrice,
    SetBuyPrice,
    sellPrice,
    SetSellPrice,
  } = useAuth();

  useEffect(() => {
    if (playReducer?.data?.letUserGameStatusUpdated != null && isLoggedIn)
      updateCr(
        playReducer?.data?.letUserGameStatusUpdated?.user_game_type,
        playReducer?.data?.letUserGameStatusUpdated?.cr_qty
      );
    else if (playReducer?.data?.response?.cr_qty != null && isLoggedIn) {
      updateCr(
        playReducer?.data?.response?.user_game_type,
        playReducer?.data?.response?.cr_qty
      );
    }
  }, [isLoggedIn, playReducer.data]);

  // useEffect(() => {
  //   if (playReducer.data?.trade_rate) {
  //     const { buy_price, count, sell_price } = playReducer.data?.trade_rate;
  //     // setselected_country({...selected_country , current_quantity: count})
  //     SetBuyPrice(buy_price);
  //     SetSellPrice(sell_price);
  //   } else {
  //     SetBuyPrice(1);
  //     SetSellPrice(0);
  //   }
  // }, [playReducer.data]);

  useEffect(() => {
    if (
      userReducer?.data === null ||
      (userReducer.data === undefined && isLoggedIn)
    ) {
      setLoggedIn(false);
    }
  }, [userReducer]);

  // useEffect(() => {
  //   if (
  //     (playReducer.gameState === "success" ||
  //       playReducer.gameState === "started") &&
  //     play &&
  //     userReducer.data?.response?._id
  //   ) {
  //     myInterval.current = setInterval(() => {
  //       if (seconds > 0) {
  //         setSeconds(seconds - 1);
  //       }
  //       if (seconds === 0) {
  //         playGame();
  //       }
  //     }, 1000);
  //   }
  //   return () => {
  //     clearInterval(myInterval.current);
  //   };
  // }, [seconds]);

  useEffect(() => {
    if (play) {
      setpauseTimer({
        ...pauseTimer,
        minutes: 0,
        second: 0,
      });
    }
  }, [play]);

  function eleminated_country_color(item) {
    const findCountry =
      playReducer.data?.letUserGameStatusUpdated?.eleminated_countries.find(
        (e) => e.eleminated_country_index === item.count
      );
    const lastElimainateCountry =
      playReducer.data?.letUserGameStatusUpdated?.eleminated_countries.filter(
        (e) => e.eleminated_by === "computer"
      ).sort(function(x, y){
        return new Date(x.updated_at) - new Date(y.updated_at)
    });
    const lastEliminatedCountryByUserArray = playReducer.data?.letUserGameStatusUpdated?.eleminated_countries.filter(
      (e) => e.eleminated_by === "user" && e.user_cc_elimited_by_computer === true
    )

    if (findCountry && selected_country.current_index !== item.count) {
      return findCountry.eleminated_by === "computer"
        ? lastElimainateCountry[lastElimainateCountry?.length - 1]
            .eleminated_country_index === item.count
          ? play
            ? "last_eleminated_country_with_flash"
            : "last_eleminated_country"
          : "eleminated_country"
        : "not_eleminated_country";
    }
    return winnerDeclared ? "goldenWinnerAnimation" : "";
  }
  const playGameConfirm = () => {
    if (userReducer.data?.response?._id) {
      /* added condition for mandatory selection of demo or premium mode */
      if (getBalanceType() === "CR") {
        toast("please select either free or premium mode to start the game", {
          style: {
            color: "red",
          },
        });
        return;
      }
      /* added condition for negative quantity of shares */
      if (selected_country.current_quantity <= 0) {
        toast("please choose a valid quantity of shares", {
          style: {
            color: "red",
          },
        });
        return;
      }
      if (getBalanceType() === "DCR") {
        if (dcr < selected_country.current_quantity) {
          toast("you don't have enough balance to play the game", {
            style: {
              color: "red",
            },
          });
          return;
        }
        dispatch(
          loadplay({
            url: `/play/${userReducer.data?.response?._id}/${selected_country.current_index}/${selected_country.current_type}/${selected_country.current_quantity}`,
          })
        );
        // if(!isFirstTime)
        // {
        setselected_country({
          ...selected_country,
          current_index: null,
          current_quantity: null,
          current_type: null,
        });
        // }
      } else if (getBalanceType() === "TCR") {
        if (tcr < selected_country.current_quantity) {
          toast("you don't have enough balance to play the game", {
            style: {
              color: "red",
            },
          });
          return;
        }
        dispatch(
          loadplay({
            url: `/play_tcr/${userReducer.data?.response?._id}/${selected_country.current_index}/${selected_country.current_type}/${selected_country.current_quantity}`,
          })
        );
      } else if (getBalanceType() === "PCR") {
        if (pcr < selected_country.current_quantity) {
          toast("you don't have enough balance to play the game", {
            style: {
              color: "red",
            },
          });
          return;
        }
        dispatch(
          loadplay({
            url: `/play_pcr/${userReducer.data?.response?._id}/${selected_country.current_index}/${selected_country.current_type}/${selected_country.current_quantity}`,
          })
        );
      }

      setconfirmation(true);
      setTimeout(() => {
        console.log(
          "play game confirm",
          playReducer.data?.letUserGameStatusUpdated?.eleminated_countries
        );
        let eliminatedByUSerCountry =
          playReducer.data?.letUserGameStatusUpdated?.eleminated_countries.filter(
            (e) => e.eleminated_by === "user"
          );
        setActiveBoughtCountryArray(eliminatedByUSerCountry);
      }, 2000);
      // if (seconds === 0) {
      //   setSeconds(10);
      // }
      // //console.log("play game", gameStarted);
    } else {
      navigate("/login");
    }
  };

  const delayPause = async (seconds) => {
    console.log("delay pause", seconds);
    setPauseDisp(true);
    setTimeout(() => {
      playGame(false, true);
      clearInterval(myInterval.current);
      setPauseDisp(false);
    }, Math.floor(seconds) * 1000);
  };

  const selectedCodeDisplay = () => {
    if (selectedCountry?.code === "CC") {
      return "CC";
    } else if (selectedCountry?.code === "") {
      const lastElimainateCountry =
        playReducer.data?.letUserGameStatusUpdated?.eleminated_countries.filter(
          (e) => e.eleminated_by === "computer"
        );
      if (lastElimainateCountry?.length > 0) {
        let lasteliminatedCountryData = countryReducer?.data?.find(
          (res) =>
            res.count ===
            lastElimainateCountry[lastElimainateCountry?.length - 1]
              .eleminated_country_index
        );
        return lasteliminatedCountryData?.code;
      } else return "CC";
    } else {
      return selectedCountry?.code;
    }
  };
  const selectedNameDisplay = () => {
    if (selectedCountry?.name === "Trade") {
      return "Trade";
    } else if (selectedCountry?.name === "") {
      const lastElimainateCountry =
        playReducer.data?.letUserGameStatusUpdated?.eleminated_countries.filter(
          (e) => e.eleminated_by === "computer"
        );
      if (lastElimainateCountry?.length > 0) {
        let lasteliminatedCountryData = countryReducer?.data?.find(
          (res) =>
            res.count ===
            lastElimainateCountry[lastElimainateCountry?.length - 1]
              .eleminated_country_index
        );
        return lasteliminatedCountryData?.name;
      } else return "Trade";
    } else {
      return selectedCountry?.code;
    }
  };
  return (
    <main className="wrapper_home">
      {userReducer.data?.response && <UserTable />}

      <section className="home_tabs">
        <table style={{ tableLayout: "fixed" }}>
          <thead>
            <tr>
              <th style={{ width: "5vw" }}>CC</th>
              <th style={{ width: "7.5vw" }}>Trade</th>
              <th style={{ width: "7.5vw" }}>Price</th>
              <th style={{ width: "10vw" }}>Quantity</th>
              <th style={{ width: "10vw" }}>Value</th>
              <th style={{ width: "10vw" }}>Cost</th>
              <th style={{ width: "10vw" }}>Open</th>
              <th style={{ width: "10vw" }}>Closed</th>
              <th style={{ width: "10vw" }}>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ALL</td>
              <td>Open</td>
              <td>1.00</td>
              <td>0</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Only show this if the country is selected form the tile. */}
      {seconds > 0 && (
        <section className="timer_section">
          <p>Tile Knockout Process: 10 secs &nbsp;&nbsp; RNG@random.org</p>
          <div className="timer_display">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
              (res, i, array) =>
                seconds > 0 && res <= seconds + 1 && <div>{res}</div>
            )}
          </div>
          <div className="timer_display--box">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
              (res) => res < seconds + 1 && <div className="timer-title" />
            )}
          </div>
        </section>
      )}

      <section className="home_section">
        <ul className="section_list">
          <li className="w-100">
            <p className="font-weight-normal d-flex-center">Premium Credits</p>
          </li>
          <li
            className="hover_item "
            onMouseOver={() => setBuyItemHover(true)}
            onMouseOut={() => setBuyItemHover(false)}
          >
            <button className="font-weight-bold">BUY</button>
            <div className="hover_menu buy_menu ">
              <label>Quantity</label>
              <input type={"number"} min={1} />
              <label>USD</label>
              <input type={"number"} />
              <span></span>
              <button className="hover_confirm-btn">Confirm</button>
            </div>
          </li>
          <li
            ref={ref}
            onClick={() => {
              if (!play) setGameModeSelected(!isGameModeSelected);
              else
                toast("You can't view game log while playing the game", {
                  style: {
                    color: "red",
                  },
                });
            }}
            className={"hover-link"}
          >
            <NavLink
              to={!play ? "/game-log" : "/"}
              className={"font-weight-normal"}
              style={{
                color: isGameModeSelected ? "#00d2ff" : "white",
              }}
            >
              {!play ? "Game Log" : "Game Log"}
            </NavLink>
          </li>
          <li
            className="w-100"
            style={{
              backgroundColor: "#2e2e2e",
            }}
          >
            <p className="font-size-12pt font-weight-normal">
              KO 100 Trading Platform
            </p>
          </li>
          <li>
            <p className="font-weight-normal">
              <Clock />
              {/* 05:30 */}

              {/* GMT */}
            </p>
          </li>
          <li
            style={{
              backgroundColor: selected_country.current_index
                ? "#76A5AF"
                : selectedCountry?.code === ""
                ? "#85200c"
                : "inherit",
              color: "white",
            }}
          >
            <p>
              {countryReducer?.data?.find(
                (res) => res.count === selected_country.current_index
              )?.code || selectedCodeDisplay()}
              {/* {countryReducer?.data?.find(
                (res) => res.count === selected_country.current_index
              )?.code ||
                countryReducer?.data?.find(
                  (res) => res.count === selectedCountry.current_index
                )?.code ||
                "CC"} */}
            </p>
          </li>
          <li
            //className="navbar-item user"
            className={
              selectedCountry.code === "CD" ||
              selectedCountry.code === "US" ||
              selectedCountry.code === "VG"
                ? "fluid-font-size"
                : ""
            }
            style={{
              backgroundColor: "white",
              color: "black",
            }}
          >
            <div
              className="navbar_dropdown"
              style={{ justifyContent: "center" }}
            >
              <div
                // className="dropdown_list_title"
                // onClick={setGameModePremium}
                style={{ color: "#000000", justifyContent: "center" }}
              >
                {countryReducer?.data?.find(
                  (res) => res.count === selected_country.current_index
                )
                  ? countryReducer?.data?.find(
                      (res) => res.count === selected_country.current_index
                    )?.name &&
                    `${countryReducer.data
                      .find(
                        (res) => res.count === selected_country.current_index
                      )
                      ?.name?.substring(0, 15)}...`
                  : selectedNameDisplay()}
              </div>

              {isLoggedIn && (
                <ul className="dropdown_list ">
                  <li
                    className={
                      selectedCountry.code === "CD" ||
                      selectedCountry.code === "US" ||
                      selectedCountry.code === "VG"
                        ? "fluid-font-size"
                        : "w-fit-content"
                    }
                    style={{
                      backgroundColor: "white",
                      color: "black",
                    }}
                  >
                    {(countryReducer.data.find(
                      (res) => res.count === selected_country.current_index
                    )?.name &&
                      `${
                        countryReducer.data.find(
                          (res) => res.count === selected_country.current_index
                        )?.name
                      }`) ||
                      (countryReducer.data.find(
                        (res) => res.count === selectedCountry.current_index
                      )?.name &&
                        `${
                          countryReducer.data.find(
                            (res) => res.count === selectedCountry.current_index
                          )?.name
                        }`) ||
                      "Trade"}
                  </li>
                </ul>
              )}
            </div>
          </li>
        </ul>

        <div className="section_part2">
          <div className="buy__sell__area">
            {selected_country.current_index && (
              <div className="dis-flex flex_direction-col align_item-end">
                <div className="dis-flex flex_gap-10 align_item-center">
                  <p className="mb-0">Unit Value</p>
                  <p className="unit__value__text mb-0">1.00</p>
                </div>
              </div>
            )}
            <div className="section_inputArea">
              <button
                onClick={() => {
                  setselected_country({
                    ...selected_country,
                    current_type: "buy",
                  });
                  //console.log("buy");
                  //console.log(selected_country);
                }}
                style={{
                  backgroundColor:
                    selected_country.current_type === "buy" && "#76a5af",
                }}
                disabled={
                  !selected_country.current_index ||
                  playReducer.data?.letUserGameStatusUpdated?.eleminated_countries.find(
                    (e) =>
                      e.eleminated_country_index ===
                        selected_country.current_index &&
                      e.eleminated_by === "computer"
                  )
                }
              >
                Buy
              </button>
              <p
                className={`${
                  selected_country.current_type === "buy" &&
                  "black_and_white_text"
                }`}
              >
                {parseFloat(buyPrice).toFixed(2)}
              </p>
              <button
                style={{
                  backgroundColor:
                    selected_country.current_type === "sell" && "#76a5af",
                }}
                onClick={() =>
                  setselected_country({
                    ...selected_country,
                    current_type: "sell",
                  })
                }
                disabled={
                  !selected_country.current_index ||
                  !playReducer.data?.trade_rate ||
                  !playReducer.data?.letUserGameStatusUpdated?.eleminated_countries.find(
                    (e) =>
                      e.eleminated_country_index ===
                      selected_country.current_index
                  )
                }
              >
                Sell
              </button>
              <p
                className={`${
                  selected_country.current_type === "sell" &&
                  "black_and_white_text"
                }`}
              >
                {!isNaN(sellPrice) && sellPrice !== null
                  ? parseFloat(sellPrice)?.toFixed(2)
                  : parseFloat(0)?.toFixed(2)}
              </p>
            </div>
            {selected_country.current_index &&
              selected_country.current_type && (
                <div className="quantity__total__table">
                  <p>Quantity</p>
                  <p>Total</p>

                  {/* Condition to check which button has been clicked and show the tile according to it */}
                  {selected_country.current_type === "buy" && (
                    <>
                      <input
                        type="number"
                        min={1}
                        value={selected_country.current_quantity}
                        name="current_quantity"
                        onChange={(e) =>
                          setselected_country({
                            ...selected_country,
                            current_quantity: e.target.value,
                          })
                        }
                        className="unit__value__text"
                      />
                      <div className="unit__value__text unit__value__text--total">
                        {(buyPrice * selected_country.current_quantity).toFixed(
                          2
                        )}
                      </div>
                    </>
                  )}
                  {/* Condition to check which button has been clicked and show the tile according to it */}
                  {selected_country.current_type === "sell" && (
                    <>
                      <div className="unit__value__text unit__value__text--disabled"></div>
                      <div className="unit__value__text unit__value__text--disabled"></div>
                      <input
                        type="number"
                        min={1}
                        value={selected_country.current_quantity}
                        name="current_quantity"
                        onChange={(e) =>
                          setselected_country({
                            ...selected_country,
                            current_quantity:
                              e.target.value <=
                              playReducer.data?.letUserGameStatusUpdated?.eleminated_countries.find(
                                (e) =>
                                  e.eleminated_country_index ===
                                  selected_country.current_index
                              ).trade_quantity
                                ? e.target.value
                                : playReducer.data?.letUserGameStatusUpdated?.eleminated_countries.find(
                                    (e) =>
                                      e.eleminated_country_index ===
                                      selected_country.current_index
                                  ).trade_quantity,
                          })
                        }
                        className="unit__value__text"
                      />
                      <div className="unit__value__text unit__value__text--total">
                        {!isNaN(sellPrice)
                          ? (
                              sellPrice * selected_country.current_quantity
                            ).toFixed(2)
                          : 0.0}
                      </div>
                    </>
                  )}
                </div>
              )}
            {selected_country.current_index &&
              !play &&
              (selected_country?.current_type === "buy" && !confirmation ? (
                <>
                  <button
                    disabled={!selected_country.current_type}
                    className="same-box-width-height-align-self-start"
                    onClick={() => {
                      if (getBalanceType() === "CR") {
                        toast(
                          "please select either free or premium mode to start the game",
                          {
                            style: {
                              color: "red",
                            },
                          }
                        );
                        return;
                      }

                      playGameConfirm();
                      // setconfirmation(true);
                    }}
                  >
                    Confirm
                  </button>
                  <button
                    className="same-box-width-height-align-self-start bgRed"
                    // style={{ backgroundColor: "#76a5af" }}
                    onClick={() => {
                      // setconfirmation(false);
                      setselected_country({
                        ...selected_country,
                        current_type: null,
                      });
                    }}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                selected_country?.current_type === "sell" && (
                  <>
                    <button
                      disabled={!selected_country?.current_type}
                      className="same-box-width-height-align-self-end"
                      onClick={() => {
                        if (getBalanceType() === "CR") {
                          toast(
                            "please select either free or premium mode to start the game",
                            {
                              style: {
                                color: "red",
                              },
                            }
                          );
                          return;
                        }

                        playGameConfirm();
                      }}
                    >
                      Confirm
                    </button>
                    <button
                      disabled={!selected_country?.current_type}
                      className="same-box-width-height-align-self-end bgRed"
                      onClick={() => setconfirmation(true)}
                    >
                      Cancel
                    </button>
                  </>
                )
              ))}
          </div>

          {/* added by Pritha in v4 branch  */}

          <div className="section_middle">
            {!gameStarted ||
            play ||
            playReducer.gameState === "idle" ||
            playReducer.gameState === "failed" ? (
              <div className="middle_controls">
                <p className="section_middle_width_height">
                  {`${pauseTimer.minutes < 10 ? "0" : ""}${pauseTimer.minutes}`}
                  :{`${pauseTimer.second < 10 ? "0" : ""}${pauseTimer.second}`}
                </p>
                <Button
                  onClick={() => {
                    delayPause(10 - seconds);

                    setpauseTimer({
                      ...pauseTimer,
                      minutes: 5,
                      second: 0,
                    });
                    setSelectedCountry({
                      ...selected_country,
                      code: "CC",
                      name: "Trade",
                      id: 0,
                    });
                  }}
                  className="control_pause section_middle_width_height"
                  disabled={
                    playReducer.gameState === "idle" ||
                    playReducer.gameState === "failed" ||
                    !gameStarted ||
                    pauseDisp
                  }
                >
                  Pause
                </Button>
              </div>
            ) : (
              <div className="middle_controls">
                <p className="section_middle_width_height">
                  {`${pauseTimer.minutes < 10 ? "0" : ""}${pauseTimer.minutes}`}
                  :{`${pauseTimer.second < 10 ? "0" : ""}${pauseTimer.second}`}
                </p>
                <Button
                  onClick={() => {
                    clearInterval(myInterval.current);

                    //playGame();

                    playGame(true);
                    setTimeout(() => {
                      setplay(true);
                      // setSeconds(10);
                      setElapsedPlayTime(0);
                      setStartPlayTime(Date.now());
                      setSelectedCountry({
                        ...selected_country,
                        code: "",
                        name: "",
                        id: 0,
                      });

                      // setpauseTimer({
                      //   ...pauseTimer,
                      //   minutes: 5,
                      //   second: 0,
                      // });
                      clearInterval(pauseTimerInterval.current);
                    }, 1000);
                    console.log("resume button pressed");
                  }}
                  className="section_middle_width_height bgCyan"
                  // disabled={!play}
                >
                  {playReducer?.gameState === "idle" ||
                  playReducer?.gameState === "failed"
                    ? "Play"
                    : "Resume"}
                </Button>
              </div>
            )}
            <div className="info-table">
              <div className="info-table_head">
                <p>OPEN</p>
                <p>Closed</p>
                <p>Total</p>
              </div>
              <div className="info-table_data">
                <p>0.00</p>
                <p>0.00</p>
                <p>0.00</p>
              </div>
            </div>
            <div className="middle_controls">
              <p className="section_middle_width_height">
                {/* {`${gameDurationTimer.minutes < 10 ? "0" : ""}${
                  gameDurationTimer.minutes
                }`}
                :
                {`${gameDurationTimer.second < 10 ? "0" : ""}${
                  gameDurationTimer.second
                }`} */}
                {/* {minutes < 10 ? `0${minutes}` : minutes}:
                {second < 10 ? `0${second}` : second} */}
                <Timer />
              </p>
              {!gameStarted ? (
                <Button
                  onClick={() => {
                    setSelectedCountry({
                      ...selected_country,
                      code: "",
                      name: "",
                      id: 0,
                    });
                    setGameStarted(true);
                    // setSeconds(10);
                    setElapsedPlayTime(0);
                    setStartPlayTime(Date.now());
                    setplay(true);
                    console.log("play button pressed");
                    playGame(true);
                    startTimer();
                    // setconfirmation(false)
                  }}
                  // !confirmation
                  className="control_play section_middle_width_height"
                  disabled={!confirmation}
                >
                  Play
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    SetBuyPrice(1);
                    SetSellPrice(0);
                    endGame();
                  }}
                  // !confirmation
                  className="control_play section_middle_width_height bgRed"
                  disabled={play}
                >
                  End
                </Button>
              )}
            </div>
          </div>
          <div className="section_cc">
            <div className="cc_grid_section">
              {/* created by pritha in v4 */}
              {countryReducer?.data?.map((item) => {
                return (
                  <button
                    key={item._id}
                    onClick={() => {
                      setselected_country({
                        ...selected_country,
                        current_index: item.count,
                        current_quantity: 1,
                        current_type: null,
                      });
                      setconfirmation(false);
                    }}
                    onDoubleClick={() => {
                      setselected_country({
                        ...selected_country,
                        current_index: null,
                        current_quantity: null,
                        current_type: null,
                      });
                    }}
                    style={{
                      backgroundColor:
                        selected_country?.current_index === item.count &&
                        "#45818e",
                    }}
                    className={
                      selected_country?.current_index === item.count
                        ? selected_country?.current_type === "buy"
                          ? "blueAnimation"
                          : "cc_grid_section_item"
                        : eleminated_country_color(item)
                    }
                    disabled={
                      !userReducer.data?.response?._id ||
                      play ||
                      playReducer.data?.letUserGameStatusUpdated?.eleminated_countries.find(
                        (e) =>
                          e.eleminated_by === "computer" &&
                          e.eleminated_country_index === item.count
                      )
                    }
                  >
                    {item.code}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
