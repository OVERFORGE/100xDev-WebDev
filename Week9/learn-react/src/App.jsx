import { useState, useEffect } from "react";

function App() {
  let [counterVisible, setCounterVisible] = useState(true);
  useEffect(function () {
    setInterval(function () {
      setCounterVisible((c) => !c);
    }, 5000);
  }, []);
  return <div>{counterVisible && <Counter></Counter>}</div>;
}

function Counter() {
  const [count, setCount] = useState(0);
  console.log("testing");

  useEffect(function () {
    let clock = setInterval(function () {
      setCount((count) => count + 1);
    }, 1000);

    return function () {
      clearInterval(clock);
    };
  }, []);

  function increaseCounter() {
    setCount(count + 1);
  }
  function decreaseCounter() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCounter}>Increase Count</button>
      <button onClick={decreaseCounter}>Decrease Count</button>
    </div>
  );
}

export default App;
