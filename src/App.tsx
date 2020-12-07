import React from "react";
import Link from "./Link";
import "./App.css";
const App = () => {
  return (
    <div>
     <div className="navBar">


     </div>
      <div className="main">
        <Link URL="https://azure.microsoft.com/en-gb/" name="Azure"></Link>
        <Link
          URL="https://theta.trading"
          name="THETA"
        ></Link>
      </div>
    </div>
  );
};

export default App;
