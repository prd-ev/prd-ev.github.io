import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withPrefix } from 'gatsby'
import { Helmet } from 'react-helmet'

import './layout.css'

const Site = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Nav = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-bottom: 50px;
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
      <title>PRDev</title>
    </Helmet>
    <Nav>
      <img
        src={withPrefix('/PRDev-big.png')}
        alt="Logo"
        style={{ width: '300px', height: '300px' }}
      />
      <Title>PRDev</Title>
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
