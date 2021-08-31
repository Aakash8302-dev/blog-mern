import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import {logout} from '../../actions/userActions'

const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Daily Blogs</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ml-auto"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >   
                        <LinkContainer to="/write">
                            <Nav.Link ><i className="fas fa-shopping-cart"></i>Write</Nav.Link>
                        </LinkContainer>
                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id="username">
                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item> 
                            </NavDropdown>
                        ): <LinkContainer to="/login">
                            <Nav.Link ><i className="fas fa-user"></i>Sign In</Nav.Link>
                        </LinkContainer>
                        }
                        
                        
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header