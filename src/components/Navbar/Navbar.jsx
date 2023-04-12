import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillHome } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";
import "./navbar.css";

const activeNavLink = {
  // borderBottom: "2px solid #00d2ff",
  color: "#00FFFF",
};

export const Navbar = () => {
  const {
    logout,
    loggedIn: isLoggedIn,
    setGameModePremium,
    setGameModeTrading,
    isPremiumMode,
    isTradingMode,
    isFreeMode,
    gameMode,
    getBalanceType,
    play,
    pcr,
    tcr,
    dcr,
    cr,
  } = useAuth();

  const { countryReducer, playReducer, userReducer } = useSelector(
    (state) => state
  );

  {
    /* showing toast user cannot change game mode during active play of game */
  }
  const notifyMessage = () => {
    toast("unable to change the game mode during active play", {
      style: { color: "red" },
    });
  };

  const dispatch = useDispatch();

  const [homeIconColor, setHomeIconColor] = useState("home");

  const [mouseStateIcon, setMouseStateIcon] = useState("cyan");

  const location = useLocation();

  
  useEffect(() => {
    if (location.pathname === "/") {
      console.log(location.pathname);
      setHomeIconColor("home");
    } else {
      console.log(location.pathname);
      setHomeIconColor("notHome");
    }
  }, [location.key]);

  return (
    <nav className="wrapper-navbar">
      <ul className="navbar-list">
        <li className="">
          <NavLink to={"/"}>
            {homeIconColor === "home" && (
              <AiFillHome size={28} color={"cyan"} />
            )}
            {homeIconColor === "notHome" && (
              <AiFillHome size={28} color={"#6666"} />
            )}
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/how-to-play"
            style={(state) => {
              return state.isActive ? activeNavLink : {};
            }}
          >
            How to play
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/cc-100-list"
            style={(state) => {
              return state.isActive ? activeNavLink : {};
            }}
          >
            CC 100 Index
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/ko-100"
            style={(state) => {
              return state.isActive ? activeNavLink : {};
            }}
          >
            Leaderboard
          </NavLink>
        </li>
        <li className="navbar-item">
          <div className="navbar_dropdown">
            {location.pathname.includes("account") ? (
              <p style={activeNavLink} className="dropdown_list_title">
                My Accounts
              </p>
            ) : (
              <p className="dropdown_list_title">My Accounts</p>
            )}

            <ul className="dropdown_list">
              <li>
                <NavLink to={"/account/trading"}>Trading Account</NavLink>
              </li>
              <li>
                <NavLink to="/account/premium">Premium Account</NavLink>
              </li>
              <li>
                <NavLink to="/account/plp">PLP</NavLink>
              </li>
              <li>
                <NavLink to={"/account/kotto"}>KOTTO A/C</NavLink>
              </li>
              <li>
                <NavLink to={"/account/profit-loss"}>Profit & Loss</NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li className="navbar-item">
          <div className="navbar_dropdown">
            <NavLink
              to="/"
              className="dropdown_list_title"
              style={(state) => {
                return state.isActive ? activeNavLink : {};
              }}
            >
              {gameMode}
            </NavLink>

            {isLoggedIn && (isPremiumMode || isTradingMode) && (
              <ul className="dropdown_list">
                <li>
                  <NavLink
                    to="/"
                    onClick={() => {
                      if (play) {
                        notifyMessage();
                        return;
                      }
                      setGameModeTrading();
                    }}
                    style={{ color: isTradingMode ? "cyan" : "white" }}
                  >
                    Trading Account
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/"}
                    style={{ color: isPremiumMode ? "cyan" : "white" }}
                    onClick={() => {
                      if (play) {
                        notifyMessage();
                        return;
                      }
                      setGameModePremium();
                    }}
                  >
                    Premium Account
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li className="navbar-item">
          <p>BAL: {getBalanceType()}</p>
          <p>
            {/* getting the balance type from the auth context */}
            {getBalanceType() === "CR" && isLoggedIn ? cr : null}
            {getBalanceType() === "DCR" && dcr?.toFixed(2)}
            {getBalanceType() === "PCR" && pcr?.toFixed(2)}
            {getBalanceType() === "TCR" && tcr?.toFixed(2)}
          </p>
        </li>
        {!isLoggedIn ? (
          <>
            <li className="navbar-item join">
              <NavLink to="/join">Join</NavLink>
            </li>
            <li className="navbar-item login">
              <NavLink to="/login">Login</NavLink>
            </li>
          </>
        ) : (
          <>
            {/* handle text overflow for username length gretaer than 5 */}
            <li className="navbar-item user">
              <div className="navbar_dropdown">
                <div
                  className="dropdown_list_title"
                  // onClick={setGameModePremium}
                  style={{ color: "#00FFFF" }}
                >
                  {userReducer?.data?.response?.user_name.length > 5
                    ? `${userReducer?.data?.response?.user_name.substring(
                        0,
                        5
                      )}...`
                    : userReducer?.data?.response?.user_name}
                </div>

                {isLoggedIn &&
                userReducer?.data?.response?.user_name.length > 5 && (
                    <ul className="dropdown_list w-fit-content">
                      <li>
                        {userReducer?.data?.response?.user_name.length > 15
                          ? `${userReducer?.data?.response?.user_name.substring(
                              0,
                              15
                            )}...`
                          : userReducer?.data?.response?.user_name}
                      </li>
                    </ul>
                  )}
              </div>
            </li>
            <li className="navbar-item logout">
              <button to="/join" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
