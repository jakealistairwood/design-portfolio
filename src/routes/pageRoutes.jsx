import React from "react";
import { Routes, Route } from "react-router-dom";

const Routes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    );
};

export default Routes;
