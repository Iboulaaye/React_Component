import React from "react";
import "./App.css";
import ProfilePhoto from "./Component/ProfilePhoto";
import Fullname from "./Component/FullName";
import Adress from "./Component/Address";

function App() {
  return (
    <div className="App">
      <h4 className="tr"> Curriculum vitae </h4>
        <ProfilePhoto />
        <Fullname />
        <Adress />
    </div>
  );
}

export default App;
