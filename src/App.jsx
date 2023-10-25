import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExpensePage from "./pages/ExpensePage";
import IncomePage from "./pages/IncomePage";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/IncomePage" element={<IncomePage />} />
          <Route path="/ExpensePage" element={<ExpensePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
