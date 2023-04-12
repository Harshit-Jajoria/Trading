import React from "react";
import { COUNTRIES } from "../../data/cc100";
import "./cc100.css";

export const CC100 = () => {
  return (
    <main className="wrapper_cc100">
      <h1>CC 100 Index</h1>
      <br />
      <table>
        <thead>
          <tr>
            <td>Flags</td>
            <td>CC</td>
            <td></td>
            <td>100</td>
          </tr>
        </thead>
        <tbody>
          {COUNTRIES.map((item) => (
            <tr>
              <td className="flags">{item.flag}</td>
              <td>{item.code}</td>
              <td>{item.count}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
