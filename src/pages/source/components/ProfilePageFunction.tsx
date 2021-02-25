import React, { useState, useRef } from "react";
import { Input, message as antdMsg } from "antd";

function ProfilePage(props) {
  const [message, setMessage] = useState("");
  const mesRef = useRef("");

  const showUser = () => {
    antdMsg.success("Followed " + props.user);
  };

  const handleClick = () => {
    setTimeout(showUser, 3000);
  };

  // useState与useRef
  const showMessage = () => {
    antdMsg.success("You said: " + message + ", current:" + mesRef.current);
  };

  const handleSendClick = () => {
    setTimeout(showMessage, 3000);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    mesRef.current = e.target.value;
  };

  return (
    <>
      <button onClick={handleClick}>Follow</button>
      <b> (function组件)</b>
      <Input
        value={message}
        onChange={handleMessageChange}
        placeholder={"测试useState与useRef的区别"}
        style={{ margin: "0 10px 0 100px", width: "300px" }}
      />
      <button onClick={handleSendClick}>Send</button>
    </>
  );
}

export default ProfilePage;
