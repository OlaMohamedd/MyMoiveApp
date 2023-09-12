import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import { NavLink } from 'react-router-dom';
import { MdFavorite } from "react-icons/md";
import { ImHome } from "react-icons/im";
import { FaSignInAlt } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { TbJewishStarFilled } from "react-icons/tb";
import { VscSignIn } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';
import { LanguageContext } from '../../Context/Language';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

export default function Header() {
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites.favorites);
  const movies = useSelector((state) => state.movies.movies)
  const { changeLang } = useContext(LanguageContext);

  return (
    <>
      <Navbar className='header' >
        <Container>
          <Navbar.Brand href="#home" className='fw-bold title '>Netflix</Navbar.Brand>
          <Nav className=" bighead">
            <NavLink className="links" to="home"     style={{ textDecoration: "none"}}><ImHome size={20} /></NavLink>
            <NavLink className="links" to="signUp"   style={{ textDecoration: "none"}}><FaSignInAlt size={20} /></NavLink>
            <NavLink className="links" to="login"    style={{ textDecoration: "none"}}><VscSignIn size={20} /></NavLink>
            <NavLink className="links" to="movies"   style={{ textDecoration: "none"}}><MdLocalMovies size={20} /></NavLink>
            <NavLink className="links" to="todo"     style={{ textDecoration: "none"}}><TbJewishStarFilled size={20} /></NavLink>
            <NavLink className="links" to="favorite" style={{ textDecoration: "none"}}><MdFavorite size={20} /><span className="favorites-count p-0 m-0" style={{ color: "white" }}>{favorites.length}</span></NavLink>
            <p className='me-5'>{changeLang}</p>
            <Stack direction="horizontal" gap={2}>
              <Badge bg="warning" text="dark">
              {movies.length}
              </Badge>
            </Stack>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
