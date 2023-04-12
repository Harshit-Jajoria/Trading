import React from "react";
import "./howToPlay.css";

export function HowToPlay() {
  return (
    <div className="wrapper_howToPlay">
      <h1>Index</h1>
      <ul className="IndexList">
        <li>
          <a href="#introduction">Introduction</a>
        </li>
        <li>
          <a href="#register_and_login">Registration and First Login</a>
        </li>
        <li>
          <a href="#free-demo-games">Free Games</a>
        </li>
        <li>
          <a href="#premium-games">Premium Games</a>
        </li>
        <li>
          <a href="#buy-premium-credits">Buying Premium Credits </a>
        </li>
        {/* <li>
                    <a href='#pre-game-trading'>Pre-Game Trading</a>
                </li> */}
        <li>
          <a href="#the-knockout-process">
            {" "}
            Starting a Game: The Knockout Process
          </a>
        </li>
        <li>
          <a href="#pausing-a-game">Pausing a Game</a>
        </li>
        <li>
          <a href="#buying-shares-in-pause-mode">Buying Shares in Pause Mode</a>
        </li>
        <li>
          <a href="#selling-in-pause-mode">Selling in Pause Mode </a>
        </li>
        <li>
          <a href="#using-the-trading-bar-in-pause-mode">
            Using the Trading Bar in Pause Mode
          </a>
        </li>
        <li>
          <a href="#cancelling-a-trade-in-progress">
            Cancelling a Trade in-progress{" "}
          </a>
        </li>
        <li>
          <a href="#amending-a-trade-in-progress">
            Amending a Trade in-progress
          </a>
        </li>
        <li>
          <a href="#restarting-the-game">Restarting the Game</a>
        </li>
        <li>
          <a href="#ending-a-game">Ending a Game </a>
        </li>
        <li>
          <a href="#glossary-and-game-terminology">
            Glossary & Game Terminology
          </a>
        </li>
        <li>
          <a href="#terms-and-conditions">Terms and Conditions </a>
        </li>
        <li>
          <a href="#privacy">Privacy</a>
        </li>
        <li>
          <a href="#disclaimer">Disclaimer</a>
        </li>
      </ul>

      <div className="how_to_play_docs">
        <p className="c3" id="introduction">
          <span className="c0 c10 title_font_size">Introduction</span>
        </p>
        <p className="c3 c4">
          <span className="c0 c5"></span>
        </p>
        <p className="c3">
          <span className="c5 c0">Hello and Welcome to our website! </span>
        </p>
        <p className="c3 c4">
          <span className="c5 c0"></span>
        </p>
        <p className="c3">
          <span className="c1">
            <span className="c0">Knockout Trading </span>
            is an exciting new concept in hybrid gaming. &nbsp;
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            The object of the game is to make virtual profits from buying and
            selling virtual shares in the 100 coded tiles on the KO 100 Trading
            Platform and collect the game&rsquo;s KOTTO blockchain tokens.
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            Each tile represents a country or territory and is identified by a 2
            digit ISO country code (CC).
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            Countries are randomly knocked out from the KO 100 Trading Grid
            until only one remains.
          </span>
        </p>
        <p className="c3">
          <span className="c2">
            After each knockout, the share price of the remaining tiles
            increases proportionally in line with the game&rsquo;s
            &lsquo;Pure-Pricing&rsquo; algorithm:
          </span>
        </p>
        <p className="c3">
          <span className="c2">
            please see the KO 100 Pricing section below for further details.
            Click here to watch or replay our{" "}
          </span>
          <span className="c0">Demo Video</span>
        </p>
        <p className="c3 c4">
          <span className="c1"></span>
        </p>
        <p className="c3" id="register_and_login">
          <span className="c5 c0 title_font_size">Registering First Log in</span>
        </p>
        <p className="c3">
          <span className="c1">
            To join and start trading, register your details and confirm your
            email address using the link we send you.
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            You can then log in and either play a free daily Demo game or
            purchase Premium Credits and play a Premium game anytime.
          </span>
        </p>
        <p className="c3 c4">
          <span className="c5 c2 c11"></span>
        </p>
        <p className="c3" id="free-demo-games">
          <span className="c0 c9 title_font_size">Free Games</span>
        </p>
        <p className="c3">
          <span className="c2">Game currency: </span>
          <span className="c0">Demo Credits - </span>
          <span className="c2">Symbol:</span>
          <span className="c0">DCR - </span>
          <span className="c2">Account Name: </span>
          <span className="c0">Demo Account -</span>
          <span className="c2">Start-Up Balance: </span>
          <span className="c6 c0">
            100 DCR &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </span>
        </p>
        <p className="c3">
          <span className="c2">To play a free daily Demo Game, click on </span>
          <span className="c0">Demo</span>
          <span className="c2">&nbsp;in the Game Mode Panel. You can play </span>
          <span className="c0">one </span>
          <span className="c2">free Demo </span>
          <span className="c2">Game </span>
          <span className="c1">in each 24H GMT day. </span>
        </p>
        <p className="c3">
          <span className="c2">
            If your free daily demo game is validated, the Game Mode panel in
            the top right of the header will display{" "}
          </span>
          <span className="c0">Demo </span>
          <span className="c2">- </span>
          <span className="c0">ACTIVE </span>
          <span className="c2">and the</span>
          <span className="c0">&nbsp;</span>
          <span className="c0">PLAY</span>
          <span className="c2">box</span>
          <span className="c2">
            &nbsp;will &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </span>
        </p>
        <p className="c3">
          <span className="c1">flash to confirm the game is in Standby-Mode.</span>
        </p>
        <p className="c3 c4">
          <span className="c1"></span>
        </p>
        <p className="c3">
          <span className="c1">
            <span className="c2">
              To make your first &nbsp;trade, click on the{" "}
            </span>
            <span className="c0"> CC Index </span>
            to see the 100 countries in the game and then make your first
            selection by clicking on the country&rsquo;s CC tile on the Trading
            Grid. The selected tile will flash Blue and the CC and the full
            country/territory name will display in the{" "}
          </span>
          <span className="c6 c0">CC Box.</span>
        </p>
        <p className="c3">
          <span className="c1">
            To deselect a tile either click for a second time to deactivate or
            simply click on a different CC tile to automatically cancel the
            original selection.
          </span>
        </p>
        <p className="c3">
          <span className="c2">
            (Deselected tiles stop flashing and return to their original static
            colour.)
          </span>
        </p>
        <p className="c3">
          <span className="c2">
            If the selected CC tile is Grey (which means it currently holds no
            active shares), the{" "}
          </span>
          <span className="c0">BUY </span>
          <span className="c2">
            box will also start flashing to signify a trade is in progress.
            &nbsp;{" "}
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            Adjust the Quantity from (0) to the amount of shares you wish to
            buy. Click on BUY and the Total value of your trade will display.
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            If you exceed your available balance, you will be alerted and asked
            to amend the trade.
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            Click CONFIRM to finalise your first trade or click BUY again to
            adjust the Quantity.
          </span>
        </p>
        <p className="c3">
          <span className="c2">Please see </span>
          <a href="#amending-a-trade-in-progress" className="c0 link">
            Amending a Trade in Progress{" "}
          </a>
          <span className="c2">
            for further details. &nbsp;Confirmed trades are irreversible. &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            To make another trade, repeat the process. If your Demo Account
            reaches zero and you have no active trades, your game will
            automatically end.
          </span>
        </p>
        <p className="c3 c4">
          <span className="c1"></span>
        </p>
        <ul className="c8 lst-kix_1bc0m06c27z7-0 start">
          <li className="c3 c7 li-bullet-0">
            <span className="c1">
              The starting price to buy one share before the game starts is
              always 1.00,
            </span>
          </li>
        </ul>
        <ul className="c8 lst-kix_6n2cxwix6xin-0 start">
          <li className="c3 c7 li-bullet-0">
            <span className="c1">
              Demo Credits are non-transferable and never show in your Premium
              or Trading Accounts.
            </span>
          </li>
          <li className="c3 c7 li-bullet-0">
            <span className="c2">
              Demo Game profits and account balances are not carried forward to
              a player&rsquo;s next Demo Game.
            </span>
          </li>
          <li className="c3 c7 li-bullet-0">
            <span className="c2">
              Free Demo Games are limited to one per player per day (24 hours
              GMT).
            </span>
          </li>
        </ul>
        <p className="c3 c4">
          <span className="c1"></span>
        </p>
        <p className="c3" id="premium-games">
          <span className="c5 c0 title_font_size">Premium Games</span>
        </p>
        <p className="c3">
          <span className="c1">Game Currencies:</span>
        </p>
        <p className="c3">
          <span className="c2">(1): </span>
          <span className="c0">Premium Credits </span>
          <span className="c0 c15">&nbsp;</span>
          <span className="c2">Symbol: </span>
          <span className="c0">PCR &nbsp; &nbsp;</span>
          <span className="c2">Account Name:</span>
          <span className="c0">Premium Account</span>
        </p>
        <p className="c3">
          <span className="c2">(2): </span>
          <span className="c0">Trading Credits </span>
          <span className="c0 c15">&nbsp; &nbsp; </span>
          <span className="c0 c13">&nbsp;</span>
          <span className="c2">Symbol: </span>
          <span className="c0">TCR</span>
          <span className="c0 c15">&nbsp; </span>
          <span className="c0">&nbsp; </span>
          <span className="c0 c13">&nbsp;</span>
          <span className="c2">Account Name: </span>
        </p>
        <p className="c3 c4">
          <span className="c6 c0"></span>
        </p>
        <p className="c3">
          <span className="c2">
            Both have the same value and equal one unit of Premium Game
            currency. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </span>
        </p>
        <p className="c3">
          <span className="c0">Premium Credits</span>
          <span className="c2">
            &nbsp;are new, unused units of currency that can be bought and
            credited to a user&rsquo;s{" "}
          </span>
          <span className="c6 c0">Premium Account.</span>
        </p>
        <p className="c3">
          <span className="c2">
            Once in circulation, Premium Credits convert to used game currency:{" "}
          </span>
          <span className="c0">Trading Credits</span>
          <span className="c2">&nbsp;and are held in your </span>
          <span className="c6 c0">Trading Account.</span>
        </p>
        <p className="c3 c4">
          <span className="c6 c0"></span>
        </p>
        <p className="c3">
          <span className="c1">
            You must have at least one Premium Credit in your Premium Account to
            start a Premium Game.{" "}
          </span>
        </p>
        <p className="c3">
          <span className="c2">
            If you have no Premium Credits in your Premium Account, you can
            purchase Premium Credits by clicking on the{" "}
          </span>
          <span className="c0">BUY</span>
          <span className="c1">&nbsp;link.</span>
        </p>
        <p className="c3">
          <span className="c2">Please </span>
          <span className="c2">see </span>
          <a href="#buy-premium-credits title_font_size" className="c0 link">
            Buying Premium Credits{" "}
          </a>
          <span className="c2">
            for further info. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
        </p>
        <p className="c3">
          <span className="c2">To play a Premium Game</span>
          <span className="c0">, </span>
          <span className="c2">click on</span>
          <span className="c0">Premium</span>
          <span className="c1">&nbsp;in the Game Mode panel. </span>
        </p>
        <p className="c3">
          <span className="c2">
            If your balance is at least one, the Game Mode Panel will display{" "}
          </span>
          <span className="c0">ACTIVE - PREMIUM </span>
          <span className="c1">
            and One Premium Credit will be provisionally deducted from
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            your Premium Account and automatically allocated to your first
            trade.
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            Your first Premium Game trade must use a minimum of one Premium
            Credit and be completed before the game starts.
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            Thereafter, Premium/Trading Credits can be used in all subsequent
            trades and both are equal to one unit of game currency.
          </span>
        </p>
        <p className="c3 c4">
          <span className="c1"></span>
        </p>
        <p className="c3">
          <span className="c2">To make your first trade, click on the </span>
          <span className="c0">CC Index </span>
          <span className="c1">
            to see the 100 countries in the game and then make your first
            selection by clicking on the country&rsquo;s{" "}
          </span>
        </p>
        <p className="c3">
          <span className="c2">
            CC Tile on the Trading Grid. The selected tile will flash Blue and
            the CC and full country name will appear in the{" "}
          </span>
          <span className="c0">CC Box.</span>
        </p>
        <p className="c3">
          <span className="c2">
            To deselect a tile either click for a second time to deactivate or
            click on a different CC tile to automatically{" "}
          </span>
          <span className="c2">cancel</span>
          <span className="c1">&nbsp;the original selection.</span>
        </p>
        <p className="c3">
          <span className="c1">
            (Deselected tiles stop flashing and return to their original static
            colour.)
          </span>
        </p>
        <p className="c3">
          <span className="c2">
            If the selected CC tile is Grey (which means it does not currently
            hold active shares), the BUY box on the UI will start flashing to
            signify a buy-trade is in progress and{" "}
          </span>
          <span className="c2">the</span>
          <span className="c1">
            &nbsp;Unit Value, Quantity and Total will all initially show as 1.00
            (which is equal to buying one share in one country at a pre-game
            starting price
          </span>
        </p>
        <p className="c3">
          <span className="c2">
            &nbsp;of 1.00). If you wish to add more shares to your first trade
            using{" "}
          </span>
          <span className="c0">Premium Credits</span>
          <span className="c2">
            , adjust the Quantity accordingly (from 1.00) or to buy more shares
            using{" "}
          </span>
          <span className="c0">Trading Credits</span>
          <span className="c2">, first click on the link to your </span>
          <span className="c0">Trading Account</span>
          <span className="c1">
            : this will automatically close your Premium Account and open your
            Trading Account.
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            The balance will show the Trading Credits available: then adjust the
            Quantity accordingly.{" "}
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            To proceed, click on the flashing BUY box (it will stop flashing if
            the trade is valid); the total value of the trade will recalculate
            if necessary (ie. from 1.00)
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            and any Premium or Trading Credits added to your first trade will be
            provisionally deducted from your accounts.
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            *If you enter an amount greater than the available balance in either
            account, you will be alerted that you have exceeded your available
            balance, the Total
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            will stay at 1.00 and the BUY box will continue flashing.{" "}
          </span>
        </p>
        <p className="c3">
          <span className="c2">
            If the trade is valid, the BUY box will stop flashing and a CONFIRM
            prompt will appear. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp;{" "}
          </span>
        </p>
        <p className="c3">
          <span className="c2">
            To amend the trade at this point, please see the section below{" "}
          </span>
          <a href="#amending-a-trade-in-progress" className="c0 link">
            &lsquo;Amending a Trade in Progress&rsquo;
          </a>
          <span className="c1">.</span>
        </p>
        <p className="c3">
          <span className="c2">
            To finalise the first trade, click CONFIRM: the trade is now{" "}
          </span>
          <span className="c2">irreversible</span>
          <span className="c1">
            : The CONFIRM box and the blue CC tile relating to the trade will
            now stop flashing.
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            To make another trade and buy shares in another country, repeat the
            process (after the first trade in a Premium Game, no currency
            restrictions apply).
          </span>
        </p>
        <p className="c3 c4">
          <span className="c1"></span>
        </p>
        <ul className="c8 lst-kix_c34amku421oq-0 start">
          <li className="c3 c7 li-bullet-0">
            <span className="c0">Note: </span>
            <span className="c1">
              BLUE CC Tiles currently hold active shares - GREY CC Tiles do not
              currently hold shares.
            </span>
          </li>
        </ul>
        <ul className="c8 lst-kix_b598ay1p5cq5-0 start">
          <li className="c3 c7 li-bullet-0">
            <span className="c2">The Starting Price to buy one share </span>
            <span className="c0">before</span>
            <span className="c1">&nbsp; the game starts is always 1.00.</span>
          </li>
        </ul>
        <p className="c3 c4 c16">
          <span className="c1"></span>
        </p>
        <p className="c3 c4">
          <span className="c5 c0"></span>
        </p>
        <p className="c3" id="buy-premium-credits">
          <span className="c5 c0 title_font_size">Buying Premium Credits</span>
        </p>

        <div className="credits-table">
          <p> Premium Credits</p>
          <table>
            <tr>
              <td>USD</td>
              <td>10</td>
              <td>15</td>
              <td>20</td>
              <td>25</td>
              <td>30</td>
              <td>40</td>
              <td>50</td>
              <td>60</td>
              <td>70</td>
              <td>80</td>
              <td>90</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>100</td>
              <td>150</td>
              <td>200</td>
              <td>250</td>
              <td>300</td>
              <td>400</td>
              <td>500</td>
              <td>600</td>
              <td>700</td>
              <td>800</td>
              <td>900</td>
              <td>1000</td>
            </tr>
          </table>
          <p>With 100% PLP Monthly Bonus</p>
          <table>
            <tr>
              <td>USD</td>
              <td>10</td>
              <td>15</td>
              <td>20</td>
              <td>25</td>
              <td>30</td>
              <td>40</td>
              <td>50</td>
              <td>60</td>
              <td>70</td>
              <td>80</td>
              <td>90</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>110</td>
              <td>160</td>
              <td>220</td>
              <td>270</td>
              <td>330</td>
              <td>440</td>
              <td>550</td>
              <td>660</td>
              <td>770</td>
              <td>880</td>
              <td>990</td>
              <td>1100</td>
            </tr>
          </table>
          <ul>
            <li>
              Click on the BUY link on the Trading Platform and select the
              quantity required. Minimum purchase is $10 for 100 credits.
            </li>
            <li>
              Thereafter, credits increase in pro rata increments of $5 for each
              50 credits, up to $30 for 300 credits and then in $10 increments
              up to a maximum of $100 for 1000 credits.
            </li>
            <li>
              Commencing 1 January 2023, the top 100 players on the PLP Monthly
              Leaderboard will get a 10% bonus for all Premium Credits purchased
              in the following month
            </li>
            <li>
              Commencing 1 January 2024, the top 100 players on the PLP Annual
              Leaderboard (01/01-31/12) will get a 10% bonus for all Premium
              Credits purchased in the following quarter (1 Jan - 31 Mar).
            </li>
          </ul>
        </div>

        <p className="c3" id="the-knockout-process">
          <span className="c5 c0 title_font_size">
            Starting a Game: The Knockout Process
          </span>
        </p>
        <p className="c3">
          <span className="c2">The UI </span>
          <span className="c0">PLAY </span>
          <span className="c1">
            box will flash in pre-game standby mode and the game timer will show
            as 0.00 until your first trade/s are complete and &nbsp;
          </span>
        </p>
        <p className="c3">
          <span className="c2">
            you are ready to start the game: to proceed, click on the{" "}
          </span>
          <span className="c2">PLAY box</span>
          <span className="c2">
            . &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            The game&rsquo;s PLAY timer will start from zero and the first 10
            second knockout will begin.{" "}
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            The first CC Tile selected will flash red and will be &lsquo;counted
            out&lsquo;.
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            After 10 seconds, the CC tile will be knocked out of the game and
            change colour to white. White CC tiles are dormant and have
            zero-value.
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            Whenever a CC tile is eliminated from the game, the BUY/SELL share
            price and your ongoing Profit/Loss will change accordingly.{" "}
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            After the first Knockout, there will be 99 active tiles remaining
            and the process then repeats until the game is paused or ended.
          </span>
        </p>
        <p className="c3 c4">
          <span className="c1"></span>
        </p>
        <p className="c3" id="pausing-a-game">
          <span className="c5 c0 title_font_size">
            Pausing a Game: (Maximum 5 Minutes)
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            Click on the red PAUSE box: It will start flashing to signify the
            game has been paused. The blue PLAY box will flash in game standby
            mode.
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            Once paused, the game will always complete the 10 second knockout
            process in progress at the time.
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            Once that country has been knocked out, the game stops and the 5.00
            min. Pause Countdown Timer starts.
          </span>
        </p>
        <p className="c3">
          <span className="c1">Please note; </span>
        </p>
        <ul className="c8 lst-kix_wc6x9eduxqlk-0 start">
          <li className="c3 c7 li-bullet-0">
            <span className="c2">the Game Timer continues when in Pause Mode.</span>
          </li>
          <li className="c3 c7 li-bullet-0">
            <span className="c2">
              Clicking PAUSE for a second time gives a user the option of either
              cancelling the trade-in-progress or closing all open trades and
              ending the game immediately (please see
            </span>
            <a href="#cancelling-a-trade-in-progress" className="c0 link">
              &nbsp;Cancelling
            </a>
            /{" "}
            <a href="#amending-a-trade-in-progress" className="c0 link">
              Amending a Trade in Progress{" "}
            </a>
            <span className="c2">&amp;</span>
            <span className="c0">
              &nbsp;{" "}
              <a href="#ending-a-game" className="link">
                Ending a Game
              </a>{" "}
            </span>
            <span className="c2">
              sections for further details). &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </span>
          </li>
        </ul>
        <p className="c3 c4">
          <span className="c1"></span>
        </p>
        <p className="c3" id="buying-shares-in-pause-mode">
          <span className="c0 c9 title_font_size">Buying shares in PAUSE mode</span>
        </p>
        <p className="c3">
          <span className="c1">
            Click to open the Account you wish to use to fund the trade and
            check the balance. (Remember: Premium/Trading Credits have equal
            value.)
          </span>
        </p>
        <p className="c3">
          <span className="c2">Countries that have already been knocked out </span>
          <span className="c2">of</span>
          <span className="c1">
            &nbsp;the game are displayed as blank white tiles and are inactive.
          </span>
        </p>
        <p className="c3">
          <span className="c2">
            You can buy shares in any active CC tile that is either{" "}
          </span>
          <span className="c0">Grey</span>
          <span className="c2">&nbsp;or</span>
          <span className="c0">&nbsp;Blue</span>
          <span className="c1">.</span>
        </p>
        <p className="c3 c4">
          <span className="c1"></span>
        </p>
        <p className="c3">
          <span className="c0">Grey</span>
          <span className="c2">&nbsp;tiles are </span>
          <span className="c2">active</span>
          <span className="c2">
            but currently hold no shares. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            In Pause Mode, you can buy shares in a grey CC tile using a single
            BUY command. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </span>
        </p>
        <p className="c3">
          <span className="c2">
            Click on any grey CC Tile on the Trading Grid (the tile now flashes
            blue): the BUY box also flashes and the Quantity &amp; Total box{" "}
          </span>
          <span className="c2">appear</span>
          <span className="c2">&nbsp;(</span>
          <span className="c2">0.00) &#8680;</span>
        </p>
        <p className="c3">
          <span className="c1">
            Enter the number of shares you wish to buy in the Quantity box
            &#8680; Click BUY (stops flashing): the Total is now displayed
            &#8680; Click CONFIRM.
          </span>
        </p>
        <p className="c3 c4">
          <span className="c1"></span>
        </p>
        <p className="c3">
          <span className="c0">Blue</span>
          <span className="c2">&nbsp;tiles are active and currently </span>
          <span className="c2">hold</span>
          <span className="c1">
            &nbsp;shares: To buy more shares in a blue CC tile, a double BUY
            command must be used.
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            Click on any blue CC tile (flashes) &#8680; Click BUY (flashes): the
            Quantity and Total box appear (0.00) &#8680; Enter the Quantity
            &#8680; Click BUY again
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            (stops flashing): the Total is displayed &#8680; Click CONFIRM.
          </span>
        </p>
        <p className="c3 c4">
          <span className="c1"></span>
        </p>
        <p className="c3">
          <span className="c2">
            *In any buy trade, Game Currency is provisionally deducted from your
            account when the BUY box is clicked
          </span>
          <span className="c1">&nbsp;and stops flashing and</span>
        </p>
        <p className="c3">
          <span className="c2">the CONFIRM prompt is displayed</span>
          <span className="c2">
            . Once a trade is confirmed, all game currency is permanently
            deducted from your selected account.
          </span>
        </p>
        <p className="c3 c4">
          <span className="c6 c0"></span>
        </p>
        <p className="c3" id="selling-in-pause-mode">
          <span className="c5 c0 title_font_size">
            Selling shares in PAUSE mode
          </span>
        </p>
        <p className="c3">
          <span className="c0">To sell all shares in one country</span>
          <span className="c2">:</span>
          <span className="c2">
            &nbsp;click on any blue CC tile (flashes) &#8680; C
          </span>
          <span className="c2">lick</span>
          <span className="c1">&nbsp;SELL (flashes):</span>
        </p>
        <p className="c3">
          <span className="c1">
            the quantity &amp; current total value of selling all shares held in
            that country is displayed &#8680;
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            Click SELL again (stops flashing): the CONFIRM prompt appears
            &#8680; Click CONFIRM to finalise the trade.
          </span>
        </p>
        <p className="c3 c4">
          <span className="c1"></span>
        </p>
        <p className="c3">
          <span className="c0">To sell a part shareholding in one country:</span>
          <span className="c1">
            &nbsp;click on any blue CC tile (flashes) &#8680; Click SELL
            (flashes): the quantity &amp; total value show.{" "}
          </span>
        </p>
        <p className="c3">
          <span className="c2">
            Amend the quantity (must be less then the total held) &#8680; Click
            SELL again (stops flashing): the TOTAL recalculates &#8680; Click
            CONFIRM. &nbsp;{" "}
          </span>
        </p>
        <p className="c3">
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </span>
        </p>
        <p className="c3">
          <span className="c0">To sell all shares in all countries:</span>
          <span className="c1">
            &nbsp;click SELL (flashes). All BLUE CC tiles will flash on the
            Trading Grid &#8680; Click SELL again (stops flashing):
          </span>
        </p>
        <p className="c3">
          <span className="c2">
            the Quantity &amp; Total Value of selling all shares held in all
            countries is displayed &#8680; Click
          </span>
          <span className="c2">&nbsp;</span>
          <span className="c2">
            CONFIRM. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp;
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            (The quantity cannot be manually changed when selling all shares in
            all countries.)
          </span>
        </p>
        <p className="c3 c4">
          <span className="c1"></span>
        </p>
        <p className="c3">
          <span className="c0">To sell all shares in multiple countries:</span>
          <span className="c1">
            &nbsp;click SELL (ALL blue CC tiles will flash) &#8680; Click on any
            flashing blue CC tile to deselect:
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            (deselected blue CC tiles stop flashing) &#8680; Click SELL again
            (stops flashing):
          </span>
        </p>
        <p className="c3">
          <span className="c2">
            the Quantity and Total Value of selling all shares in the selected
            countries will be displayed &#8680; Click CONFIRM. &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            (The quantity cannot be manually changed when selling all shares in
            multiple countries.)
          </span>
        </p>
        <p className="c3 c4">
          <span className="c1"></span>
        </p>
        <p className="c3" id="using-the-trading-bar-in-pause-mode">
          <span className="c6 c0 title_font_size">
            Using the Trading Bar in PAUSE mode
          </span>
        </p>
        <p className="c3">
          <span className="c2">To</span>
          <span className="c1">
            &nbsp;view your in-game Trading History, click on the ALL box on the
            left-side of the Trading Bar.
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            This will vertically expand the Trading Bar and show a summary of
            the trading history of each CC tile that has been active in the
            current game.{" "}
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            Then click on any CC Tile to expand again and show a breakdown of
            all individual trades in that country.
          </span>
        </p>
        <p className="c3 c4">
          <span className="c6 c0"></span>
        </p>
        <p className="c3" id="cancelling-a-trade-in-progress">
          <span className="c5 c0 title_font_size">
            Cancelling a Trade in-Progress
          </span>
        </p>
        <p className="c3">
          <span className="c2">T</span>
          <span className="c1">
            o cancel a buy/sell trade in ONE country, click on the relevant
            flashing blue CC tile on the Trading Grid to deselect and cancel the
            trade.
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            (A deselected blue tile will stop flashing and return to its
            previous colour.)
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            Or to cancel any trade in-progress, click on the flashing PAUSE box
            (temporarily stops flashing).
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            Two options appear: CANCEL GAME or CANCEL TRADE - Choose the CANCEL
            TRADE option
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            Then, click the CONFIRM option to finalise the cancellation: (the
            PAUSE box then starts flashing again) - Click NO to continue the
            trade/game.
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            Once a trade in-progress is cancelled, all data previously shown in
            the Trading Boxes is automatically cleared and any credits
            provisionally
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            deducted from a user&rsquo;s accounts are re-credited accordingly.
            Remember: once a trade is CONFIRMED, it becomes irreversible.
          </span>
        </p>
        <p className="c3 c4">
          <span className="c5 c0"></span>
        </p>
        <p className="c3" id="amending-a-trade-in-progress">
          <span className="c5 c0 title_font_size">
            Amending a Trade in-Progress
          </span>
        </p>
        <p className="c3">
          <span className="c2">Click on the relevant BUY/ SELL box </span>
          <span className="c0">before</span>
          <span className="c1">
            &nbsp;clicking CONFIRM (only applicable to trades in ONE country):
            the CONFIRM box will disappear
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            and the BUY/SELL box will start flashing again &#8680; Amend the
            Quantity &#8680; Click BUY/SELL again (stops flashing): the TOTAL
            recalculates and
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            the CONFIRM box reappears &#8680; Click CONFIRM to finalise the
            trade.{" "}
          </span>
        </p>
        <p className="c3 c4">
          <span className="c1"></span>
        </p>
        <p className="c3" id="restarting-the-game">
          <span className="c5 c0 title_font_size">Restarting the Game</span>
        </p>
        <p className="c3">
          <span className="c2">C</span>
          <span className="c2">lick on the blue </span>
          <span className="c2">PLAY box</span>
          <span className="c2">
            &nbsp;to restart the game: the PAUSE box will stop flashing and the
            PLAY timer and the Knockout process will start again. &nbsp; &nbsp;
            &nbsp;
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            Remember: you must complete any trades you wish to make before the
            Pause Countdown reaches zero.
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            The game will then recommence and automatically cancel any trade
            in-progress.{" "}
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            Countdown alerts will be given with 1 minute to go, 30 seconds to
            go, and finally 10 seconds to go.{" "}
          </span>
        </p>
        <p className="c3 c4">
          <span className="c6 c0"></span>
        </p>
        <p className="c3" id="ending-a-game">
          <span className="c5 c0 title_font_size">Ending a Game</span>
        </p>
        <p className="c3">
          <span className="c1">
            1. Click on the flashing PAUSE box whilst in Pause-Mode (stops
            flashing). Then select/click the CANCEL GAME OPTION.
          </span>
        </p>
        <p className="c3">
          <span className="c2">
            &nbsp; &nbsp; An alert will appear: &lsquo;Please confirm you wish
            to cancel the game&rsquo;. Click the YES option to end the game.
            Click NO to continue the game. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            2. Wait for the game to finish: after 99 CC Tile knockouts and only
            ONE CC Tile remains on the Grid, the game will automatically finish.
          </span>
        </p>
        <p className="c3">
          <span className="c1">3. Log Out while the game is in progress:</span>
        </p>
        <p className="c3">
          <span className="c1">
            &nbsp; &nbsp; In this event, any open trades will be automatically
            closed and any proceeds will be credited to a user&rsquo;s Trading
            Account. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            4. Loss of an internet connection will automatically close the game
            and credit any proceeds to the user&rsquo;s Trading Account.
          </span>
        </p>
        <p className="c3">
          <span className="c2">
            5. Every game will automatically finish when the game timer gets to
            60 minutes/1 hour which is the maximum game time limit. &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </span>
        </p>
        <ul className="c8 lst-kix_n7pz79esb767-0 start">
          <li className="c3 c7 li-bullet-0">
            <span className="c1">
              Alerts will be given with 5 mins/1min/30sec/10secs to go.{" "}
            </span>
          </li>
          <li className="c3 c7 li-bullet-0">
            <span className="c2">
              The 10 second CC Tile knockout in progress when the timer reaches
              1 hour will always complete BEFORE the game ends:
            </span>
          </li>
        </ul>
        <p className="c3">
          <span className="c2">&nbsp; &nbsp; </span>
          <span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; </span>
          <span className="c2">
            Any open trades will then be automatically closed at the displayed
            sell price.{" "}
          </span>
        </p>
        <p className="c3 c4">
          <span className="c0 c10 c14"></span>
        </p>
        <p className="c3" id="glossary-and-game-terminology">
          <span className="c14 c0 c10 title_font_size">
            Glossary/GameTerminology
          </span>
        </p>
        <p className="c3 c4">
          <span className="c1"></span>
        </p>
        <p className="c3">
          <span className="c1">
            The KO 100 Leaderboard Updated daily at 00.00 GMT.
          </span>
        </p>
        <p className="c3">
          <span className="c2">
            Lists all players&#39; trading data including Premium Loyalty Points
            (PLP)
          </span>
          <span className="c0 c9">, </span>
          <span className="c2">
            Profit/Loss, and KOTTO Portfolio and relative position in any Month,
            Year or All-time.
          </span>
        </p>
        <p className="c3">
          <span className="c5 c0">KOTTO (Knockout Trading Token)</span>
        </p>
        <p className="c3">
          <span className="c1">
            The game&rsquo;s Blockchain based ecosystem allows players to swap
            game credits for KOTTO Crypto Tokens on a 100:1 basis:{" "}
          </span>
        </p>
        <p className="c3">
          <span className="c1">(minimum 100 Cr = 1 KOTTO).</span>
        </p>
        <p className="c3 c4">
          <span className="c1"></span>
        </p>
        <p className="c3">
          <span className="c5 c0">Premium Loyalty Points (PLP) </span>
        </p>
        <p className="c3">
          <span className="c1">
            Players earn ONE Premium Loyalty Point for each Premium Credit used
            (either in a game or in a KOTTO swap).
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            Commencing 01/01/23, the top 100 Players on the monthly KO 100
            Leaderboard will get a 10% bonus for all Premium Credits purchased
          </span>
        </p>
        <p className="c3">
          <span className="c1">in the following month. </span>
        </p>
        <p className="c3">
          <span className="c1">
            Commencing 31/12/23, the top 100 players on the Annual KO 100
            Leaderboard will get a 10% bonus for all Premium Credits purchased
            in the
          </span>
        </p>
        <p className="c3">
          <span className="c2">
            following quarter (01/01/24-31/03/24). &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span className="c6 c0">&nbsp; &nbsp; &nbsp; &nbsp;</span>
        </p>
        <p className="c3 c4">
          <span className="c1"></span>
        </p>
        <p className="c3">
          <span className="c0 c9">Pause Box: </span>
          <span className="c2 c9">5 minute </span>
          <span className="c1">Countdown Timer. </span>
        </p>
        <p className="c3 c4">
          <span className="c1"></span>
        </p>
        <p className="c3">
          <span className="c0 c9">Play Timer: </span>
          <span className="c1">
            Displays the in-play game time &nbsp;(maximum 1.00 hour).
          </span>
        </p>
        <p className="c3 c4">
          <span className="c5 c0"></span>
        </p>
        <p className="c3">
          <span className="c5 c0">KO 100 Share Pricing</span>
        </p>
        <p className="c3">
          <span className="c1">
            BUY &nbsp;Price Range: 1.00 - 100.00: Our &rsquo; Pure
            Pricing&rsquo; &nbsp;algorithm is directly alligned to the
            underlying probabilistic market value with no house bias.
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            SELL Price Range: 0.97 - &nbsp;97.00: &nbsp;Uses the same pure
            pricing algorithm but subjected to a 3% margin to replicate real
            world trading.
          </span>
        </p>
        <p className="c3 c4">
          <span className="c1"></span>
        </p>
        <p className="c3">
          <span className="c0 c9">KO 100 Trading Grid</span>
          <span className="c2">
            : Comprises 100 International CC Tiles which are sequentially
            eliminated (knockout out) until only one remains.{" "}
          </span>
        </p>
        <p className="c3 c4">
          <span className="c6 c0"></span>
        </p>
        <p className="c3">
          <span className="c0 c9">The CC Box: </span>
          <span className="c1">(Top Right of the Trading Grid)</span>
        </p>
        <p className="c3">
          <span className="c2">The Country Code </span>
          <span className="c0">(CC)</span>
          <span className="c1">
            &nbsp;Box displays information only and is not interactive.
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            It displays the CC tile and the corresponding full country/territory
            name relating to any Buy/Sell or Knockout currently in progress on
            the Trading Grid.
          </span>
        </p>
        <p className="c3">
          <span className="c2">When selling multiple CC tiles, it displays: </span>
          <span className="c0">CC/Multiple</span>
          <span className="c2">or for a Sell All</span>
          <span className="c0">&nbsp;t</span>
          <span className="c2">rade:</span>
          <span className="c0">CC/ALL</span>
          <span className="c2">&nbsp;until the trade is confirmed. </span>
        </p>
        <p className="c3 c4">
          <span className="c6 c0"></span>
        </p>
        <p className="c3">
          <span className="c5 c0">Profit &amp; Loss Summary</span>
        </p>
        <p className="c3">
          <span className="c1">
            Located in the centre of the UI Trading Grid: a real-time summary of
            a user&rsquo;s ongoing game profit/loss.
          </span>
        </p>
        <p className="c3">
          <span className="c1">Shows: </span>
        </p>
        <p className="c3">
          <span className="c0">Open</span>
          <span className="c1">
            &nbsp;Profit &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp;(The current value of all shares held - the Cost
            Price).
          </span>
        </p>
        <p className="c3">
          <span className="c0">Closed </span>
          <span className="c1">
            Profit/Loss &nbsp; &nbsp; &nbsp; &nbsp;(The total value of all
            shares sold or eliminated - the Cost Price).
          </span>
        </p>
        <p className="c3">
          <span className="c0">Total </span>
          <span className="c1">
            Profit/Loss &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(Open +/-
            Closed (Profit/Loss).
          </span>
        </p>
        <p className="c3 c4">
          <span className="c1"></span>
        </p>
        <p className="c3 c4">
          <span className="c5 c0"></span>
        </p>
        <p className="c3">
          <span className="c5 c0">Trading Bar</span>
        </p>
        <p className="c3">
          <span className="c2">Located immediately above the </span>
          <span className="c0">KO 100 </span>
          <span className="c2">Trading Platform, this s</span>
          <span className="c1">
            hows a real-time summary and detailed breakdown of the current
            game&rsquo;s transactions and trading profit and losses.
          </span>
        </p>
        <p className="c3 c4">
          <span className="c6 c0"></span>
        </p>
        <p className="c3">
          <span className="c5 c0">Game Log</span>
        </p>
        <p className="c3">
          <span className="c2">Located on the top-left of the </span>
          <span className="c0">KO 100 </span>
          <span className="c1">
            Trading Platform, the Game Log gives full details in chronological
            order of every event in the current game.
          </span>
        </p>
        <p className="c3 c4">
          <span className="c5 c0"></span>
        </p>
        <p className="c3" id="terms-and-conditions">
          <span className="c5 c0 title_font_size">Terms &amp; Conditions </span>
        </p>
        <p className="c3 c4">
          <span className="c6 c0"></span>
        </p>
        <ul className="c8 lst-kix_xpxxnvobqe0u-0 start">
          <li className="c3 c7 li-bullet-0">
            <span className="c1">
              Please respect the spirit and integrity of the game and only
              register once !{" "}
            </span>
          </li>
          <li className="c3 c7 li-bullet-0">
            <span className="c2">The Company has the </span>
            <span className="c2">discretion</span>
            <span className="c1">
              &nbsp;to close multiple accounts that are connected or linked to
              the same registered user or
            </span>
          </li>
        </ul>
        <p className="c3">
          <span className="c1">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; accounts believed to be
            controlled by any type of automated systems (BOTS). The decision of
            the Company will be final.
          </span>
        </p>
        <ul className="c8 lst-kix_xpxxnvobqe0u-0">
          <li className="c3 c7 li-bullet-0">
            <span className="c1">
              All purchases of Premium Credits are non-refundable.
            </span>
          </li>
          <li className="c3 c7 li-bullet-0">
            <span className="c1">
              All KOTTO Token Swaps are subject to validation.{" "}
            </span>
          </li>
          <li className="c3 c7 li-bullet-0">
            <span className="c1">
              Any account purchasing Premium Credits using unauthorised card
              payments will be closed.
            </span>
          </li>
          <li className="c3 c7 li-bullet-0">
            <span className="c1">The game uses Virtual Game Currency only.</span>
          </li>
          <li className="c3 c7 li-bullet-0">
            <span className="c1">
              There is no minimum age requirement to join or play but this is
              subject to individual jurisdictions local laws.
            </span>
          </li>
          <li className="c3 c7 li-bullet-0">
            <span className="c1">
              The KO 100 PLP Bonus Programme is not an offer to form
              (constitute) a contract or guarantee.{" "}
            </span>
          </li>
        </ul>
        <p className="c3 c16">
          <span className="c1">
            All awards are subject to validation (normally but not limited to 48
            hours), are at the sole discretion of the Company and are
            non-negotiable.
          </span>
        </p>
        <p className="c3">
          <span className="c1">The decision of the Company will be final.</span>
        </p>
        <ul className="c8 lst-kix_xpxxnvobqe0u-0">
          <li className="c3 c7 li-bullet-0">
            <span className="c1">
              &nbsp;If a user does not log in for a continuous period of 1 year,
              their account will be deemed to be inactive and will be closed.
            </span>
          </li>
          <li className="c3 c7 li-bullet-0">
            <span className="c1">
              Users will be automatically logged off their account after 1 hour
              if no activity is detected.{" "}
            </span>
          </li>
          <li className="c3 c7 li-bullet-0">
            <span className="c2">
              All account closures are at the discretion of the Company and its
              decision is final.
            </span>
          </li>
        </ul>
        <ul className="c8 lst-kix_4ylcklsj8qz3-0 start">
          <li className="c3 c7 li-bullet-0">
            <span className="c1">
              &lsquo;The Company&lsquo; is : Knockout Trading Ltd.
            </span>
          </li>
        </ul>
        <p className="c3 c16">
          <span className="c1">Registered Office : </span>
        </p>
        <p className="c3">
          <span className="c1">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Registered in England
            &amp; Wales No: 13522910
          </span>
        </p>
        <p className="c3 c4">
          <span className="c1"></span>
        </p>
        <ul className="c8 lst-kix_4ylcklsj8qz3-0">
          <li className="c3 c7 li-bullet-0">
            <span className="c1">Cookies (TBC)</span>
          </li>
          <li className="c3 c7 li-bullet-0" id="privacy">
            <span className="c1">Privacy Policy (TBC)</span>
          </li>
          <li className="c3 c7 li-bullet-0" id="disclaimer">
            <span className="c1">Disclaimer &nbsp; &nbsp; &nbsp; (TBC)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
