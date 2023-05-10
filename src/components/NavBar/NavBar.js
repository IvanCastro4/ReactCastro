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
      <Navbar bg="primary" variant="dark" className="enlaces">
        <Container >
          
          <Link to ='/'>
            <h3>FunkosGdl</h3>
            </Link>
          <Nav className="me-auto">
            <NavLink to={`/`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Inicio</NavLink>
            <NavLink to='/category/SuperHeroe' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>SuperHeroe</NavLink>
            <NavLink to='/category/anime' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Anime</NavLink>
            <NavLink to='/category/StarWars' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>StarWars</NavLink>
            <NavLink to='/category/Deportistas' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Deporte</NavLink>       
            <CartWidget/>
          </Nav>
        </Container>
      </Navbar>

      <br />
    </>
  );
}

export default NavBar;
 /*const NavBar = () => {
    return(       
          <nav>
            <h3>FunkosGdl</h3>
            <div>
                <button>Superhéroes</button>
                <button>Ánime</button>
                <button>Disney</button>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default NavBar*/