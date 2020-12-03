import React from "react";
import "./App.css";
import Link from "./Link";
const App = () => {

  return (
    <div className="App">
      <Link URL="https://azure.microsoft.com/en-gb/" name="Azure">
        AZURE
      </Link>
      <Link
        URL="https://fintech-alliance.com/community-hub/profile/theta-trading-technologies/53"
        name="THETA"
      >
        Theta
      </Link>
    </div>
  );
};

export default App;
