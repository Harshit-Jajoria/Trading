import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./pageHead.css";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useAuth } from "../../context/auth";
import { Gamemode } from "../Gamemode/Gamemode";

export const PageHead = () => {
  const { loggedIn, isFreeMode, isPremiumMode, gameMode } = useAuth();
  const { pathname } = useLocation();

  return (
    <header className="wrapper_pageHead">
      <h2
        className="pageHead_logoLong"
        style={{ color: gameMode !== "Account" ? "cyan" : "inherit" }}
      >
        Knockout Trading<span className="smallestFont"> TM</span>{" "}
      </h2>
      <h1 className="pageHead_logoShort">KO 100 V1.0</h1>

      {loggedIn ? (
        <Gamemode />
      ) : (
        <div className="d-flex">
          <a
            href="/how-to-play#introduction"
            className={`introduction-btn ${
              window.location.hash === "#introduction" && "selected-intro-btn"
            } `}
            style={{ width: "180px ", textAlign: "center", fontSize: "11pt" }}
          >
            Introduction
          </a>
          <button
            style={{
              width: "180px ",
              textAlign: "center",
              padding: "8px",
              fontSize: "11pt",
            }}
            className={"introduction-btn"}
          >
            Demo Video
          </button>
        </div>
      )}
    </header>
  );
};
