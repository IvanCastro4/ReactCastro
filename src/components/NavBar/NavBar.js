/*import {Navbar, Nav, Container} from "react-bootstrap"*/
import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <>      
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">FunkosGdl</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Superhéroes</Nav.Link>
            <Nav.Link href="#pricing">Ánime</Nav.Link>
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