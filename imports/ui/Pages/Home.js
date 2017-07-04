import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardBlock, CardText, CardTitle, CardSubtitle} from 'reactstrap';

import {
  NavLink as RouterNavLink
} from 'react-router-dom'

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
                  <NavLink tag={RouterNavLink} to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RouterNavLink} to="/fullpage">Full Page</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RouterNavLink} to="/sidebar">Sidebar</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RouterNavLink} to="/api">API</NavLink>
                </NavItem>
              </Nav>
          </Navbar>
        </header>

        <main className="full-height">

            <Container fluid className="scroll-wrapper">

              <Row noGutters>
                <Col>

                    <CardBlock>
                      <CardTitle>Your Homepage!</CardTitle>
                      <CardSubtitle>(kinda boring)</CardSubtitle>
                    </CardBlock>

                </Col>
              </Row>

            </Container>

        </main>

      </div>
    )
  }
}
