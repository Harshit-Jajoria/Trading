import { createContext, useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiCall } from "../store/middleware/api";
import { endPlay, loadplay, playReset } from "../store/reducers/play";
import { userLogout } from "../store/reducers/user";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [sharedPreference, setSharedPreference] = useState({});
  const [currentUser, setCurrentUser] = useState(null);
  const [gameMode, setGameMode] = useState("Account");
  {
    /*added new states to manage currency*/
  }
  const [cr, setCr] = useState(0);
  const [pcr, setPcr] = useState(0);
  const [dcr, setDcr] = useState(0);
  const [tcr, setTcr] = useState(0);
  const [play, setplay] = useState(false);
  const [pauseDisp, setPauseDisp] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    code: "CC",
    name: "Trade",
    id: 0,
  });

  const [gameStarted, setGameStarted] = useState(false);

  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  const [winnerDeclared, setWinnerDeclared] = useState(false);

  const { countryReducer, playReducer, userReducer } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const setGameModeTrading = () => setGameMode("Trading A/C");

  const setGameModePremium = () => setGameMode("Premium A/C");

  const setGameModeFree = () => setGameMode("Demo A/C");

  const isPremiumMode = gameMode === "Premium A/C";

  const isTradingMode = gameMode === "Trading A/C";

  const isFreeMode = gameMode === "Demo A/C";

  const togglePremiumGameMode = () => {
    setGameModePremium();
    if (isPremiumMode || isTradingMode) {
      setGameMode("Account");
    }
  };
  const toggleFreeGameMode = () => {
    setGameModeFree();
    if (isFreeMode) {
      setGameMode("Account");
    }
  };

  const logout = async () => {
    setLoggedIn(false);
    setGameMode("Account");
    setplay(false);
    dispatch(userLogout());
    // dispatch(countryReset());
    dispatch(playReset());
  };

  const getBalanceType = () => {
    if (isFreeMode) {
      return "DCR";
    } else if (isPremiumMode) {
      return "PCR";
    } else if (isTradingMode) {
      return "TCR";
    } else {
      return "CR";
    }
  };

  const myInterval = useRef();
  const pauseTimerInterval = useRef();
  const gameDurationInterval = useRef();
  const [gameDurationTimer, setGameDurationTimer] = useState({
    minutes: 0,
    second: 0,
  });
  const [pauseTimer, setpauseTimer] = useState({
    minutes: 0,
    second: 0,
  });
  // const [seconds, setSeconds] = useState(0);
  const [startPlayTime, setStartPlayTime] = useState(0);
  const [elapsedPlayTime, setElapsedPlayTime] = useState(0);

  
  const [buyPrice, SetBuyPrice] = useState("1");
  const [sellPrice, SetSellPrice] = useState("0");
  const [selected_country, setselected_country] = useState({
    current_index: null,
    current_type: null,
    current_quantity: null,
  });

  // updating the balance on change in playReducer after every 10 seconds
  const updateCr = (user_game_type, cr_qty) => {
    if (user_game_type === "pcr") {
      setPcr(cr_qty);
    } else if (user_game_type === "dcr") {
      setDcr(cr_qty);
    } else if (user_game_type === "tcr") {
      setTcr(cr_qty);
    } else {
      setCr(cr_qty);
    }
  };

  useEffect(() => {
    // let intervalId;
    if (startPlayTime > 0) {
      myInterval.current = setInterval(() => {
        const currentPlayTime = Date.now();
        const timePlayElapsed = currentPlayTime - startPlayTime;
        setElapsedPlayTime(timePlayElapsed);
      }, 100);
    }
    return () => clearInterval(myInterval.current);
  }, [startPlayTime]);

  // const playminutes = Math.floor(elapsedPlayTime / 60000);
  // const seconds = (Math.floor((elapsedPlayTime) / 1000))%60;
  const seconds = ((elapsedPlayTime) / 1000)%60;

  useEffect(() => {
    console.log("timer seconds  ", seconds);
    if (seconds >= 9.90) {
      // setElapsedPlayTime(0);
      // setStartPlayTime(Date.now());
      playGame();
      console.log("play");
    }
  }, [seconds]);

  const startTimer = () => {
    setStartTime(Date.now());
  };



  // useEffect(() => {
  //   console.log("playReducer", play, gameStarted, playReducer?.gameState);
  //   if (
  //     (playReducer.gameState === "success" ||
  //       playReducer.gameState === "started") &&
  //     userReducer.data?.response?._id &&
  //     (play || gameStarted)
  //   ) {
  //     gameDurationInterval.current = setInterval(() => {
  //       const { second, minutes } = gameDurationTimer;

  //       if (second >= 0) {
  //         setGameDurationTimer(({ second }) => ({
  //           ...gameDurationTimer,
  //           second: second + 1,
  //         }));
  //       }
  //       if (second === 59) {
  //         if (minutes === 59) {
  //           // clearInterval(gameDurationInterval?.current);
  //           endGame();
  //           if (playReducer.data) {
  //             console.log("game over");
  //           }
  //         } else {
  //           setGameDurationTimer(({ minutes }) => ({
  //             ...gameDurationTimer,
  //             minutes: minutes + 1,
  //             second: 0,
  //           }));
  //         }
  //       }
  //     }, 1000);
  //   } else {
  //     clearInterval(gameDurationInterval?.current);
  //   }

  //   return () => {
  //     clearInterval(gameDurationInterval?.current);
  //   };
  // }, [gameDurationTimer, playReducer.gameState, play, gameStarted]);

  useEffect(() => {
    if (gameStarted && userReducer.data?.response?._id) {
      pauseTimerInterval.current = setInterval(() => {
        const { second, minutes } = pauseTimer;

        if (second > 0) {
          setpauseTimer(({ second }) => ({
            ...pauseTimer,
            second: second - 1,
          }));
        }
        if (second === 0) {
          if (minutes === 0) {
            clearInterval(pauseTimerInterval?.current);
            if (playReducer.data && !play) {
              console.error("setSeconds");
              // setSeconds(10);
              setElapsedPlayTime(0);
              setStartPlayTime(Date.now());
              setplay(true);
            }
          } else {
            setpauseTimer(({ minutes }) => ({
              ...pauseTimer,
              minutes: minutes - 1,
              second: 59,
            }));
          }
        }
      }, 1000);
    } else {
      clearInterval(pauseTimerInterval?.current);
    }

    return () => {
      clearInterval(pauseTimerInterval?.current);
    };
  }, [pauseTimer, playReducer.gameState]);

  const endGame = (isWinnerDeclared = false) => {
    if (isWinnerDeclared) {
      setWinnerDeclared(true);
    }
    let gameType = "dcr";
    if (getBalanceType() === "DCR") {
      gameType = "dcr";
    } else if (getBalanceType() === "TCR") {
      gameType = "tcr";
    } else if (getBalanceType() === "PCR") {
      gameType = "pcr";
    } else {
      toast("Oops!, there is some issue in ending the game");
      return;
    }
    console.log("end game");
    if (isWinnerDeclared) {
      setTimeout(() => {
        dispatch(
          endPlay({
            url: `/end_play/${userReducer.data?.response?._id}/${gameType}`,
          })
        ).then((res) => {
          apiCall({
            url: `/get_user_by_id/${userReducer.data?.response?._id}`,
          })
            .then((res) => {
              if (res?.status === "success") {
                console.log("user data", res);
                let userBalance = res?.cr_balance;
                userBalance?.map((item) => {
                  let { user_game_type, cr_qty } = item;
                  if (user_game_type === "pcr") {
                    console.log("pcr", cr_qty);
                    setPcr(cr_qty);
                  } else if (user_game_type === "dcr") {
                    setDcr(cr_qty);
                    console.log("dcr", cr_qty);
                  } else if (user_game_type === "tcr") {
                    setTcr(cr_qty);
                    console.log("tcr", cr_qty);
                  } else {
                    setCr(cr_qty);
                  }
                });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        });
        setWinnerDeclared(false);
      }, 9000);
    } else {
      dispatch(
        endPlay({
          url: `/end_play/${userReducer.data?.response?._id}/${gameType}`,
        })
      ).then((res) => {
        apiCall({
          url: `/get_user_by_id/${userReducer.data?.response?._id}`,
        })
          .then((res) => {
            if (res?.status === "success") {
              console.log("user data", res);
              let userBalance = res?.cr_balance;
              userBalance?.map((item) => {
                let { user_game_type, cr_qty } = item;
                if (user_game_type === "pcr") {
                  console.log("pcr", cr_qty);
                  setPcr(cr_qty);
                } else if (user_game_type === "dcr") {
                  setDcr(cr_qty);
                  console.log("dcr", cr_qty);
                } else if (user_game_type === "tcr") {
                  setTcr(cr_qty);
                  console.log("tcr", cr_qty);
                } else {
                  setCr(cr_qty);
                }
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
      // setWinnerDeclared(false)
    }

    // apiCall()

    setSelectedCountry({
      ...selected_country,
      code: "CC",
      name: "Trade",
      id: 0,
    });
    // setSeconds(0);
    setElapsedPlayTime(0);
    setStartPlayTime(0);
    setGameStarted(false);
    setplay(false);
    setpauseTimer({
      ...pauseTimer,
      minutes: 5,
      seconds: 0,
    });
    clearInterval(myInterval?.current);
    clearInterval(gameDurationInterval?.current);
    setStartTime(0);
    setElapsedTime(0);
    setpauseTimer({
      ...pauseTimer,
      minutes: 5,
      second: 0,
    });

    // setconfirmation(false)
  };

  const playGame = (flagGame = false, pauseAfter = false) => {
    if (userReducer.data?.response?._id) {
      let isFirstTime =
        playReducer?.gameState === "idle" ||
        playReducer?.gameState === "failed";
      /* added condition for mandatory selection of demo or premium mode */

      console.log("play game called");
      if (!gameStarted) {
        if (!flagGame) {
          return;
        }
      }
      console.log("play game called 2");

      if (playReducer.data?.trade_rate) {
        const { buy_price, count, sell_price } = playReducer.data?.trade_rate;
        // setselected_country({...selected_country , current_quantity: count})
        SetBuyPrice(buy_price);
        SetSellPrice(sell_price);
      } else {
        SetBuyPrice(1);
        SetSellPrice(0);
      }

      console.log(
        "end game due to elimination of all the tiles",
        playReducer?.data?.cc_eliminated_by_computer_count
      );
      if (playReducer?.data?.cc_eliminated_by_computer_count === 99) {
        SetBuyPrice(1);
        SetSellPrice(0);
        endGame(true);
        return;
      }

      if (getBalanceType() === "CR") {
        toast("please select either free or premium mode to start the game", {
          style: {
            color: "red",
          },
        });
        return;
      }
      if (pauseAfter) {
        //console.log("pause after true");
        setplay(false);
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
        // if (pauseAfter) {
        //   console.log("pause after true");
        //   apiCall({
        //     url: `/play/${
        //       userReducer.data?.response?._id
        //     }/${null}/${null}/${null}`,
        //   }).then(res=>{
        //     console.log('res',res)
        //     setplay(false);
        //     return
        //   }).catch(err=>{
        //     toast("there is some issue in pausing the game", {
        //       style: {
        //         color: "red",
        //       },
        //     });
        //   })
        //   setplay(false);
        //   return;
        // }
        dispatch(
          loadplay({
            url: `/play/${
              userReducer.data?.response?._id
            }/${null}/${null}/${null}`,
          })
        );
        setselected_country({
          ...selected_country,
          current_index: null,
          current_quantity: null,
          current_type: null,
        });
      } else if (getBalanceType() === "TCR") {
        if (tcr < selected_country.current_quantity) {
          toast("you don't have enough balance to play the game", {
            style: {
              color: "red",
            },
          });
          return;
        }
        // if (pauseAfter) {
        //   //console.log("pause after true");
        //   apiCall({
        //     url: `/play_tcr/${
        //       userReducer.data?.response?._id
        //     }/${null}/${null}/${null}`,
        //   }).then(res=>{
        //     setplay(false);
        //     return
        //   }).catch(err=>{
        //     toast("there is some issue in pausing the game", {
        //       style: {
        //         color: "red",
        //       },
        //     });
        //   })
        //   setplay(false);
        //   return;
        // }
        dispatch(
          loadplay({
            url: `/play_tcr/${
              userReducer.data?.response?._id
            }/${null}/${null}/${null}`,
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
        // if (pauseAfter) {
        //   //console.log("pause after true");
        //   apiCall({
        //     url: `/play_pcr/${
        //       userReducer.data?.response?._id
        //     }/${null}/${null}/${null}`,
        //   }).then(res=>{
        //     setplay(false);
        //     return
        //   }).catch(err=>{
        //     toast("there is some issue in pausing the game", {
        //       style: {
        //         color: "red",
        //       },
        //     });
        //   })
        //   setplay(false);
        //   return;
        // }
        dispatch(
          loadplay({
            url: `/play_pcr/${
              userReducer.data?.response?._id
            }/${null}/${null}/${null}`,
          })
        );
      }

      setplay(true);
      setGameStarted(true);
      console.log("play game called 3",seconds);
      if (seconds >= 10) {
        // setSeconds(10);

        setElapsedPlayTime(0);
        setStartPlayTime(Date.now());
      }
    } else {
      navigate("/login");
    }
  };

  const values = {
    loggedIn,
    logout,
    setCurrentUser,
    currentUser,
    setLoggedIn,
    sharedPreference,
    setSharedPreference,
    setGameModeFree,
    setGameModePremium,
    setGameModeTrading,
    isFreeMode,
    isPremiumMode,
    isTradingMode,
    gameMode,
    getBalanceType,
    togglePremiumGameMode,
    toggleFreeGameMode,
    pcr,
    setPcr,
    dcr,
    setDcr,
    cr,
    setCr,
    setTcr,
    tcr,
    play,
    setplay,
    setpauseTimer,
    pauseTimer,
    pauseTimerInterval,
    myInterval,
    // setSeconds,
    seconds,
    selectedCountry,
    setSelectedCountry,
    gameDurationTimer,
    setGameDurationTimer,
    endGame,
    selected_country,
    setselected_country,
    gameStarted,
    setGameStarted,
    updateCr,
    pauseDisp,
    startTime,
    setPauseDisp,
    // minutes,
    // second,
    startTimer,
    setElapsedTime,
    elapsedTime,
    winnerDeclared,
    setWinnerDeclared,
    setElapsedPlayTime,
    elapsedPlayTime,
    setStartPlayTime,
    startPlayTime,
    playGame,
    buyPrice, SetBuyPrice,
    sellPrice, SetSellPrice,
    navigate,
    gameDurationInterval
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
