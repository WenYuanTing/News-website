import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import Layout from "./Layout";
import Sports from "./pages/Sports";
import Worldwide from "./pages/Worldwide";
import Society from "./pages/Society";
import StockMarket from "./pages/StockMarket";
import Life from "./pages/Life";
import Healthy from "./pages/Healthy";
import ScienceAndTechnology from "./pages/ScienceAndTechnology";
import Travel from "./pages/Travel";
import SearchPage from "./pages/SearchPage";
import "./style/style.css";
import React, { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route pat="/" element={<Layout />}>
            <Route
              index
              element={<Homepage input={input} setInput={setInput} />}
            ></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="*" element={<Page404 />}></Route>
            <Route
              path="searchpage"
              element={<SearchPage input={input} setInput={setInput} />}
            ></Route>

            <Route
              path="sports"
              element={<Sports input={input} setInput={setInput} />}
            ></Route>
            <Route
              path="worldwide"
              element={<Worldwide input={input} setInput={setInput} />}
            ></Route>
            <Route
              path="society"
              element={<Society input={input} setInput={setInput} />}
            ></Route>
            <Route
              path="stockMarket"
              element={<StockMarket input={input} setInput={setInput} />}
            ></Route>
            <Route
              path="life"
              element={<Life input={input} setInput={setInput} />}
            ></Route>
            <Route
              path="healthy"
              element={<Healthy input={input} setInput={setInput} />}
            ></Route>
            <Route
              path="scienceAndTechnology"
              element={
                <ScienceAndTechnology input={input} setInput={setInput} />
              }
            ></Route>
            <Route
              path="travel"
              element={<Travel input={input} setInput={setInput} />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
