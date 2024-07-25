import React from 'react';
import "./SideBar.css";
import { IoMdAdd } from "react-icons/io";
import { MdPlaylistAddCheck } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
          <NavLink to="/add" className="sidebar-option">
          <IoMdAdd/>
            <p>Add Items</p>
          </NavLink>
          <NavLink to="/list" className="sidebar-option">
          <MdPlaylistAddCheck/>
            <p>List Items</p>
            </NavLink>
          <NavLink to="/orders" className="sidebar-option">
          <MdPlaylistAddCheck/>
            <p>Orders</p>
            </NavLink>
          
        </div>
    </div>
  )
}

export default SideBar