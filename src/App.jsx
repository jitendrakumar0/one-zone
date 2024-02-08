import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./page/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route oute path="/" element={<Index/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
