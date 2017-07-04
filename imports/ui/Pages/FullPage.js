import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Navbar color="faded" light toggleable>
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand href="/">Title</NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Nav 1</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">Nav 2</NavLink>
                </NavItem>
              </Nav>
          </Navbar>
        </header>

        <main className="full-height">

            <Container fluid className="scroll-wrapper">

              <Row noGutters>
                <Col>
                  <div>
                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                    <p className="lead">
                      <Button color="primary">Learn More</Button>
                    </p>
                  </div>
                </Col>
              </Row>

            </Container>

        </main>

      </div>
    )
  }
}
