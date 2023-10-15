import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/offcanvas'
import 'jquery/dist/jquery.min.js'
import Dropdown from 'react-bootstrap/Dropdown'
const Header = () => {
    return (
        <div>
            <i className=''></i>
            <div className='w-100 position-fixed' style={{ zIndex: "100" }}>
                <nav className="navbarpy-1 navbar-expand-lg navbar-dark bg-dark text-light" style={{ zIndex: "100" }}>
                    <div className=" container-fluid  d-flex justify-content-between align-items-center">
                        <a href='/' className='text-decoration-none'>
                            <div className='text-warning d-flex align-items-center fs-3 py-1'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
                                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
                            </svg>&nbsp;&nbsp; E-Shop</div>
                        </a >
                            <div className="  width-more-than-1000px input-group w-50 searchbar">
                                <input className="form-control searchbar" type="text" placeholder="Enter Product" aria-label="Search . . ." />

                                <div className="input-group-append">
                                    <span className='input-group-text bg-warning' id='basic-addon2'><i className='' style={{ cursor: "pointer" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg></i></span>
                                </div>
                            </div>
                        <div className=' width-more-than-1000px'>
                            <div className='me-2 btn text-light rounded-0 hover-routes'>About</div>
                            <div className='me-2 btn text-light rounded-0 hover-routes'>Contact</div>
                            <div className='me-2 btn text-light rounded-0 hover-routes'>Wishlist</div>
                            <div className='me-2 btn text-light rounded-0 hover-routes'>Cart</div>
                            <div className='me-2 btn text-light rounded-0 hover-routes'>Login</div>
                        </div>
                        <Dropdown className='width-less-than-1000px'>
                            <Dropdown.Toggle variant=" primary" id="dropdown-basic" className='text-light '>
                                Menu
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">About</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Contact</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Wishlist</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Cart</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Login</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </nav> 
            </div> 
        </div> 
    ) 
}

export default Header