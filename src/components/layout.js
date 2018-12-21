import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withPrefix, Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import './layout.css'

const Site = styled.div`
  display: flex;
  min-height: 100vh;
  font-size: 20px;
  flex-direction: column;
`

const Nav = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`

const Menu = styled.div`
  display: flex;
  flex-direction: row;
`

const MenuItem = styled(Link)`
  margin: 10px;
  color: #2fad1f;

  &:before {
    background-color: #2fad1f;
  }
`

const Content = styled.div`
  margin: 5vmin;
  color: #47ad23;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
`

const Title = styled.h1`
  font-size: 5rem;
  margin: 0;
`

const Footer = styled.footer`
  margin-bottom: 25px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Layout = ({ children, siteName }) => (
  <Site>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Advent+Pro"
        rel="stylesheet"
      />
      <title>PRDev{siteName ? ' - ' + siteName : ''}</title>
    </Helmet>
    <Nav>
      <img
        src={withPrefix('/PRDev-big.png')}
        alt="Logo"
        style={{
          width: '100px',
          height: '100px',
          marginTop: '1vmin',
          marginBottom: '1vmin',
        }}
      />
      <Title>PRDev</Title>
      <Menu>
        <MenuItem to="/" className={'link'} activeClassName={'active'}>
          Home
        </MenuItem>
        <MenuItem
          to="/resources/"
          className={'link'}
          activeClassName={'active'}
        >
          Resources
        </MenuItem>
      </Menu>
    </Nav>
    <Content>{children}</Content>
    <Footer>
      <a href="https://github.com/prd-ev/">
        <img
          src={withPrefix('/gh.png')}
          alt="Logo"
          style={{ width: '50px', height: '50px' }}
        />
      </a>
    </Footer>
  </Site>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
