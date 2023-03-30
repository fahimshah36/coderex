import "antd/dist/reset.css";
import Layouts from "./pages/Layouts";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ConfigProvider} from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "f15d43",
        },
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Layouts />} />

          {/* <Route path="/home" element={<Leads />}></Route> */}
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
