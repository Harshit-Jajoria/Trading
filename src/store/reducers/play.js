import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { apicallbegin } from "./api";

const initialState = {
  loader: false,
  data: null,
  timeStamp: null,
  gameState: "idle",
};

const playSlice = createSlice({
  name: "play",
  initialState,
  reducers: {
    playCallStart(state) {
      state.loader = true;
      state.gameState = "started";
    },
    playCallSuccess(state, action) {
      state.loader = false;
      state.data = action.payload;
      state.timeStamp = Date.now();
      state.gameState = "success";
    },
    playCallFaliour(state) {
      console.log("playCallFaliour");
      state.loader = false;
      state.data = null;
      state.gameState = "failed";
    },
    playEndFaliour(state) {
      toast(`Oops!, there is some issue in ending the game`, {
        style: {
          color: "red",
        },
      });

      state.loader = false;
      state.data = null;
      state.gameState = "failed";
    },
    playEndGameSuccess(state) {
      toast(`Game ended successfully`, {
        style: {
          color: "green",
        },
      });
      console.log("playEndGameSuccess");
      state.gameState = "idle";
      state.loader = false;
      state.data = null;
    },
  },
});

const { playCallStart, playCallSuccess, playCallFaliour, playEndGameSuccess } =
  playSlice.actions;

export const loadplay = (payload) => (dispatch) =>
  dispatch(
    apicallbegin({
      ...payload,
      onStart: playCallStart.type,
      onSuccess: playCallSuccess.type,
      onError: playCallFaliour.type,
    })
  );
export const endPlay = (payload) => (dispatch) =>
  dispatch(
    apicallbegin({
      ...payload,
      onStart: playCallStart.type,
      onSuccess: playEndGameSuccess.type,
      onError: playCallFaliour.type,
    })
  );
export const playReset = () => (dispatch) =>
  dispatch({ type: playCallFaliour.type, payload: "playReset" });

export default playSlice.reducer;
