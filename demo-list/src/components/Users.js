import React from "react";

 const UsersInfo = ()=> {
  function ShowMessage(event) {
    event.preventDefault();
    alert("some text" как мне сюда запилить post ?);
  }
  return (
    <div>
        <a href="/" onClick={ShowMessage}>


        </a>
    </div>
  );
}

export default UsersInfo;
