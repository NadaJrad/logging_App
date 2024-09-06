import React from "react";
import Login from "./Login";

var isLoggedIn = true;

const currentTime = new Date(2019, 11, 1, 9).getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {/*Ternary Operator*/}
      {isLoggedIn ? <h1>HELLO </h1> : <Login />}
      {/*AND Operator*/}
      {currentTime > 12 && (
        <h1> why are intrested and Why are you still working ?</h1>
      )}
    </div>
  );
}

export default App;
