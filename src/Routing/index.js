import { Routes, Route } from "react-router-dom";
import { Home, HowToPlay } from "../pages";
import { Register } from "../pages/Register/Register";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadcountries } from "../store/reducers/countries";
import { CC100 } from "../pages/CC100/CC100";
import { Leaderboard } from "../pages/Leaderboard/Leaderboard";
import { GameLog } from "../pages/Gamelog/GameLog";
import { TradingAccount } from "../pages/TradingAccount/TradingAccount";
import { PremiumAccount } from "../pages/PremiumAccount/PremiumAccount";
import { PLP } from "../pages/PLP/PLP";
import { KOTTO } from "../pages/KOTTTO/KOTTO";
import { ProfitLoss } from "../pages/ProfitLoss/ProfitLoss";
import { Login } from "../pages/Login/Login";
import { ForgotPassword } from "../pages/ForgotPassword";
import { ResetPassword } from "../pages/ResetPassword";


function Routing() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadcountries({ url: `/get_all_trade_countries` }))
    }, [dispatch])
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
                onEnter={() => console.log("We are in home route")}
            />
            <Route path="how-to-play" element={<HowToPlay />} />
            <Route path="cc-100-list" element={<CC100 />} />
            <Route path="ko-100" element={<Leaderboard />} />
            <Route path="game-log" element={<GameLog />} />
            <Route path="/account/trading" element={<TradingAccount />} />
            <Route path="/account/premium" element={<PremiumAccount />} />
            <Route path="/account/plp" element={<PLP />} />
            <Route path="/account/kotto" element={<KOTTO />} />
            <Route path="/account/profit-loss" element={<ProfitLoss />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
    );
}

export default Routing;
