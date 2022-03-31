import React from "react";
import SetUp from "./tutorial/11-react-router/final"
import Router1 from "./tutorial/11-react-router/Router1/Router1"
import RouteConfigExample from "./tutorial/11-react-router/Router2/Router2"
// import UseState5 from "./tutorial/1-useState/setup/5-useState-counter";
// import SetUp from "./tutorial/12-memo-useMemo-useCallback/setup";

function App() {
  return (
    // <>
    //   <div className="container">
    //     <SetUp />
    //     <UseState5 />
    //   </div>
    // </>
    // <>
    //   <div className="container">
    //     <UseEffect2 />
    //   </div>
    // </>
    <>
      <div className="container">
        <SetUp />
        <Router1 />
       {/*<RouteConfigExample /> */} 
       <RouteConfigExample />
      </div>
    </>
  );
}

export default App;

// https://react-projects.netlify.app/
