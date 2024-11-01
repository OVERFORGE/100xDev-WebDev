// import { useState, useEffect } from "react";
// import { PostComponent } from "./post";

function Card({ children }) {
  return (
    <div
      style={{
        background: "black",
        borderRadius: 10,
        color: "white",
        padding: 10,
        margin: 10,
      }}
    >
      {children}
    </div>
  );
}
function App() {
  // const [count, setCount] = useState(1);

  // function increaseCount() {
  //   setCount((currentValue) => currentValue + 1);
  // }
  // useEffect(function () {
  //   setInterval(increaseCount, 5000);
  // }, []);
  // const [currentTab, setCurrentTab] = useState("feed");
  return (
    <div style={{ display: "flex" }}>
      <Card>Hi there</Card>
      <Card>
        <div style={{ color: "green" }}>
          What do you want to post <br />
          <br />
          <input type="text" />
        </div>
      </Card>
    </div>

    // <div>
    //   <button
    //     onClick={() => setCurrentTab("feed")}
    //     style={{ color: currentTab == "feed" ? "red" : "black" }}
    //   >
    //     Feed
    //   </button>
    //   <button
    //     onClick={() => setCurrentTab("notification")}
    //     style={{ color: currentTab == "notification" ? "red" : "black" }}
    //   >
    //     Notification
    //   </button>
    //   <button
    //     onClick={() => setCurrentTab("messages")}
    //     style={{ color: currentTab == "messages" ? "red" : "black" }}
    //   >
    //     Messages
    //   </button>
    //   <button
    //     onClick={() => setCurrentTab("jobs")}
    //     style={{ color: currentTab == "jobs" ? "red" : "black" }}
    //   >
    //     Jobs
    //   </button>
    // </div>

    // <div style={{ margin: 10 }}>
    //   <div style={{ display: "flex" }}>
    //     <div
    //       style={{
    //         background: "red",
    //         color: "white",
    //         borderRadius: 20,
    //         width: 20,
    //         height: 25,
    //         paddingLeft: 10,
    //         paddingTop: 5,
    //         position: "relative",
    //         left: 25,
    //         top: 12,
    //       }}
    //     >
    //       {count}
    //     </div>
    //   </div>

    //   <img
    //     style={{ cursor: "pointer" }}
    //     src={
    //       "data:image/png;base64,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"
    //     }
    //     width={40}
    //   />
    // </div>
  );
}

export default App;
