import React, { useContext, useEffect } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import BNavbar from "./BookingApp/BNavbar";
import Search from "./BookingApp/Search/Search";
import SingleSer from "./BookingApp/SingleSer/SingleSer";

function App() {
  useEffect(() => {
    alert('This is UI part of complete MERN stack Booking App project. Please write destination and select date range and click "search" button, sample data will be displayed. Check availability, and Picture slides from displayed data by clicking any sample image in single Hotal page')
  }, []);
 
  return (
    <div className="App">
      <HashRouter>
        {/* <Nav /> */}
        <Routes>
          <Route path="/">
              <Route index element={<BNavbar />} />

              <Route path="Search">
                <Route index element={<Search />} />
                <Route exact path=":userid" element={<SingleSer />} />
              </Route>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
