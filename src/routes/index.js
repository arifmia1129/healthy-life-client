import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from '../Pages/Blogs/Blogs';
import DetailsBlog from '../Pages/Blogs/DetailsBlog';
import ReadingHistory from '../Pages/Blogs/ReadingHistory';
import AddBlog from '../Pages/Dashboard/AddBlog';
import BlogList from '../Pages/Dashboard/BlogList';
import Dashboard from '../Pages/Dashboard/Dashboard';
import UpdateBlog from '../Pages/Dashboard/UpdateBlog';
import Navbar from '../Pages/Shared/Navbar';

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Blogs />} />
                <Route path='/details/:id' element={<DetailsBlog />} />
                <Route path='/reading-history' element={<ReadingHistory />} />
                <Route path='/dashboard' element={<Dashboard />}>
                    <Route index element={<BlogList />} />
                    <Route path='add-blog' element={<AddBlog />} />
                    <Route path='edit/:id' element={<UpdateBlog />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Index;