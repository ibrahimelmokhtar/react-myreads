import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import HomePage from "./components/HomePage";
import NotFoundPage from './components/NotFoundPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes className="app">
        {/* Route to Search Page */}
        <Route exact path="/search" element={ <SearchPage /> } />

        {/* Route to Home Page */}
        <Route exact path="/" element={ <HomePage /> } />

        {/* Route to 404 Page */}
        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
