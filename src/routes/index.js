import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from '../Pages/Blogs/Blogs';

const Index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Blogs />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Index;