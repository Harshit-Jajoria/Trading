import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useAuth } from "../../context/auth";
import "./gamemode.css";

export const Gamemode = () => {
  const {
    setGameModeFree,
    setGameModePremium,
    isPremiumMode,
    isFreeMode,
    isTradingMode,
    togglePremiumGameMode,
    toggleFreeGameMode,
    play,
  } = useAuth();
  const {playReducer} = useSelector((state) => state);

  const [changeText, setChangeText] = useState("");
{/* showing toast user cannot change game mode during active play of game */}
  const notifyMessage = () => {
    let notify;
    notify = toast("unable to change the game mode during active play", {
      style: { color: "red" },
    });
  };
  return (
    <div className="cp__gamemode">
      <span
        className="d-flex "
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {changeText === "CANCEL" ? (
          <p
            style={{
              margin: 0,
              marginRight: "5px",
              color: "#FF0000",
              width: "85px",
              textAlign: "center",
            }}
          >
            <strong>{changeText}</strong>
          </p>
        ) : (
          <p
            style={{
              margin: 0,
              marginRight: "5px",
              color: "#00FFFF",
              width: "85px",
              textAlign: "center",
            }}
          >
            <strong>{changeText}</strong>
          </p>
        )}
        <button
          onMouseOver={() => {
            if (isFreeMode) {
              return setChangeText("CANCEL");
            }
            return setChangeText("PLAY");
          }}
          onMouseOut={() => setChangeText("")}
          className={`mode-btn ${isFreeMode && "selected"}`}
          onClick={() => {
    
            if(!play && (playReducer?.gameState === "idle" || playReducer?.gameState === "failed"))
            {
              toggleFreeGameMode();
              return;
            }
            // if (play || playReducer?.gameState !== "idle" || playReducer?.gameState === "failed") {
            //   return;
            // }
                notifyMessage();
            // toggleFreeGameMode();
          }}
        >
          Free
        </button>
        <button
          onMouseOver={() => {
            if (isPremiumMode || isTradingMode) {
              return setChangeText("CANCEL");
            }
            return setChangeText("PLAY");
          }}
          onMouseOut={() => setChangeText("")}
          className={`mode-btn  ${
            (isPremiumMode || isTradingMode) && "selected"
          }`}
          onClick={() => {
            if((playReducer?.gameState === "failed" || playReducer?.gameState === "idle") && !play)
            {
              togglePremiumGameMode();
              return;
            }

                notifyMessage();
            // togglePremiumGameMode();
          }}
        >
          Premium
        </button>
      </span>
    </div>
  );
};
