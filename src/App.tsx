import "antd/dist/reset.css";
import Layouts from "./components/Layouts";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ConfigProvider, theme} from "antd";
import Home from "./pages/Home";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "f15d43",
        },
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route path="/" element={<Home />}></Route>
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
