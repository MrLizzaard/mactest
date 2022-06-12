import React from "react";
import * as requestServer from "./MainCrud";

function Main(props) {
  const onClick = async () => {
    try {
      const result = await requestServer.dbTest();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button type="button" onClick={onClick}>
        dbTest
      </button>
    </div>
  );
}

export default Main;
