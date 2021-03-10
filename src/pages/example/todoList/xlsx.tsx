import React from "react";
import XLSX from "xlsx";
/* xlsx.js (C) 2013-present  SheetJS -- http://sheetjs.com */
/* Notes:
   - usage: `ReactDOM.render( <SheetJSApp />, document.getElementById('app') );`
   - xlsx.full.min.js is loaded in the head of the HTML page
   - this script should be referenced with type="text/babel"
   - babel.js in-browser transpiler should be loaded before this script
*/
class SheetJSApp extends React.Component<any, { data: any[]; cols: any[] }> {
  constructor(props) {
    super(props);
    this.state = {
      data: [] /* Array of Arrays e.g. [["a","b"],[1,2]] */,
      cols: [] /* Array of column objects e.g. { name: "C", K: 2 } */,
    };
    this.handleFile = this.handleFile.bind(this);
    this.exportFile = this.exportFile.bind(this);
  }
  handleFile(file: File) {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target && e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array", cellDates: true });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws, { header: "A" });
      /* Update state */
      this.setState({ data: data, cols: make_cols(ws["!ref"]) }, () => {
        console.log(this.state.data, this.state.cols, wsname, wb, ws)
      });
    };
    if (rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
  }
  exportFile() {
    /* convert state to workbook */
    console.log(this.state.data);
    const exportList = [{
      name: '第一列',
      key: 'first',
      width: 20,
      type: 'link'
    }, {
      name: '第二列',
      key: 'second',
      width: 10,
    }, {
      name: '第二列',
      key: 'second',
      width: 10,
    }, {
      name: '第二列',
      key: 'second',
      width: 10,
    }, {
      name: '第二列',
      key: 'second',
      width: 10,
    }, {
      name: '第二列',
      key: 'second',
      width: 10,
    }, {
      name: '第二列',
      key: 'second',
      width: 10,
    }, {
      name: '第二列',
      key: 'second',
      width: 10,
    }, {
      name: '第二列',
      key: 'second',
      width: 10,
    }, {
      name: '第二列',
      key: 'second',
      width: 10,
    }, {
      name: '第二列',
      key: 'second',
      width: 10,
    }, {
      name: '第二列',
      key: 'second',
      width: 10,
    }, {
      name: '第二列',
      key: 'second',
      width: 10,
    }]
    const exportData = [{
      first: 'https://www.baidu.com',
      second: '2'
    }, {
      first: 'https://www.baidu.com',
      second: '3'
    }, {
      first: 'https://www.baidu.com',
      second: '4'
    }]

    let headers = exportList.map(item => item.name);
    let data: any[][] = [headers];
    exportData.forEach((dataItem, index) => {
      const item: string[] = []
      exportList.forEach(config => {
        item.push(dataItem[config.key])
      })
      data.push(item);
    })

    console.log(data)

    const ws = XLSX.utils.json_to_sheet(data, { cellStyles: true, skipHeader: true });
    const wb = XLSX.utils.book_new();
    ws['A2'].l = { Target: 'https://www.baidu.com', Tooltip: 'https://www.baidu.com' }
    ws['!cols'] = exportList.map(item => ({ width: item.width || 10 }));
    console.log(ws, wb)
    XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
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
              // disabled={!this.state.data.length}
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

export default SheetJSApp;

/* -------------------------------------------------------------------------- */

/*
  Simple HTML5 file drag-and-drop wrapper
  usage: <DragDropFile handleFile={handleFile}>...</DragDropFile>
    handleFile(file:File):void;
*/
class DragDropFile extends React.Component<{
  handleFile: (file: File) => void;
}> {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
  }
  suppress(evt) {
    evt.stopPropagation();
    evt.preventDefault();
  }
  onDrop(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    const files = evt.dataTransfer.files;
    if (files && files[0]) this.props.handleFile(files[0]);
  }
  render() {
    return (
      <div
        onDrop={this.onDrop}
        onDragEnter={this.suppress}
        onDragOver={this.suppress}
      >
        {this.props.children}
      </div>
    );
  }
}

/*
  Simple HTML5 file input wrapper
  usage: <DataInput handleFile={callback} />
    handleFile(file:File):void;
*/
class DataInput extends React.Component<{ handleFile: (file: File) => void }> {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const files = e.target.files;
    if (files && files[0]) this.props.handleFile(files[0]);
  }
  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="file">Spreadsheet</label>
          <input
            type="file"
            className="form-control"
            id="file"
            accept={SheetJSFT}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

/*
  Simple HTML Table
  usage: <OutTable data={data} cols={cols} />
    data:Array<Array<any> >;
    cols:Array<{name:string, key:number|string}>;
*/
class OutTable extends React.Component<{ data: any[]; cols: any[] }> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              {this.props.cols.map((c) => (
                <th key={c.key}>{c.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((r, i) => (
              <tr key={i}>
                {this.props.cols.map((c) => (
                  <td key={c.key}>{r[c.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

/* list of supported file types */
const SheetJSFT = [
  "xlsx",
  "xlsb",
  "xlsm",
  "xls",
  "xml",
  "csv",
  "txt",
  "ods",
  "fods",
  "uos",
  "sylk",
  "dif",
  "dbf",
  "prn",
  "qpw",
  "123",
  "wb*",
  "wq*",
  "html",
  "htm",
]
  .map(function (x) {
    return "." + x;
  })
  .join(",");

/* generate an array of column objects */
const make_cols = (refstr) => {
  let o: { name: string; key: number }[] = [],
    C = XLSX.utils.decode_range(refstr).e.c + 1;
  for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i };
  return o;
};
