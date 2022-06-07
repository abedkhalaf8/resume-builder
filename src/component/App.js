import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from './HomePage/homepage';
import ResumePage from './ResumePage/resumepage';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/"  element={<HomePage />} />
      <Route path="/ResumePage" element={<ResumePage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

