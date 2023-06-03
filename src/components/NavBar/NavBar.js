/*import {Navbar, Nav, Container} from "react-bootstrap"*/
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink, Link} from 'react-router-dom'


const NavBar = () => {
  return (
    <>      
      <Navbar bg="dark" variant="dark"  className="enlaces"> 
        <Container >
          
          <Link to ={'/'} className="inicio" >
            <h3 >FunkosGdl</h3>
            </Link><br/>
          <Nav className="me-auto" >
            <NavLink to={`/`} className= "enlaces"/*{({isActive}) => isActive ? 'ActiveOption' : 'Option'}*/>Inicio</NavLink> 
            <NavLink to='/category/SuperHeroe' className= "enlaces"/*{({isActive}) => isActive ? 'ActiveOption' : 'Option'}*/>SuperHeroe</NavLink>
            <NavLink to='/category/anime' className="enlaces"/*{({isActive}) => isActive ? 'ActiveOption' : 'Option'}*/>Anime</NavLink>
            <NavLink to='/category/StarWars' className="enlaces"/*{({isActive}) => isActive ? 'ActiveOption' : 'Option'}*/>StarWars</NavLink>
            <NavLink to='/category/Deportistas' className="enlaces"/*{({isActive}) => isActive ? 'ActiveOption' : 'Option'}*/>Deporte</NavLink>       
            <CartWidget/>
          </Nav>
        </Container>
      </Navbar>

      <br />
    </>
  );
}

export default NavBar;

