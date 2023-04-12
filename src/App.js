import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, HowToPlay } from "./pages";
import { Navbar } from "./components/Navbar/Navbar";
import { PageHead } from "./components/PageHead/PageHead";
import { CC100 } from "./pages/CC100/CC100";
import { TradingAccount } from "./pages/TradingAccount/TradingAccount";
import { PremiumAccount } from "./pages/PremiumAccount/PremiumAccount";
import { ProfitLoss } from "./pages/ProfitLoss/ProfitLoss";
import { KOTTO } from "./pages/KOTTTO/KOTTO";
import { PLP } from "./pages/PLP/PLP";
import { Leaderboard } from "./pages/Leaderboard/Leaderboard";
import { AuthProvider } from "./context/auth";
import { Footer } from "./components/Footer/Footer";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { GameLog } from "./pages/Gamelog/GameLog";
import { ScrollHandler } from "./components/ScrollHandler";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import reducer from './store'
import Routing from "./Routing";

function App() {
  return (
    <Provider store={reducer}>
      <ScrollHandler>
        <Toaster />
        <div className="app-lyt-wrapper">
          <AuthProvider>
            <div className="sticky-head">
              <PageHead />
              <Navbar />
            </div>
            <div className="app-lyt-main">
              <Routing />
              <Footer />
            </div>
          </AuthProvider>
        </div>
      </ScrollHandler>
    </Provider>
  );
}

export default App;
