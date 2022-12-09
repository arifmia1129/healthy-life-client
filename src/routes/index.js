import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from '../Pages/Blogs/Blogs';
import Navbar from '../Pages/Shared/Navbar';

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Blogs />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Index;