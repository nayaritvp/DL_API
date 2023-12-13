import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Buscador = ({ feriados, setFeriadosOtro }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeInput = (e) => {
    const value = e.target.value.toLowerCase().trim();
    setSearchValue(value);
    const feriadosFiltrados = feriados.filter(f =>
      f.title.toLowerCase().includes(value)
    );
    setFeriadosOtro(feriadosFiltrados);
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary flex-column">
      <Container fluid>
        <Navbar.Brand>Feriados</Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 flex-row" style={{ maxHeight: '100px' }}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchValue}
                onChange={handleChangeInput}
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Buscador;

