//------------COUNTER HOOK-------------//

// import { useState } from "react";

// function useCounter() {
//   const [count, setCount] = useState(0);

//   function increaseCount() {
//     setCount((c) => c + 1);
//   }
//   return {
//     count: count,
//     increaseCount: increaseCount,
//   };
// }

// function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }

// function Counter() {
//   const { count, increaseCount } = useCounter();
//   return (
//     <div>
//       <button onClick={increaseCount}>Increase {count}</button>
//     </div>
//   );
// }

// export default App;

//---------FETCH HOOK----------//

// import { useState, useEffect } from "react";
// import { useFetch } from "./hooks/useFetch";

// function App() {
//   const [currentPost, setCurrentPost] = useState(1);
//   const { finalData, loading } = useFetch(
//     "https://jsonplaceholder.typicode.com/posts/" + currentPost
//   );

//   if (loading) {
//     return <div>Loading....</div>;
//   }
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCurrentPost(1);
//         }}
//       >
//         1
//       </button>
//       <button
//         onClick={() => {
//           setCurrentPost(2);
//         }}
//       >
//         2
//       </button>
//       <button
//         onClick={() => {
//           setCurrentPost(3);
//         }}
//       >
//         3
//       </button>

//       {JSON.stringify(finalData)}
//     </div>
//   );
// }

// export default App;

//----------USE PREV HOOK-------------//

// import { useState } from "react";
// import { usePrev } from "./hooks/usePrev";
// function App() {
//   const [state, setState] = useState(0);
//   const prev = usePrev(state);
//   return (
//     <>
//       <p>{state}</p>
//       <button
//         onClick={() => {
//           setState((curr) => curr + 1);
//         }}
//       >
//         Click Me
//       </button>
//       <p>The previous value was {prev}</p>
//     </>
//   );
// }
// export default App;

//----------USE DEBOUNCE HOOK-------------//

import { useEffect, useRef, useState } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  });
  return debouncedValue;
};

function App() {
  const [inputVal, setInputVal] = useState("");
  const debouncedValue = useDebounce(inputVal, 200);

  function change(e) {
    setInputVal(e.target.value);
  }

  useEffect(() => {
    console.log("Expensive Operation");
  }, [debouncedValue]);

  return (
    <>
      <input type="text" onClick={change}></input>
    </>
  );
}

export default App;
