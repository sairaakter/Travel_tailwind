import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "../style/Global.css";
import Layout from "./Layout";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
