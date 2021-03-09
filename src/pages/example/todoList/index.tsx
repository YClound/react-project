import React from "react";
import { Card, Button } from "antd";
import ExcelJS from "exceljs";
import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";
import Footer from "./Footer";
import SheetJSApp from "./xlsx";

export default function TodoList() {
  const handleExportBtn = () => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("下载详情", {
      views: [
        {
          xSplit: 1,
          ySplit: 1,
          state: "frozen",
        },
      ],
      pageSetup: {
        paperSize: 9,
        orientation: "landscape",
      },
      headerFooter: {
        firstHeader: "first-header",
        firstFooter: "first-header",
      },
    });

    console.log(workbook, sheet);
  };
  return (
    <Card>
      <AddTodo />
      <Footer />
      <VisibleTodoList />

      <div>
        <Button type={"primary"} onClick={handleExportBtn}>
          导出
        </Button>
      </div>

      <SheetJSApp />
    </Card>
  );
}
