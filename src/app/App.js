import * as requestServer from "./appCrud";

function App() {
  const onClick = async () => {
    try {
      const data = await requestServer.testFetch();

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button onClick={onClick}>fetch</button>
    </div>
  );
}

export default App;
