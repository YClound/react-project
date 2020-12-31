import React, { FC } from "react";
import { connect } from "react-redux";
import { Input, Button, Form } from "antd";
import { addTodo } from "@/store/actions";

let AddTodo: FC<any> = ({ dispatch }) => {
  const [form] = Form.useForm();
  return (
    <div>
      <Form
        form={form}
        layout={"inline"}
        onFinish={(values) => {
          if (!values.todo) {
            return;
          }
          dispatch(addTodo(values.todo));
          form.resetFields();
        }}
      >
        <Form.Item name={"todo"}>
          <Input placeholder={"请输入待办事务"} />
        </Form.Item>

        <Button htmlType="submit" type={"primary"}>
          增加列表
        </Button>
      </Form>
    </div>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
