import React, { useState } from 'react';
import { Navbar, Nav, Container, Row, Col, NavDropdown } from 'react-bootstrap';
import '../index.css';
import { useMediaQuery } from './MediaQuery';

const Header = () => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const isRowBased = useMediaQuery('(min-width: 500px)');
  return (
    <header>
      <Navbar
        bg='white'
        variant='light'
        expand='lg'
        collapseOnSelect
        height='10px'
      >
        <Container>
          <Navbar.Brand href='/'>Fadoll</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/cart'>
                <i class='fas fa-shopping-cart'></i> Cart (1)
              </Nav.Link>
              <Nav.Link href='/login'>
                <i class='fas fa-user'></i> Sign in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Nav style={{ backgroundColor: 'green' }} className='justify-content-end'>
        <Container>
          <Row>
            <NavDropdown
              title={<span style={{ color: 'white' }}>Dropdown</span>}
              id='nav-dropdown'
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <Container style={styles.dropdown(isRowBased)}>
                <Row>
                  <Col>
                    <NavDropdown.Item eventKey='4.1'>Action</NavDropdown.Item>
                    <NavDropdown.Item eventKey='4.2'>
                      Another action
                    </NavDropdown.Item>
                  </Col>
                  <Col>
                    <NavDropdown.Item eventKey='4.3'>
                      Something else here
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey='4.4'>
                      Separated link
                    </NavDropdown.Item>
                  </Col>
                  <Col>
                    <NavDropdown.Item eventKey='4.3'>
                      Something else here
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey='4.4'>
                      Separated link
                    </NavDropdown.Item>
                  </Col>
                  <Col>
                    <NavDropdown.Item eventKey='4.3'>
                      Something else here
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey='4.4'>
                      Separated link
                    </NavDropdown.Item>
                  </Col>
                </Row>
              </Container>
            </NavDropdown>
            <Nav.Link style={{ color: 'white' }} href='/cart'>
              <i class='fas fa-home'></i>
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href='/cart'>
              What's New?
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href='/cart'>
              MEN
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href='/cart'>
              WOMEN
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href='/cart'>
              KIDS
            </Nav.Link>
            <NavDropdown
              title={<span style={{ color: 'white' }}>Dropdown</span>}
              id='nav-dropdown'
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <Container style={styles.dropdown(isRowBased)}>
                <Row>
                  <Col>
                    <NavDropdown.Item eventKey='4.1'>Action</NavDropdown.Item>
                    <NavDropdown.Item eventKey='4.2'>
                      Another action
                    </NavDropdown.Item>
                  </Col>
                  <Col>
                    <NavDropdown.Item eventKey='4.3'>
                      Something else here
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey='4.4'>
                      Separated link
                    </NavDropdown.Item>
                  </Col>
                  <Col>
                    <NavDropdown.Item eventKey='4.3'>
                      Something else here
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey='4.4'>
                      Separated link
                    </NavDropdown.Item>
                  </Col>
                  <Col>
                    <NavDropdown.Item eventKey='4.3'>
                      Something else here
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey='4.4'>
                      Separated link
                    </NavDropdown.Item>
                  </Col>
                </Row>
              </Container>
            </NavDropdown>
          </Row>
        </Container>
      </Nav>
    </header>
  );
};

const styles = {
  dropdown: (isRowBased) => ({
    width: isRowBased ? 1300 : null,
  }),
};

export default Header;
