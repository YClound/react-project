import React, { Component, FC } from "react";
import styles from "./index.scss";

/*
  Simple HTML Table
  usage: <OutTable data={data} cols={cols} />
    data:Array<Array<any> >;
    cols:Array<{name:string, key:number|string}>;
*/
const OutTable: FC<{ cols: any[]; data: any[] }> = ({ cols, data }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            {cols.map((c) => (
              <th key={c.key}>{c.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((r, i) => (
            <tr key={i}>
              {cols.map((c) => (
                <td key={c.key}>{r[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OutTable;
