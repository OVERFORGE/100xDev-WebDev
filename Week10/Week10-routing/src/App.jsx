import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/neet/online-coaching-class-11"
              element={<Class11Program />}
            />
            <Route
              path={"/neet/online-coaching-class-12"}
              element={<Class12Program />}
            />
            <Route path={"/"} element={<Landing />} />
            <Route path={"*"} element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div style={{ height: "100vh" }}>
      <Link to="/">Allen</Link>|
      <Link to="/neet/online-coaching-class-11">Class 11</Link>|
      <Link to="/neet/online-coaching-class-12">Class 12</Link>
      <div style={{ height: "90vh" }}>
        <Outlet />
      </div>
      Footer
    </div>
  );
}

function ErrorPage() {
  return <h1>404 Error</h1>;
}

function Landing() {
  return (
    <div>
      <h1>Welcome to Allen</h1>
    </div>
  );
}

function Class11Program() {
  return (
    <div>
      <h1>Class 11 Program</h1>
    </div>
  );
}

function Class12Program() {
  return (
    <div>
      <h1>Class 12 Program</h1>
    </div>
  );
}
export default App;
