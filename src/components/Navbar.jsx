import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const actnavlink = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");
const actnavlinksub = ({ isActive }) =>
  isActive ? "nav-link-sub active" : "nav-link-sub";

const Navabar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="" fixed="top">
        <Container>
          <Navbar.Brand to="#home">
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              height="50"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav justify-content-end">
            <Nav className="mr-auto justify-content-end flex-grow-1 pe-3">
              <NavLink to="/" className={actnavlink}>
                Anasayfa
              </NavLink>
              <NavLink to="/Hakkimizda" className={actnavlink}>
                Hakkımızda
              </NavLink>
              <NavLink to="/Projelerimiz" className={actnavlink}>
                Projelerimiz
              </NavLink>
              <NavDropdown title="Katalog" id="basic-nav-dropdown" className={actnavlinksub}>
                <NavDropdown.Item href="/">
                  <NavLink to="/CatProkast" className={actnavlinksub}>ProKAST</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="/">
                  <NavLink to="/Proalci" className={actnavlinksub}>Pro Alçı</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="/">
                  <NavLink to="/Propiyer" className={actnavlinksub}>Pro Piyer</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink to="/Prokast" className={actnavlink}>Prokast</NavLink>
              <NavLink to="/Iletisim" className={actnavlink}>İletişim</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navabar;
