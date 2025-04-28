import React from "react";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      AdminLayout
      <aside className="w-full max-w-[270px] hidden lg:block">
        Sidebar
        <aside className="children">
          <Outlet />
        </aside>
      </aside>
    </div>
  );
};

export default AdminLayout;
