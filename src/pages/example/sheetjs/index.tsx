import React, { Component } from "react";
import XLSX from "xlsx";
import DragDropFile from "./DragDropFile";
import DataInput from "./DataInput";
import OutTable from "./OutTable";

/**
 * @name React sheetjs导入、导出表格
 * @link http://github.com/SheetJS/sheetjs/tree/81b7614e45dec3c6793392940ea08746d34191cb/demos/react
 */

/* generate an array of column objects */
const make_cols = (refstr) => {
  // let o:any[] = [], C = XLSX.utils.decode_range(refstr).e.c + 1;
  // for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i }
  let o: any[] = [];
  for (var i = 0; i < refstr.length; ++i) o[i] = { name: refstr[i], key: i };
  return o;
};

export default class SheetJSApp extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        [1, 2],
        [3, 4],
      ] /* Array of Arrays e.g. [["a","b"],[1,2]] */,
      cols: [] /* Array of column objects e.g. { name: "C", K: 2 } */,
    };
    this.handleFile = this.handleFile.bind(this);
    this.exportFile = this.exportFile.bind(this);
  }

  handleFile(file /*:File*/) {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e: any) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      // console.log(data, bstr, ws)
      /* Update state */
      // this.setState({ data: data, cols: make_cols(ws['!ref']) });
      this.setState({ data: data, cols: make_cols(data[0]) });
    };
    if (rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
  }
  exportFile() {
    /* convert state to workbook */
    const ws = XLSX.utils.aoa_to_sheet(this.state.data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
    // console.log('11111111', ws, wb)
    /* generate XLSX file and send to client */
    XLSX.writeFile(wb, "sheetjs.xlsx");
  }
  render() {
    return (
      <DragDropFile handleFile={this.handleFile}>
        <div className="row">
          <div className="col-xs-12">
            <DataInput handleFile={this.handleFile} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <button
              disabled={!this.state.data.length}
              className="btn btn-success"
              onClick={this.exportFile}
            >
              Export
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <OutTable data={this.state.data} cols={this.state.cols} />
          </div>
        </div>
      </DragDropFile>
    );
  }
}
