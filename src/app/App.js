import react, { useState } from "react";
import * as requestServer from "./appCrud";

function App() {
  const [test, setTest] = useState();
  const onClick = async () => {
    try {
      const data = await requestServer.testFetch();

      if (data.data === "success") {
        setTest("fetch성공");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button onClick={onClick}>fetch</button>
      <div>{test}</div>
    </div>
  );
}

export default App;
