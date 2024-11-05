import { useState } from "react";

function App() {
  return (
    <>
      <LightBulb />
    </>
  );
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState setBulbOn={setBulbOn} />
    </div>
  );
}

function BulbState({ bulbOn }) {
  return <div>{bulbOn ? "Bulb On" : "Bulb off"}</div>;
}

function ToggleBulbState({ setBulbOn }) {
  function toggle() {
    setBulbOn((currentState) => !currentState);
  }
  return (
    <div>
      <button onClick={toggle}>Toggle the bulb</button>
    </div>
  );
}
export default App;
