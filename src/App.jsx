import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";
import { HomePage, RecipePage } from "./pages";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/:id" element={<RecipePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
