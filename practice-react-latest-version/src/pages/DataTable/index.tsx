// Libs
import Status from "components/Status";
import * as React from "react";

const App = () => {
  return (
    <>
      <Status type="Open" />
      <Status type="Paid" />
      <Status type="Due" />
      <Status type="Inactive" />
      <Status
        label="Test"
        type="Others"
        styles={{ color: "white.100", bgColor: "blue.300" }}
      />
    </>
  );
};

export default App;
