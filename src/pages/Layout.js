// external dependencies
import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// internal dependencies
import {
  BrandLink,
  BrandStyling
} from '../styles/pagestyles/LayoutStyles';

const Layout = () => {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
        <BrandLink to="/">
          <Navbar.Brand>
            <BrandStyling>O(1)SoftwareNetwork</BrandStyling>
          </Navbar.Brand>
        </BrandLink>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Layout;