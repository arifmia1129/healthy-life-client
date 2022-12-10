import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { HiMenuAlt1 } from 'react-icons/hi';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

            <div class="drawer-content flex flex-col">
                <label for="my-drawer-2" class="w-16 btn drawer-button lg:hidden">
                    <HiMenuAlt1 />
                </label>
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">Blog</Link></li>
                    <li><Link to="/dashboard/add-blog">Add Blog</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;