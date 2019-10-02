import React from 'react';

const SideBar = () => {
  return (
      <div className="col-md-2">
        <nav className="sidenav d-flex flex-column mb-5 mb-md-0">
          <a className="text-uppercase text-xs mb-2" href="/dashboard">
            Dashboard
          </a>
          <a className="text-uppercase text-xs mb-2" href="/add">
            Add Item
          </a>
        </nav>
      </div>
  );
};

export default SideBar;