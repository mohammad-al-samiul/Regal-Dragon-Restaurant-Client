/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useCart from '../../Hooks/useCart';
import './Navbar.css';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [open, setOpen] = useState(false);
  const [admin, isAdminLoading] = useAdmin();

  const isAdmin = admin?.admin;
  // console.log(isAdmin);

  const handleToggle = () => {
    setOpen(!open);
  };
  const navLinkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? 'white' : '',
      color: isActive ? 'black' : ''
    };
  };

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };

  const navItems = (
    <>
      <li onClick={handleToggle} className="hover:bg-white hover:font-bold hover:rounded-lg">
        <NavLink to={'/home'} style={navLinkStyles}>
          Home
        </NavLink>
      </li>
      <li onClick={handleToggle} className="hover:bg-white hover:font-bold hover:rounded-lg">
        <NavLink to={'/menu'} style={navLinkStyles}>
          Menu
        </NavLink>
      </li>
      <li onClick={handleToggle} className="hover:bg-white hover:font-bold hover:rounded-lg">
        <NavLink to={'/order'} style={navLinkStyles}>
          Order Food
        </NavLink>
      </li>
      <li onClick={handleToggle} className="hover:bg-white hover:font-bold hover:rounded-lg">
        <NavLink to={'/contact-us'} style={navLinkStyles}>
          Contact
        </NavLink>
      </li>

      {user ? (
        <>
          {!isAdminLoading && isAdmin ? (
            <>
              <li
                onClick={handleToggle}
                className="hover:bg-white hover:font-bold hover:rounded-lg">
                <NavLink to={'dashboard/admin-home'} style={navLinkStyles}>
                  Dashboard
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li
                onClick={handleToggle}
                className="hover:bg-white hover:font-bold hover:rounded-lg">
                <NavLink to={'dashboard/my-cart'} style={navLinkStyles}>
                  Dashboard
                </NavLink>
              </li>
            </>
          )}
          <li className="hover:bg-white hover:text-black hover:font-bold hover:rounded-lg">
            <NavLink to={'/dashboard/my-cart'}>
              <div className="indicator">
                <>
                  Cart
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-secondary badge-sm font-bold  indicator-item">
                    {cart?.length ? cart?.length : 0}
                  </span>
                </>
              </div>
            </NavLink>
          </li>

          <li>
            <button
              onClick={handleLogout}
              className="hover:bg-white hover:font-bold hover:rounded-lg
            ">
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li onClick={handleToggle} className="hover:bg-white hover:font-bold hover:rounded-lg">
            <NavLink to={'/login'} style={navLinkStyles}>
              Log in
            </NavLink>
          </li>
          <li onClick={handleToggle} className="hover:bg-white hover:font-bold hover:rounded-lg">
            <NavLink to={'/signup'} style={navLinkStyles}>
              Sign Up
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="max-w-[1400px] navbar bg-black fixed z-10 bg-opacity-30 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label onClick={handleToggle} tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {open ? (
              <>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-30 rounded-box w-52">
                  {navItems}
                </ul>
              </>
            ) : (
              ''
            )}
          </div>
          <Link to={'/'} className="btn btn-ghost normal-case text-xl">
            Regal Dragon
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
