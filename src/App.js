import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import CareerPath from './CareerPath';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="carrerPath" element={<CareerPath />} />
                <Route path="home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
