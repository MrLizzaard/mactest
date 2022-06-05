import react from "react";
import Basepage from "./Basepage";
import Header from "./modules/header/header";
import Sidebar from "./modules/sidebar/sidebar";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Basepage />
    </>
  );
}

export default App;
